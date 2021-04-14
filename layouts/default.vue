<template>
	<div>
		<Navbar />
		<!-- Page Content -->
		<Nuxt />
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
	methods: {
		...mapMutations({
			toggle: 'colorTheme/toggle'
		}),
		...mapGetters({
			theme: 'colorTheme/getTheme'
		})
	},
	mounted: function() {
		const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		var theme;
		if (darkMediaQuery.matches) {
			theme = this.$cookies.get('theme') || 'theme-dark';
		} else {
			theme = this.$cookies.get('theme') || 'theme-light';
		}
		if (theme != this.theme()) {
			this.toggle();
		}
		// set cookie / refresh cookie
		this.$cookies.set('theme', this.theme(), {
			path: '/',
			maxAge: 60 * 60 * 24,
			sameSite: 'lax',
			secure: true
		});

		// add class to body
		var body = document.getElementsByTagName('body')[0];
		body.classList.add(this.theme());

		// add other classes to body
		body.classList.add('my-body')
	}
};
</script>

<style>
.my-body {
	@apply trans content-wrapper font-poppins bg-background-primary;
}

.content-wrapper {
	min-height: 100vh;
	min-width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.trans, .trans * {
	@apply transition duration-300 ease-in-out;
}
</style>
