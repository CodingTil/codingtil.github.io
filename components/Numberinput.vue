<i18n lang="yaml">
en:
  enter: "Number"

de:
  enter: "Zahl"
</i18n>

<template>
	<generic-input
		:placeholder="$t('enter')"
		:toObjectType="toNumber"
		:filter="bound"
		:value="value"
		@input="$emit('input', $event)"
	/>
</template>

<script>
export default {
	props: {
		value: Number,
		min: {
			type: Number,
			default: -Infinity,
		},
		max: {
			type: Number,
			default: Infinity,
		},
	},
	methods: {
		toNumber(val) {
			let num = parseFloat(val);
			if (isNaN(val) || !isFinite(val)) {
				num = 0;
			}
			return num;
		},
		bound(numericVal) {
			if (numericVal >= this.max) {
				numericVal = this.max;
			}
			if (numericVal <= this.min) {
				numericVal = this.min;
			}
			return numericVal;
		},
	},
};
</script>

<style>
</style>