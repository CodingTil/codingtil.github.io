<template>
	<div class="content">
		<slot />
	</div>
</template>

<script>
export default {};
</script>

<style>
.content {
	@apply container bg-background-primary text-foreground-primary p-6 flex-grow;
}
</style>