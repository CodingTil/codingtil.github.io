<template>
	<a :href="path" class="my-a">
		<slot />
		<font-awesome-icon icon="fa-solid fa-file-pdf" class="pl-1 text-red-400" />
	</a>
</template>

<script setup>
	const { path } = defineProps({
		path: {
			type: String,
			required: true,
		},
	})
</script>