<template>
	<input type="text" size="5" v-model="number" />
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
			default: 0,
			required: true,
		},
		filter: {
			type: Function,
			required: false,
		},
	},
};
</script>

<style>
</style>