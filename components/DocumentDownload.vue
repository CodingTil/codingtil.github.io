<template>
	<a :href="path" class="my-a">
		<slot />
		<fa :icon="faFilePdf" class="text-red-400" />
	</a>
</template>

<script>
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export default {
	computed: {
		faFilePdf() { return faFilePdf; },
	},
	props: {
		path: {
			type: String,
			required: true,
		},
	}
}
</script>

<style>

</style>