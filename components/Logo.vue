<template>
	<div>
		<nuxt-link
			:to="localePath('/')"
			class="justify-self-start inline-flex content-center items-center space-x-2"
		>
			<fa :icon="faTrademark" class="text-3xl text-rainbow-1" style="filter: drop-shadow(1px 1px 1px black);" />
			<div class="text-foreground-primary">
				Home
			</div>
		</nuxt-link>
	</div>
</template>

<script>
import { faTrademark } from '@fortawesome/free-solid-svg-icons';

export default {
	computed: {
		faTrademark() { return faTrademark; },
	},
}
</script>

<style>

</style>