<template>
	<div class="content-container">
		<div class="wrapper">
			<slot />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.content-container {
	@apply container mx-auto max-w-7xl;
}

.wrapper {
	@apply flex relative;
}
</style>