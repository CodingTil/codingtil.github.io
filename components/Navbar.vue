<template>
	<div class="container px-3 lg:mx-auto max-w-6xl py-4 flex justify-between items-center">
		<div class="flex justify-start items-center">
			<NuxtLink :to="localePath('/')" class="text-foreground-primary">Home</NuxtLink>
		</div>
		<div class="flex justify-end items-center space-x-2">
			<language-switcher />
			<color-theme-picker />
			<!-- <CookieSelector /> -->
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>