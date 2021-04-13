<template>
	<img :src="'data:image/png;base64,' + src" :alt="alt" class="img" />
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	}
}
</script>

<style>
.img {
	@apply mx-auto max-w-5xl;
}
</style>