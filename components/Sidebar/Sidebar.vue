<template>
	<nav class="sidebar-container">
		<div class="sidebar-gradient-top" />
		<div class="sidebar">
			<slot />
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
.sidebar-container {
	@apply w-72 z-40 top-0 sticky flex-none hidden md:block; /* Cant leave this like that. SM needs navigation as well. */
	height: calc(100vh - 5rem - 0.75rem); /* Header 5rem, Footer 0.75rem */
}

.sidebar {
	@apply px-1 py-8 pr-4 mr-0 h-full overflow-y-scroll block;
}

.sidebar-gradient-top {
	@apply hidden top-0 lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-background-primary;
}
</style>