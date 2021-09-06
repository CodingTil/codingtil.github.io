<i18n lang="yaml">
en:
  title: "Base Conversion"
  baseconversion: "Convert between different Bases"

de:
  title: "Basenumrechnung"
  baseconversion: "Zwischen verschiedenen Basen umrechnen"
</i18n>

<template>
	<div>
		<h1>{{ $t("title") }}</h1>

		<!-- Base Conversion -->
		<section class="my-6">
			<h2>{{ $t("baseconversion") }}</h2>
		</section>
	</div>
</template>

<script>
export default {
	layout: "math-layout",
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
		return {
			title: "Base Conversion | Til Mohr",
			htmlAttrs: {
				...i18nHead.htmlAttrs,
			},
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Math - Numbers - Base Conversion",
				},
				...i18nHead.meta,
			],
			link: [...i18nHead.link],
		};
	},
};
</script>

<style>
</style>