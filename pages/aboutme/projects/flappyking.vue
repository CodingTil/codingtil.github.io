<template>
	<ProjectPost :project="project" />
</template>

<script>
export default {
	name: 'project',
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
		return {
			title: this.project.title,
			htmlAttrs: {
				...i18nHead.htmlAttrs
			},
			meta: [
				{ hid: 'description', name: 'description', content: 'Homepage' },
				...i18nHead.meta
			],
			link: [
				...i18nHead.link
			]
		}
	},
	async asyncData(context) {
		const { $content, params, app, route, redirect } = context;
		const slug = params.slug;
		const project = await $content(`${app.i18n.locale}/projects`, '2020-03-01_FlappyKing').fetch();
		return {project};
	},
}
</script>

<style>

</style>