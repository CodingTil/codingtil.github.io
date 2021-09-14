<template>
	<textarea
		v-if="textarea"
		ref="input"
		:value="stringValue"
		@input="inputHandler($event.target.value)"
	/>
	<input
		v-else
		size="5"
		ref="input"
		:value="stringValue"
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
		toStringType: {
			type: Function,
			default: (x) => x + "",
		},
		filter: {
			type: Function,
			default: (x) => x,
		},
		textarea: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			stringValue: "",
			handler: true,
		};
	},
	watch: {
		value: {
			immediate: true,
			handler(val) {
				var str = this.toStringType(val);
				this.stringValue = val && val != 0 ? str : "";
			},
		},
	},
	methods: {
		inputHandler(str) {
			var oldVal = this.stringValue;
			var newValue = this.toObjectType(str);
			var x = newValue;
			newValue = this.filter(newValue);
			this.stringValue = this.toStringType(newValue);
			this.$emit("input", newValue);
		},
	},
};
</script>