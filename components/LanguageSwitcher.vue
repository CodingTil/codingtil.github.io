<template>
	<div>
		<nuxt-link
			v-for="locale in availableLocales"
			:key="locale.code"
			:to="switchLocalePath(locale.code)"
			class="text-foreground-secondary"
		>
			{{ locale.name }}
		</nuxt-link>
	</div>
</template>

<script>
export default {
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
		}
	}
}
</script>

<style>

</style>