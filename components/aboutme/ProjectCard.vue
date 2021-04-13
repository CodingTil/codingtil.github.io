<template>
	<NuxtLink class="project-box" :to="localePath('/aboutme/projects/' + document.slug)">
		<div class="thumbnail">
			<img :src="require(`~/assets/images/projects${document.image}`)" />
			<div :class="'overlay overlay-text hover:' + document.color">
				{{ document.tagline }}
			</div>
		</div>
		<br>
		<div class="title">
			{{ document.title }}
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		document: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
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