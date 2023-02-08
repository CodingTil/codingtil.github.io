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
						xl:flex-nowrap
					"
				>
					<div
						class="
							border-r-0
							xl:border-r-2
							border-solid border-foreground-tertiary
							pr-2
						"
					>
						<Content :path="intro" />
					</div>
					<div
						class="
							border-t-2
							xl:border-t-0
							border-solid border-foreground-tertiary
							p-2
							xl:pr-0
						"
					>
						<div
							class="
								flex flex-row
								xl:flex-col
								flex-wrap
								justify-center
								xl:justify-start
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
								<font-awesome-icon icon="fa-solid fa-envelope" />
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
								<font-awesome-icon icon="fa-brands fa-square-github" />
								<span class="ml-2 whitespace-nowra"
									>CodingTil</span
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section
			class="cv-section bg-background-tertiary text-foreground-primary"
		>
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ t("projects") }}
				</div>
				<div
					class="flex flex-row flex-wrap justify-around p-5"
				>
					<ProjectCard
					v-for="(path, i) in projects"
					:key="i"
					:path="path" />
				</div>
			</div>
		</section>

		<section
			class="cv-section bg-foreground-tertiary text-background-primary"
		>
			<div class="section-box">
				<div class="section-title border-background-primary">
					{{ t("more") }}
				</div>
				<div>
					<Content :path="more" />
				</div>
			</div>
		</section>

		<section class="cv-section text-foreground-primary">
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ t("teaching") }}
				</div>
				<div
					ref="teaching_container"
				>
					<CvItemTeaching
					v-for="(path, i) in teachings"
					:key="i"
					class="min-w-full w-full"
					:path="path" />
				</div>
			</div>
		</section>

		<section
			class="cv-section bg-background-tertiary text-foreground-primary"
		>
			<div class="section-box">
				<div class="section-title border-foreground-secondary">
					{{ t("education") }}
				</div>

				<div
					ref="education_container"
				>
					<CvItemEducation
					v-for="(path, i) in educations"
					:key="i"
					class="min-w-full w-full"
					:path="path" />
				</div>
			</div>
		</section>

		<section
			class="
				mx-0
				xl:mx-auto
				max-w-7xl
				flex flex-col
				xl:flex-row
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
				<font-awesome-icon icon="fa-solid fa-envelope" />
				<span class="ml-2">me@tilmohr.com</span>
			</a>
			<a
				href="https://github.com/CodingTil"
				class="flex items-center text-foreground-primary"
			>
				<font-awesome-icon icon="fa-brands fa-square-github" />
				<span class="ml-2">CodingTil</span>
			</a>
		</section>
	</div>
</template>

<script setup>
	const { t } = useI18n({useScope: 'local'})

	// split by /, get first
	const { locale } = useI18n()
	const intro = computed(() => `/${locale.value}/about/intro`)
	const more = computed(() => `/${locale.value}/about/more`)
	const teachings_path = await useAsyncData("navigation_teaching", () => fetchContentNavigation(`/${locale.value}/teaching`))
	const teachings = computed(() => teachings_path.data.value[0].children[0].children.map((child) => child._path).sort().reverse())
	const educations_path = await useAsyncData("navigation_education", () => fetchContentNavigation(`/${locale.value}/education`))
	const educations = computed(() => educations_path.data.value[0].children[0].children.map((child) => child._path).sort().reverse())
	const projects_path = await useAsyncData("navigation_project", () => fetchContentNavigation(`/${locale.value}/projects`))
	const projects = computed(() => projects_path.data.value[0].children[0].children.map((child) => child._path).sort().reverse())

	const teaching_container = ref(null)
	const education_container = ref(null)
	onMounted(async () => {
		await nextTick()
		var elems = []
		// add all descendent elements to elems, if that descendent has the class "cv-item"
		elems = elems.concat(Array.from(teaching_container.value.querySelectorAll(".cv-item")))
		elems = elems.concat(Array.from(education_container.value.querySelectorAll(".cv-item")))
		for (var i = 0; i < elems.length; i++) {
			elems[i].className += " border-rainbow-" + ((i % 6) + 1)
		}
	})

	useHead({
		title: "Til Mohr",
		titleTemplate: title => title,
	})
</script>

<style>
.cv-section {
	@apply container mx-0 my-0 w-screen min-w-full;
}
.section-box {
	@apply flex flex-col justify-center items-center py-8 px-4 xl:px-0 mx-0 xl:mx-auto max-w-7xl;
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