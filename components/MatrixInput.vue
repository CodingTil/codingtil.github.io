<template>
	<generic-input
		:placeholder="'-5, 3, 0' + '\n' + '2, 3, 5' + '\n' + '7, 7, -2'"
		textarea
		:toObjectType="toMatrix"
		:toStringType="toString"
		:value="value"
		@input="$emit('input', $event)"
	/>
</template>

<script>
import GenericInput from "./GenericInput.vue";
export default {
	components: { GenericInput },
	props: {
		value: Array,
	},
	methods: {
		toMatrix(str) {
			let str_arr = str.split("\n");
			let arr = new Array(str_arr.length);
			for (let i = 0; i < arr.length; i++) {
				arr[i] = str_arr[i]
					.split(",")
					.filter((x) => !x)
					.map((x) => parseInt(x));
			}
			return arr;
		},
		toString(arr) {
			if (!arr) return "";
			let str = "";
			for (let i = 0; i < arr.length; i++) {
				str += arr[i].join() + (i + 1 == arr.length ? "" : "\n");
			}
			return str;
		},
	},
};
</script>

<style>
</style>