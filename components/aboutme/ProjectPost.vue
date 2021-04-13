<template>
	<div class="container mx-0 my-0 w-screen min-w-full">
		<div class="px-2 mx-auto mt-4 mb-5 max-w-6xl">
			<div class="flex flex-row justify-center md:justify-between items-center flex-wrap md:flex-nowrap">
				<div class="mb-4">
					<h1 class="text-foreground-primary text-4xl font-bold mb-2">{{ project.title }}</h1>
					<h3 class="text-foreground-secondary text-2xl font-bold">{{ project.tagline }}</h3>
				</div>
				<div class="border-t-2 md:border-t-0 border-solid border-foreground-tertiary p-2 md:pr-0">
					<div class="flex flex-row md:flex-col flex-wrap justify-center md:justify-start">
						<div href="mailto:til.mohr@rwth-aachen.com" class="mx-2 flex items-center text-foreground-primary">
							<fa :icon="faCalendarAlt" />
							<span class="ml-2 whitespace-nowrap">{{ project.date_range }}</span>
						</div>
						<a :href="project.url" class="mx-2 flex items-center text-foreground-primary">
							<fa :icon="faGithubSquare" />
							<span class="ml-2 whitespace-nowra">git</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div :class='"h-2 w-full " + project.color' />

		<div class="mt-8 mb-14 px-2 mx-auto max-w-6xl">
			<Content :document="project" />
		</div>

		<FooterRainbow />
	</div>
</template>

<script>
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default {
	computed: {
		faCalendarAlt() { return faCalendarAlt; },
		faGithubSquare() { return faGithubSquare; },
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>

</style>