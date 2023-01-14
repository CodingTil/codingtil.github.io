<template>
	<CvItem :main_header="data.title" :right_header="data.location" :subtitle="data.education + '<br>' + data.date_range" :path="path" />
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