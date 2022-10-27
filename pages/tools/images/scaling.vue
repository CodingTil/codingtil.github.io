<i18n lang="yaml">
en:
  title: "Image Scaling"
  upload: "Upload Image"
  scaling:
    nearestneighbor: "Nearest-neigbor Interpolation"
    bilinear: "Bilinear Interpolation"
    bicubic: "Bicubic Interpolation"

de:
  title: "Bildskalierung"
  upload: "Bild Hochladen"
  scaling:
    nearestneighbor: "Nächste-Nachbarn-Interpolation"
    bilinear: "Bilineare Interpolation"
    bicubic: "Bikubische Interpolation"
</i18n>

<template>
	<div ref="outterdiv">
		<h1>{{ $t("title") }}</h1>

		<div class="my-8">
			<div v-if="!image || !image.src" class="flex justify-around">
				<label
					class="
						font-semibold
						text-xl
						bg-background-secondary
						border-2 border-background-tertiary
						p-4
						rounded-xl
						cursor-pointer
					"
				>
					<input
						type="file"
						accept="image/*"
						@change="paintSelected"
						class="hidden"
					/>
					{{ $t("upload") }}
				</label>
			</div>

			<div v-show="image && image.src">
				<label>
					<input
						type="file"
						accept="image/*"
						@change="paintSelected"
						class="hidden"
					/>
					<canvas ref="canvas" class="cursor-pointer" />
				</label>

				<hr class="mt-4" />

				<div
					class="
						my-8
						flex flex-row flex-wrap
						justify-around
						gap-x-4 gap-y-4
					"
				>
					<select v-model="selectedScalingMethod">
						<option
							v-for="(value, name) in this.scalingMethods"
							v-bind:key="name"
							v-bind:value="name"
						>
							{{ $t("scaling." + name) }}
						</option>
					</select>

					<div class="flex flex-row flex-nowrap">
						<NumberInput v-model="width" placeholder="width" />
						<NumberInput v-model="height" placeholder="height" />
					</div>

					<button
						class="
							text-4xl text-rainbow-1
							bg-background-primary
							focus:outline-none
							hover:text-rainbow-2
						"
						@click="paintCurrent"
					>
						<fa :icon="faChevronCircleRight" />
					</button>
				</div>

				<hr class="mb-4" />

				<a ref="download" download="image.png"
					><canvas ref="result" class="cursor-pointer" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
