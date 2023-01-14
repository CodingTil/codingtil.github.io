<template>
	<div class="cv-item">
		<div class="cv-item-header">
			<div class="cv-item-header-main">
				<div v-if="link">
					<a class="cv-item-link" :href="link">
						{{ main_header }}
					</a>
				</div>
				<div v-else>
					{{ main_header }}
				</div>
			</div>
			<div class="cv-item-header-right">
				{{ right_header }}
			</div>
		</div>
		<div class="cv-item-subtitle" v-html="subtitle" />
		<Content :path="path" />
	</div>
</template>

<script setup>
	const { main_header, right_header, subtitle, path, link } = defineProps({
		main_header: {
			type: String,
			required: true,
		},
		right_header: {
			type: String,
			required: false,
		},
		subtitle: {
			type: String,
			required: false,
		},
		path: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: false,
		},
	})
</script>

<style>
.cv-item {
	@apply my-6 pl-5 py-4
		border-l-8 border-solid;
}

.cv-item-header {
	@apply block xl:flex xl:justify-between text-foreground-primary;
}

.cv-item-header-main {
	@apply text-xl font-bold text-left;
}

.cv-item-header-right {
	@apply text-left xl:text-right;
}

.cv-item-subtitle {
	@apply text-foreground-secondary;
}

.cv-item-link {
	@apply no-underline text-foreground-primary;
}
</style>