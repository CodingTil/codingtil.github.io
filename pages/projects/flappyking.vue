<template>
	<ProjectPost :path="path" />
</template>

<script setup>
	const { locale } = useI18n()
	const path = computed(() => `/${locale.value}/projects/2020-03-01_flappyking`)
</script>