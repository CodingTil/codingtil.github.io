// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: {
		dirs: [
			'~/components',
			'~/layouts',
		]
	},

	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/html-validator',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
	],

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
		defaultLocale: 'en'
	},
})
