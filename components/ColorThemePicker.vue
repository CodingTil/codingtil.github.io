<template>
	<div>
		<button @click.prevent="toggle"
				class="btn inline-flex items-center outline-none focus:outline-none">
			<div v-if="this.theme()==='theme-light'" class="text-indigo-900 hover:text-indigo-700">
				<fa :icon="faMoon" class="text-3xl" style="filter: drop-shadow(1px 1px 1px black);" />
			</div>
			<div v-else class="text-yellow-300 hover:text-yellow-100">
				<fa :icon="faSun" class="text-3xl" style="filter: drop-shadow(1px 1px 1px black);" />
			</div>
		</button>
	</div>
</template>

<script>
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { mapMutations, mapGetters } from 'vuex';

export default {
	computed: {
		faMoon() { return faMoon; },
		faSun() { return faSun; },
	},
	methods: {
		...mapMutations({
			storetoggle: 'colorTheme/toggle'
		}),
		...mapGetters({
			theme: 'colorTheme/getTheme'
		}),
		toggle() {
			var body = document.getElementsByTagName('body')[0];

			// remove current color theme
			body.classList.remove(this.theme());

			this.storetoggle();
			this.$cookies.set('theme', this.theme(), {
				path: '/',
				maxAge: 60*60*24,
				sameSite: 'lax',
				secure: true
			});

			// add new color theme
			body.classList.add(this.theme());
		}
	},
}
</script>

<style>
.btn .btn:focus .btn::-moz-focus-inner {
	border: 0 !important;
	outline: 0 !important;
	display: block;
}
</style>