const path = require('path')

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
		],
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/tailwind',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: [
			'~/components',
			'~/components/aboutme',
			'~/components/aboutme/images'
		]
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		['@nuxtjs/fontawesome', { component: 'fa', }],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxt/content',
		'nuxt-i18n',
		'cookie-universal-nuxt',
		'@dansmaculotte/nuxt-security',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: path.resolve(__dirname, './tailwind.config.js')
			}
		}
	},

	server: {
		host: '0.0.0.0',
		port: 80
	},

	security: {
	},

	content: {
		liveEdit: false,
	},

	i18n: {
		seo: false,
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
		detectBrowserLanguage: {
			alwaysRedirect: true,
			fallbackLocale: 'en',
			onlyOnRoot: false,
			onlyOnNoPrefix: true,
			useCookie: true,
			cookieCrossOrigin: false,
			cookieDomain: null,
			cookieKey: 'i18n_language',
			cookieSecure: true
		},
		vueI18nLoader: true,
		vueI18n: {
			fallbackLocale: 'en',
		}
	},
}
