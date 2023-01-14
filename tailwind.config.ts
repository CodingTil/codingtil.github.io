import type { Config } from 'tailwindcss'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default <Partial<Config>>{
	theme: {
		extend: {
			maxWidth: {
				'8xl': '85rem'
			},
			colors: {
				background: {
					primary: 'var(--background-primary)',
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)',
				},
				foreground: {
					primary: 'var(--foreground-primary)',
					secondary: 'var(--foreground-secondary)',
					tertiary: 'var(--foreground-tertiary)',
				},
				other: {
					primary: 'var(--other-primary)',
					secondary: 'var(--other-secondary)',
					tertiary: 'var(--other-tertiary)',
					quaternary: 'var(--other-quaternary)',
				},
				info: 'var(--color-info)',
				warning: 'var(--color-warning)',
				success: 'var(--color-success)',
				error: 'var(--color-error)',
				rainbow: {
					1: 'var(--rainbow-1)',
					2: 'var(--rainbow-2)',
					3: 'var(--rainbow-3)',
					4: 'var(--rainbow-4)',
					5: 'var(--rainbow-5)',
					6: 'var(--rainbow-6)',
				}
			},
			fontFamily: {
				// ubuntu: ["Ubuntu"],
				poppins: ["Poppins"],
			}
		}
	},
	variants: {
		extend: {
			overflow: ['hover', 'focus'],
		},
	},
	plugins: [
		tailwindTypography,
		tailwindForms,
	],
	content: [
		'./components/**/*.{ts,js,vue}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.ts',
		'./app.{ts,js,vue}',
		'./error.{ts,js,vue}',
	],
	safelist: [
		{
			pattern: /rainbow/,
		},
	],

}