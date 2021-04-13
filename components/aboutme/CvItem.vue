<template>
	<div class="cv-item">
		<div class="cv-item-header">
			<div class="cv-item-header-main">
				<div v-if='link'>
					<a class="cv-item-link" :href='link'>
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
		<div class="cv-item-subtitle">
		</div>
		<Content :document="content" />
	</div>
</template>

<script>
export default {
	props: {
		main_header: {
			type: String,
			required: true,
		},
		right_header: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: false,
		},
		content: {
			type: Object,
			required: true,
		},
	},
	mounted: function() {
		var subtitleElement = this.$el.querySelector('.cv-item-subtitle')
		subtitleElement.innerHTML += this.subtitle;
	}
}
</script>

<style>
.cv-item {
	@apply mx-8 my-6 px-5 py-4
		border-l-8 border-solid;
}

.cv-item-header {
		@apply block lg:flex lg:justify-between text-foreground-primary;
}

.cv-item-header-main {
	@apply text-lg font-bold text-left;
}

.cv-item-header-right {
	@apply text-left lg:text-right;
}

.cv-item-subtitle {
	@apply text-foreground-secondary;
}

.cv-item-link {
	@apply no-underline text-foreground-primary;
}
</style>