<template>
	<div class="container mx-0 my-0 w-screen min-w-full">
		<div class="mx-auto px-4 xl:px-0 mt-4 mb-5 max-w-7xl">
			<div
				class="
					flex flex-row
					justify-center
					md:justify-between
					items-center
					flex-wrap
					md:flex-nowrap
				"
			>
				<div class="mb-4">
					<h1 class="text-foreground-primary text-4xl font-bold mb-2">
						{{ data.title }}
					</h1>
					<h3 class="text-foreground-secondary text-2xl font-bold">
						{{ data.tagline }}
					</h3>
				</div>
				<div
					class="
						border-t-2
						md:border-t-0
						border-solid border-foreground-tertiary
						p-2
						md:pr-0
					"
				>
					<div
						class="
							flex flex-row
							md:flex-col
							flex-wrap
							justify-center
							md:justify-start
						"
					>
						<div
							href="mailto:til.mohr@rwth-aachen.com"
							class="
								mx-2
								flex
								items-center
								text-foreground-primary
							"
						>
							<font-awesome-icon icon="fa-solid fa-calendar-days" />
							<span class="ml-2 whitespace-nowrap">{{
								data.date_range
							}}</span>
						</div>
						<a
							:href="data.url"
							class="
								mx-2
								flex
								items-center
								text-foreground-primary
							"
						>
							<font-awesome-icon icon="fa-brands fa-square-github" />
							<span class="ml-2 whitespace-nowra">git</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div :class="'h-2 w-full ' + data.color" />

		<div class="mt-8 mb-14 px-4 xl:px-0 mx-auto max-w-7xl">
			<Content :path="path" />
		</div>
	</div>
</template>

<script setup>
	const { path } = defineProps({
		path: {
			type: String,
			required: true,
		},
	})
	const { data } = await useAsyncData(path, () => queryContent(path).findOne())
</script>