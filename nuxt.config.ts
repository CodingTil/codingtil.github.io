// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: {
		dirs: [
			'~/components',
			'~/layouts',
		]
	},

	build: {
		transpile: [
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/pro-solid-svg-icons',
			'@fortawesome/pro-regular-svg-icons',
			'@fortawesome/pro-light-svg-icons',
			'@fortawesome/free-brands-svg-icons'
		]
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/html-validator',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
		'@nuxt/content',
	],

	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	content: {
		// https://content.nuxtjs.org/api/configuration
	},

	i18n: {
		baseUrl: 'https://tilmohr.com',
		locales: [
			{
				code: 'en',
				iso: 'en',
				name: 'English',
			},
			{
				code: 'de',
				iso: 'de',
				name: 'Deutsch',
			},
		],
		strategy: 'prefix_except_default',
		defaultLocale: 'en',
		vueI18nLoader: true
	},
})
