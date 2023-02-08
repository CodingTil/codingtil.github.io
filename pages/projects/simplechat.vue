<template>
	<ProjectPost :path="path" />
</template>

<script setup>
	const { locale } = useI18n()
	const path = computed(() => `/${locale.value}/projects/2021-02-01_simplechat`)
</script>