export default {
	layout: "tools-layout",
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
		return {
			title: "Upscaling | Til Mohr",
			htmlAttrs: {
				...i18nHead.htmlAttrs,
			},
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Tools - Image - Upscaling",
				},
				...i18nHead.meta,
			],
			link: [...i18nHead.link],
		};
	},
	computed: {
		faChevronCircleRight() {
			return faChevronCircleRight;
		},
	},
	data() {
		return {
			image: null,
			result: null,
			scalingMethods: {
				nearestneighbor: this.nearest_neighbor,
				bilinear: this.bilinear,
				bicubic: this.bicubic,
			},
			selectedScalingMethod: "nearestneighbor",
			width: 0,
			height: 0,
			hasResizeEvent: false,
			working: false,
		};
	},
	methods: {
		repaint() {
			this.paintImage(this.$refs.canvas, this.image);
			this.paintImage(this.$refs.result, this.result);
		},
		paintImage(canvas, image) {
			canvas.width = this.$refs.outterdiv.clientWidth;
			canvas.height = (image.height / image.width) * canvas.width;
			let ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(
				image,
				0,
				0,
				image.width,
				image.height,
				0,
				0,
				canvas.width,
				canvas.height
			);
		},
		paintSelected(e) {
			let FR = new FileReader();
			FR.addEventListener("load", (evt) => {
				this.image = new Image();
				this.image.addEventListener("load", () => {
					this.selectedScalingMethod = "nearestneighbor";
					this.width = this.image.width;
					this.height = this.image.height;
					if (!this.hasResizeEvent) {
						window.addEventListener(
							"resize",
							() => {
								this.repaint();
							},
							true
						);
						this.hasResizeEvent = true;
					}
					this.paintImage(this.$refs.canvas, this.image);
					this.paintCurrent();
				});
				this.image.src = evt.target.result;
			});
			FR.readAsDataURL(e.target.files[0]);
		},
		paintCurrent() {
			this.result = this.scalingMethods[this.selectedScalingMethod]();
			this.$refs.download.href = this.result.src;
		},
		nearest_neighbor() {
			// Preperation
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext("2d");

			canvas.width = this.image.width;
			canvas.height = this.image.height;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(this.image, 0, 0);
			let input = ctx.getImageData(
				0,
				0,
				this.image.width,
				this.image.height
			);

			let inputData = input.data;
			let resultData = new Uint8ClampedArray(
				this.width * this.height * 4
			);

			//Actuall Modification
			let x_ratio = this.image.width / this.width;
			let y_ratio = this.image.height / this.height;
			let pixel;
			let px, py;
			let old_pixel;
			for (let y = 0; y < this.height; y++) {
				for (let x = 0; x < this.width; x++) {
					pixel = (x + y * this.width) * 4;
					px = Math.min(Math.round(x * x_ratio), this.image.width);
					py = Math.min(Math.round(y * y_ratio), this.image.height);
					old_pixel = (px + py * this.image.width) * 4;
					resultData[pixel] = inputData[old_pixel];
					resultData[pixel + 1] = inputData[old_pixel + 1];
					resultData[pixel + 2] = inputData[old_pixel + 2];
					resultData[pixel + 3] = inputData[old_pixel + 3];
				}
			}

			// Return
			let result = new ImageData(resultData, this.width, this.height);

			canvas.width = this.width;
			canvas.height = this.height;
			ctx.putImageData(result, 0, 0);
			let img = new Image();
			img.crossOrigin = "anonymous";
			img.addEventListener("load", () => {
				this.paintImage(this.$refs.result, img);
			});
			img.src = canvas.toDataURL();

			return img;
		},
		bilinear() {
			// Preperation
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext("2d");

			canvas.width = this.image.width;
			canvas.height = this.image.height;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(this.image, 0, 0);
			let input = ctx.getImageData(
				0,
				0,
				this.image.width,
				this.image.height
			);

			let inputData = input.data;
			let resultData = new Uint8ClampedArray(
				this.width * this.height * 4
			);

			//Actuall Modification
			let x_ratio = this.image.width / this.width;
			let y_ratio = this.image.height / this.height;
			let pixel;
			let x_diff, y_diff, px, py, px2, py2;
			for (let y = 0; y < this.height; y++) {
				for (let x = 0; x < this.width; x++) {
					pixel = (x + y * this.width) * 4;
					px = Math.min(x * x_ratio, this.image.width);
					py = Math.min(y * y_ratio, this.image.height);
					x_diff = px % 1;
					y_diff = py % 1;
					px = Math.floor(px);
					py = Math.floor(py);
					px2 = Math.min(px + 1, this.image.width);
					py2 = Math.min(py + 1, this.image.height);
					for (let i = 0; i < 4; i++) {
						resultData[pixel + i] =
							inputData[(px + py * this.image.width) * 4 + i] *
								(1 - x_diff) *
								(1 - y_diff) +
							inputData[(px2 + py * this.image.width) * 4 + i] *
								x_diff *
								(1 - y_diff) +
							inputData[(px + py2 * this.image.width) * 4 + i] *
								(1 - x_diff) *
								y_diff +
							inputData[(px2 + py2 * this.image.width) * 4 + i] *
								x_diff *
								y_diff;
					}
				}
			}

			// Return
			let result = new ImageData(resultData, this.width, this.height);

			canvas.width = this.width;
			canvas.height = this.height;
			ctx.putImageData(result, 0, 0);
			let img = new Image();
			img.crossOrigin = "anonymous";
			img.addEventListener("load", () => {
				this.paintImage(this.$refs.result, img);
			});
			img.src = canvas.toDataURL();

			return img;
		},
		bicubic() {
			// Preperation
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext("2d");

			canvas.width = this.image.width;
			canvas.height = this.image.height;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(this.image, 0, 0);
			let input = ctx.getImageData(
				0,
				0,
				this.image.width,
				this.image.height
			);

			let inputData = input.data;
			let resultData = new Uint8ClampedArray(
				this.width * this.height * 4
			);

			//Actuall Modification
			function cubicInterpolator(y0, y1, y2, y3, mu) {
				let a0, a1, a2, a3, mu2;

				mu2 = mu * mu;
				a0 = y3 - y2 - y0 + y1;
				a1 = y0 - y1 - a0;
				a2 = y2 - y0;
				a3 = y1;

				return a0 * mu * mu2 + a1 * mu2 + a2 * mu + a3;
			}

			let x_ratio = this.image.width / this.width;
			let y_ratio = this.image.height / this.height;
			let pixel;
			let a = Array.from({ length: 4 }, () => 0);
			let x_diff, y_diff, px, py;
			let postitions = Array.from({ length: 8 }, () => 0);
			for (let y = 0; y < this.height; y++) {
				for (let x = 0; x < this.width; x++) {
					pixel = (x + y * this.width) * 4;
					px = x * x_ratio;
					py = y * y_ratio;
					x_diff = px % 1;
					y_diff = py % 1;
					px = Math.floor(px);
					py = Math.floor(py);

					postitions[0] = Math.max(px - 1, 0);
					postitions[1] = px;
					postitions[2] = Math.min(px + 1, this.image.width);
					postitions[3] = Math.min(px + 2, this.image.width);
					postitions[4] = Math.max(py - 1, 0);
					postitions[5] = py;
					postitions[6] = Math.min(py + 1, this.image.height);
					postitions[7] = Math.min(py + 2, this.image.height);

					for (let i = 0; i < 4; i++) {
						for (let j = 0; j < 4; j++) {
							a[j] = cubicInterpolator(
								inputData[
									(postitions[0] +
										postitions[4 + j] * this.image.width) *
										4 +
										i
								],
								inputData[
									(postitions[1] +
										postitions[4 + j] * this.image.width) *
										4 +
										i
								],
								inputData[
									(postitions[2] +
										postitions[4 + j] * this.image.width) *
										4 +
										i
								],
								inputData[
									(postitions[3] +
										postitions[4 + j] * this.image.width) *
										4 +
										i
								],
								x_diff
							);
						}
						resultData[pixel + i] = cubicInterpolator(
							a[0],
							a[1],
							a[2],
							a[3],
							y_diff
						);
					}
				}
			}

			// Return
			let result = new ImageData(resultData, this.width, this.height);

			canvas.width = this.width;
			canvas.height = this.height;
			ctx.putImageData(result, 0, 0);
			let img = new Image();
			img.crossOrigin = "anonymous";
			img.addEventListener("load", () => {
				this.paintImage(this.$refs.result, img);
			});
			img.src = canvas.toDataURL();

			return img;
		},
	},
};
</script>