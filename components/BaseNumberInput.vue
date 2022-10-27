<i18n lang="yaml">
en:
  enter: "Number"

de:
  enter: "Zahl"
</i18n>

<template>
	<div class="flex">
		<select
			v-model="selectModel"
			@change="$refs.input.inputHandler(toBase(value))"
		>
			<option
				v-for="(base, index) in this.bases"
				v-bind:key="base"
				v-bind:value="index + 2"
			>
				{{ base }}
			</option>
		</select>
		<GenericInput
			:placeholder="$t('enter')"
			:toObjectType="toBase10"
			:toStringType="toBase"
			:value="value"
			@input="$emit('input', $event)"
			ref="input"
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: Number,
		preselectedBase: Number | String,
	},
	data() {
		return {
			selectModel: this.preselectedBase,
			bases: [
				"Base 2 (bin)",
				"Base 3 (ter)",
				"Base 4",
				"Base 5",
				"Base 6",
				"Base 7",
				"Base 8",
				"Base 9",
				"Base 10 (dec)",
				"Base 11",
				"Base 12",
				"Base 13",
				"Base 14",
				"Base 15",
				"Base 16 (hex)",
			],
			alphabet: [
				"0",
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
			],
		};
	},
	methods: {
		toBase(base10) {
			var selectedBase = this.selectModel;
			var baseVal = "";
			for (var i = base10; 0 < i; i = Math.floor(i / selectedBase)) {
				baseVal = this.alphabet[i % selectedBase] + baseVal;
			}
			return baseVal;
		},
		toBase10(baseVal) {
			var selectedBase = this.selectModel;
			var base10 = 0;
			for (var i = baseVal.length - 1; i >= 0; i--) {
				var alphindex = this.alphabet.indexOf(baseVal[i].toLowerCase());
				if (alphindex < 0 || alphindex >= selectedBase) {
					return 0;
				} else {
					base10 +=
						alphindex *
						Math.pow(selectedBase, baseVal.length - 1 - i);
				}
			}
			return base10;
		},
	},
};
</script>

<style>
@responsive {
	.left {
		@apply flex-row;
	}

	.left > select {
		@apply mr-2;
	}

	.right {
		@apply flex-row-reverse;
	}

	.right > select {
		@apply ml-2;
	}
}
</style>