<template>
	<footer class="rainbow-footer">
		<div class="rainbow-stripe bg-rainbow-1" />
		<div class="rainbow-stripe bg-rainbow-2" />
		<div class="rainbow-stripe bg-rainbow-3" />
		<div class="rainbow-stripe bg-rainbow-4" />
		<div class="rainbow-stripe bg-rainbow-5" />
		<div class="rainbow-stripe bg-rainbow-6" />
	</footer>
</template>

<script>
export default {

}
</script>

<style>
.rainbow-footer {
	@apply flex flex-nowrap min-w-full h-3;
}

.rainbow-stripe {
	@apply min-h-full w-1/6;
}
</style>