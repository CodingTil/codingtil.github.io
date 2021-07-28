<template>
	<nuxt-link :to="localePath(link)" class="sidebar-list-item">
		{{ title }}
	</nuxt-link>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
.sidebar-list-item {
	@apply font-medium text-foreground-secondary pl-2 py-0.5 mb-1;
}

a.nuxt-link-exact-active {
	@apply bg-background-tertiary rounded;
}
</style>