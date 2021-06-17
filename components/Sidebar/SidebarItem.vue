<template>
	<div class="sidebar-item">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		icon: {
			type: Function,
			required: true,
		},
	},
};
</script>

<style>
.sidebar-item {
}
</style>