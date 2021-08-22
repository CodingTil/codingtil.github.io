<template>
	<div>
		<nav class="sidebar-container hidden md:block w-72" ref="sidebar">
			<div class="sidebar-gradient-top" />
			<div class="sidebar">
				<slot />
			</div>
		</nav>
		<button
			class="sidebar-collapse-sm md:left-72"
			ref="collapseButton"
			v-on:click="toggleCollapse()"
		>
			<fa
				:icon="faAngleRight"
				class="text-rainbow-1 text-3xl"
				:class="isCollapsed ? '' : 'transform rotate-180'"
			/>
		</button>
	</div>
</template>

<script>
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	computed: {
		faAngleRight() {
			return faAngleRight;
		},
	},
	data() {
		return {
			isCollapsed: true,
		};
	},
	methods: {
		toggleCollapse: function () {
			var sidebar = this.$refs.sidebar;
			var collapseButton = this.$refs.collapseButton;
			if (this.isCollapsed) {
				sidebar.classList.remove("hidden");
				collapseButton.classList.add("left-72");
			} else {
				sidebar.classList.add("hidden");
				collapseButton.classList.remove("left-72");
			}
			this.isCollapsed = !this.isCollapsed;
		},
	},
};
</script>

<style>
.sidebar-container {
	@apply top-20 sticky overflow-hidden h-screen; /* top-20 because header has h-20 */
	min-height: calc(100vh - 5rem - 0.75rem); /* Header 5rem, Footer 0.75rem */
	max-height: calc(100vh - 5rem); /* Header 5rem */
}

.sidebar-collapse-sm {
	@apply md:hidden z-40
			w-12 h-12 absolute top-14
			rounded-r-xl focus:outline-none
			bg-foreground-tertiary text-foreground-primary;
}

.sidebar {
	@apply px-1 py-8 pr-4 mr-0 h-full overflow-y-scroll block;
}

.sidebar-gradient-top {
	@apply hidden top-0 lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-background-primary;
}
</style>