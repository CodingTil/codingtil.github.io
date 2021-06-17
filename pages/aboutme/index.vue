<i18n lang="yaml">
en:
  projects: "Projects"
  more: "More About Me"
  experience: "Experience"
  teaching: "Teaching"
  education: "Education"

de:
  projects: "Projekte"
  more: "Mehr Über Mich"
  experience: "Erfahrung"
  teaching: "Lehre"
  education: "Bildung"
</i18n>

<template>
	<div class="min-w-full">
		<!-- Intro -->
		<section class="cv-section">
			<div class="section-box">
				<div
					class="
						flex flex-row
						justify-center
						items-center
						flex-wrap
						lg:flex-nowrap
					"
				>
					<div
						class="
							border-r-0
							lg:border-r-2
							border-solid border-foreground-tertiary
							pr-2
						"
					>
						<Content :document="intro" />
					</div>
					<div
						class="
							border-t-2
							lg:border-t-0
							border-solid border-foreground-tertiary
							p-2
							lg:pr-0
						"
					>
						<div
							class="
								flex flex-row
								lg:flex-col
								flex-wrap
								justify-center
								lg:justify-start
							"
						>
							<a
								href="mailto:me@tilmohr.com"
								class="
									mx-2
									flex
									items-center
									text-foreground-primary
								"
							>
								<fa :icon="faEnvelope" />
								<span class="ml-2 whitespace-nowrap"
									>me@tilmohr.com</span
								>
							</a>
							<a
								href="https://github.com/CodingTil"
								class="
									mx-2
									flex
									items-center
									text-foreground-primary
								"
							>
								<fa :icon="faGithubSquare" />
								<span class="ml-2 whitespace-nowra"
									>CodingTil</span
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects -->
		<section
			class="cv-section bg-background-tertiary text-foreground-primary"
		>
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ $t("projects") }}
				</div>
				<div class="flex flex-row flex-wrap justify-around p-5">
					<project-card
						v-for="(post, i) in projects"
						:key="i"
						:document="post"
					/>
				</div>
			</div>
		</section>

		<!-- More about me -->
		<section
			class="cv-section bg-foreground-tertiary text-background-primary"
		>
			<div class="section-box">
				<div class="section-title border-background-primary">
					{{ $t("more") }}
				</div>
				<div>
					<Content :document="more" />
				</div>
			</div>
		</section>

		<!-- Experience -->
		<section
			v-if="experiences.length != 0"
			class="cv-section bg-background-secondary text-foreground-primary"
		>
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ $t("experience") }}
				</div>
			</div>
		</section>

		<!-- Teaching -->
		<section class="cv-section text-foreground-primary">
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ $t("teaching") }}
				</div>

				<div
					v-for="(post, i) in teachings"
					:key="i"
					class="min-w-full w-full"
				>
					<cv-item
						:main_header="post.title"
						:right_header="post.location"
						:subtitle="post.employer + '<div />' + post.date_range"
						:content="post"
					/>
				</div>
			</div>
		</section>

		<!-- Education -->
		<section
			class="cv-section bg-background-tertiary text-foreground-primary"
		>
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ $t("education") }}
				</div>

				<div
					v-for="(post, i) in educations"
					:key="i"
					class="min-w-full w-full"
				>
					<cv-item
						:main_header="post.title"
						:right_header="post.location"
						:subtitle="post.education + '<div />' + post.date_range"
						:content="post"
					/>
				</div>
			</div>
		</section>

		<!-- Contact -->
		<section
			class="
				mx-0
				lg:mx-auto
				max-w-7xl
				flex flex-col
				lg:flex-row
				flex-wrap
				items-center
				justify-evenly
				space-y-1
				py-8
			"
		>
			<a
				href="mailto:me@tilmohr.com"
				class="flex items-center text-foreground-primary"
			>
				<fa :icon="faEnvelope" />
				<span class="ml-2">me@tilmohr.com</span>
			</a>
			<a
				href="https://github.com/CodingTil"
				class="flex items-center text-foreground-primary"
			>
				<fa :icon="faGithubSquare" />
				<span class="ml-2">CodingTil</span>
			</a>
		</section>
	</div>
</template>

<script>
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default {
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
		return {
			title: "About me | Til Mohr",
			htmlAttrs: {
				...i18nHead.htmlAttrs,
			},
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Homepage",
				},
				...i18nHead.meta,
			],
			link: [...i18nHead.link],
		};
	},
	computed: {
		faEnvelope() {
			return faEnvelope;
		},
		faGithubSquare() {
			return faGithubSquare;
		},
	},
	async asyncData(context) {
		const { $content, app } = context;
		const about = await $content(`${app.i18n.locale}/about`)
			.sortBy("slug")
			.fetch();
		const intro = about[0];
		const more = about[1];
		const projects = await $content(`${app.i18n.locale}/projects`)
			.sortBy("slug", "desc")
			.fetch();
		const experiences = [];
		const teachings = await $content(`${app.i18n.locale}/teaching`)
			.sortBy("slug", "desc")
			.fetch();
		const educations = await $content(`${app.i18n.locale}/education`)
			.sortBy("slug", "desc")
			.fetch();

		const data = {
			intro,
			more,
			projects,
			experiences,
			teachings,
			educations,
		};
		return data;
	},
	mounted: function () {
		var elems = this.$el.querySelectorAll(".cv-item");
		for (var i = 0; i < elems.length; i++) {
			elems[i].className += " border-rainbow-" + ((i % 6) + 1);
		}
	},
};
</script>

<style>
.cv-section {
	@apply container mx-0 my-0 w-screen min-w-full;
}

.section-box {
	@apply flex flex-col justify-center items-center py-8 px-4 lg:px-0 mx-0 lg:mx-auto max-w-7xl;
}

.section-title {
	@apply inline-block px-6 py-4 w-min
		font-bold text-xl whitespace-nowrap
		border border-solid;
}

.rainbow-footer {
	@apply flex flex-nowrap min-w-full h-3;
}

.rainbow-stripe {
	@apply min-h-full w-1/6;
}
</style>