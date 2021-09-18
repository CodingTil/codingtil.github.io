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

				<div class="my-8 flex flex-row flex-wrap justify-around">
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
						<number-input v-model="width" placeholder="width" />
						<number-input v-model="height" placeholder="height" />
					</div>
				</div>

				<canvas ref="result" class="cursor-pointer" />
			</div>
		</div>
	</div>
</template>

<script>
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
	data() {
		return {
			image: null,
			scalingMethods: {
				nearestneighbor: this.nearest_neighbor,
				bilinear: this.bilinear,
				bicubic: this.bicubic,
			},
			selectedScalingMethod: "nearestneighbor",
			width: 0,
			height: 0,
		};
	},
	// REMOVE THIS!
	watch: {
		selectedScalingMethod: {
			handler(val) {
				this.paintCurrent();
			},
		},
		width: {
			handler(val, oldval) {
				if (oldval != 0) this.paintCurrent();
			},
		},
		height: {
			handler(val, oldval) {
				if (oldval != 0) this.paintCurrent();
			},
		},
	},
	methods: {
		paintImage(ctx, image) {
			ctx.canvas.width = this.$refs.outterdiv.clientWidth;
			ctx.canvas.height = (image.height / image.width) * ctx.canvas.width;
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.drawImage(
				image,
				0,
				0,
				image.width,
				image.height,
				0,
				0,
				ctx.canvas.width,
				ctx.canvas.height
			);
		},
		paintSelected(e) {
			let FR = new FileReader();
			FR.addEventListener("load", (evt) => {
				this.image = new Image();
				this.image.addEventListener("load", () => {
					this.width = this.image.width;
					this.height = this.image.height;
					this.paintImage(
						this.$refs.canvas.getContext("2d"),
						this.image
					);
					this.paintCurrent();
				});
				this.image.src = evt.target.result;
			});
			FR.readAsDataURL(e.target.files[0]);
		},
		paintCurrent() {
			this.nearest_neighbor();
		},
		nearest_neighbor() {
			let canvas = document.createElement("canvas");
			let ctx = canvas.getContext("2d");

			canvas.width = this.image.naturalWidth;
			canvas.height = this.image.naturalHeight;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(this.image, 0, 0);
			// let input = ctx.getImageData(
			// 	0,
			// 	0,
			// 	this.image.width,
			// 	this.image.height
			// );

			let img = new Image();
			// img.setAttribute("crossOrigin", "anonymous");
			img.addEventListener("load", () => {
				this.paintImage(this.$refs.result.getContext("2d"), img);
			});
			setTimeout(() => {
				img.src = this.$refs.canvas.toDataURL();
			}, 2000);

			// canvas.width = this.width;
			// canvas.height = this.height;
			// let result = ctx.createImageData(this.width, this.height);

			// let inputData = input.data;
			// let resultData = result.data;

			// // for (let j = 0; j < this.height; j++) {
			// // 	for (let i = 0; i < this.width; i++) {
			// // 		let x = (i + j * this.width) * 4;
			// // 		resultData[x] = inputData[x];
			// // 	}
			// // }

			// resultData = inputData;

			// ctx.putImageData(result, 0, 0);

			// // let img = new Image();
			// // img.src = canvas.toDataURL();
		},
		bilinear() {},
		bicubic() {},
	},
};
</script>