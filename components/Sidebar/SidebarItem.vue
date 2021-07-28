<template>
	<div class="sidebar-item">
		<div class="sidebar-item-title">
			<p>{{ title }}</p>
		</div>
		<div class="sidebar-item-list">
			<slot />
		</div>
	</div>
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
.sidebar-item {
	@apply my-5;
}

.sidebar-item-title {
	@apply text-foreground-primary text-xl font-bold mx-2 my-1
			flex flex-row justify-start content-end place-items-center space-x-2;
}

.sidebar-item-list {
	@apply flex flex-col justify-start content-center pl-5;
}
</style>