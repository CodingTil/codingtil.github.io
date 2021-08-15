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
	height: calc(100vh - 5rem - 0.75rem); /* Header 5rem, Footer 0.75rem */
}

.wrapper {
	@apply flex flex-row relative;
}
</style>