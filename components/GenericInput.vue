<template>
	<input
		type="text"
		size="5"
		ref="input"
		:value="objectValue"
		@input="inputHandler($event.target.value)"
	/>
</template>

<script>
export default {
	props: {
		value: undefined,
		toObjectType: {
			type: Function,
			default: (x) => x,
		},
		filter: {
			type: Function,
			default: (x) => x,
		},
	},
	data() {
		return {
			objectValue: null,
			handler: true,
		};
	},
	watch: {
		value: {
			immediate: true,
			handler(val) {
				let newValue = val;
				if (newValue) {
					newValue = this.toObjectType(newValue);
					newValue = this.filter(newValue);
					if (newValue !== val) {
						this.$emit("input", newValue);
					}
				}
				this.objectValue = newValue;
			},
		},
	},
	methods: {
		inputHandler(val) {
			this.updateValue(this.toObjectType(val), val);
		},
		updateValue: function (val, strVal = null) {
			const oldVal = this.objectValue;
			val = this.filter(val);
			if (val === oldVal) {
				this.$refs.input.value =
					strVal && val === this.toObjectType(strVal) ? strVal : null;
				return;
			}
			this.objectValue = val;
			this.$emit("input", val);
		},
	},
};
</script>