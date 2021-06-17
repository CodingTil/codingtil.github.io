<template>
	<nav class="sidebar-container">
		<div class="sidebar">

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
	}
}
</script>

<style>
.sidebar-container {
	@apply h-screen max-w-xs w-full fixed top-0
		overflow-x-hidden overflow-y-auto
		border-gray-500 border-4;
}

.sidebar {

}
</style>