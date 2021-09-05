<i18n lang="yaml">
en:
  enter: "Number"

de:
  enter: "Zahl"
</i18n>

<template>
	<input
		type="text"
		size="5"
		ref="input"
		:placeholder="$t('enter')"
		:value="numericValue"
		@input="inputHandler($event.target.value)"
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
	data() {
		return {
			numericValue: null,
			handler: true,
		};
	},
	watch: {
		value: {
			immediate: true,
			handler(val) {
				let newValue = val;
				if (newValue) {
					newValue = this.toNumber(newValue);
					if (newValue >= this.max) {
						newValue = this.max;
					}
					if (newValue <= this.min) {
						newValue = this.min;
					}
					if (newValue !== val) {
						this.$emit("input", newValue);
					}
				}
				this.numericValue = newValue;
			},
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
		inputHandler(val) {
			this.updateValue(this.toNumber(val), val);
		},
		updateValue: function (val, strVal = null) {
			const oldVal = this.numericValue;
			val = this.toNumber(val);
			if (val >= this.max) {
				val = this.max;
			}
			if (val <= this.min) {
				val = this.min;
			}
			if (val === oldVal) {
				this.$refs.input.value =
					strVal && val === this.toNumber(strVal) ? strVal : null;
				return;
			}
			this.numericValue = val;
			this.$emit("input", val);
		},
	},
};
</script>

<style>
</style>