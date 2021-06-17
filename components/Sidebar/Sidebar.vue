<template>
	<nav class="sidebar-container">
		<div class="sidebar"></div>
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
	@apply w-72 h-screen z-40 top-0 sticky overflow-y-visible flex-none
		border-gray-500 border-4;
}

.sidebar {
	@apply h-full overflow-y-auto mr-0 block;
}
</style>