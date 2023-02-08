<template>
	<NuxtLink class="project-box" :to="localePath('/projects/' + data.slug)">
		<!--
		<div class="thumbnail">
			<img :src="images[data.image]" />
		</div>
		-->
		<div class="thumbnail">
			<img :src="images[data.image]" />
			<div :class="'overlay overlay-text hover:' + data.color">
				{{ data.tagline }}
			</div>
		</div>
		<br>
		<div class="title">
			{{ data.title }}
		</div>
	</NuxtLink>
</template>

<script setup>
	const { path } = defineProps({
		path: {
			type: String,
			required: true,
		},
	})
	const { data } = await useAsyncData(path, () => queryContent(path).findOne())

	const glob = import.meta.glob('~/assets/images/projects/*/*.png', { eager: true })
	const images = Object.fromEntries(
		Object.entries(glob).map(([path, module]) => ["/" + path.split("/").slice(-2).join("/"), module.default])
	)
</script>

<style>
.project-box {
	@apply py-3 overflow-auto mx-2;
}

.thumbnail {
	@apply h-auto relative mb-3 inline-block;
}

.overlay {
	display: none;
}

.overlay-text {
	@apply text-white font-medium p-5;
}

.thumbnail img {
	@apply opacity-100 hover:opacity-0;
}

.thumbnail:hover .overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: inline-block;
}

.title {
	@apply text-foreground-primary font-medium;
}

@media (min-width: 640px) {
	:is(.project-box) {
		max-width: 100%;
	}
}

@media (min-width: 768px) {
	:is(.project-box) {
		max-width: 45%;
	}
}

@media (min-width: 1024px) {
	:is(.project-box) {
		max-width: 30%;
	}
}
</style>