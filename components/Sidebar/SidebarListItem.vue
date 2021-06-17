<template>
	<nuxt-link :to="localePath(link)" class="sidebar-list-item">


		<slot/>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		}
	}
}
</script>

<style>
.sidebar-list-item {

}
</style>