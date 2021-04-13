export const state = () => ({
	theme: 'theme-dark',
	// This is ugly, change it!!
	themes: [
		'theme-light',
		'theme-dark'
	]
})

export const mutations = {
	toggle(state) {
		state.theme = state.themes[(state.themes.indexOf(state.theme) + 1) % state.themes.length];
	},
}

export const getters = {
	getTheme(state) {
		return state.theme;
	}
}