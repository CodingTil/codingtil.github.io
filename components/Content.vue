<template>
	<NuxtContent class="prose" :document="document" />
</template>

<script>
export default {
	props: {
		document: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>
.nuxt-content {
	@apply container my-3 mx-1 text-foreground-primary;
}

.nuxt-content img {
	@apply relative max-w-full mx-auto pl-0 pr-2 overflow-hidden;
}

.nuxt-content :is(h1, h2, h3, h4, h5, h6, th, td, a, p) {
	@apply text-foreground-primary;
}

.nuxt-content h1 {
	@apply mt-8 mb-0 pb-1 border-b border-foreground-primary;
}

.nuxt-content h2 {
	@apply mt-4 -mb-1;
}

.nuxt-content hr {
	@apply border-foreground-primary;
}

.nuxt-content a.my-a {
	@apply no-underline;
}

.nuxt-content p {
	@apply my-3 leading-6;
}

.nuxt-content ul {
	@apply px-7 -mt-1;
}

.nuxt-content li {
	@apply mb-1 leading-6;
}

.nuxt-content .sup {
	@apply text-foreground-secondary;
}

.nuxt-content .cell {
	@apply float-left mb-4 -mt-8 mx-0 min-w-full md:min-w-0 md:w-1/2;
}
</style>