<i18n lang="yaml">
en:
  title: "Base Conversion"
  baseconversion: "Convert between different Bases"
  convertto: "convert to"

de:
  title: "Basenumrechnung"
  baseconversion: "Zwischen verschiedenen Basen umrechnen"
  convertto: "umwandeln zu"
</i18n>

<template>
	<div>
		<h1>{{ $t("title") }}</h1>

		<!-- Base Conversion -->
		<section class="my-6">
			<h2>{{ $t("baseconversion") }}</h2>
			<div class="flex flex-col space-y-4">
				<BaseNumberInput
					v-model="baseconversionnumber"
					class="left"
					preselectedBase="2"
				/>
				<BaseNumberInput
					v-model="baseconversionnumber"
					class="left"
					preselectedBase="10"
				/>
			</div>
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
	data() {
		return {
			baseconversionnumber: null,
		};
	},
};
</script>

<style>
</style>