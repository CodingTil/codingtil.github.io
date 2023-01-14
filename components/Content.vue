<template>
	<ContentDoc class="nuxt-content prose" :path="path" />
</template>

<script setup>
	const { path } = defineProps({
		path: {
			type: String,
			required: true,
		},
	})
</script>