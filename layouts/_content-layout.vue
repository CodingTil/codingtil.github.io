<template>
	<div class="content" ref="content">
		<slot />
	</div>
</template>

<script>
export default {};
</script>

<style>
.content {
	@apply container bg-background-primary text-foreground-primary p-6 sticky z-0 overflow-x-hidden;
}

.content hr {
	@apply border-background-tertiary;
}

.content h1 {
	@apply font-extrabold text-4xl mb-6 w-full border-b-2 border-background-tertiary;
}

.content h2 {
	@apply font-semibold text-2xl mb-4;
}

.content input {
	@apply bg-background-secondary text-foreground-primary rounded border-background-tertiary border-2 shadow;
}
</style>