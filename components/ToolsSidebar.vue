<i18n lang="yaml">
en:
  title: "Tools"
  images:
    title: "IMAGES"
    scaling: "Scaling"

de:
  title: "Werkzeige"
  images:
    title: "BILDER"
    scaling: "Skalierung"
</i18n>

<template>
	<sidebar :title="$t('title')">
		<sidebar-item :title="$t('images.title')">
			<sidebar-list-item
				:title="$t('images.scaling')"
				:link="localePath('/tools/images/scaling')"
			/>
		</sidebar-item>
	</sidebar>
</template>

<script>
export default {};
</script>

<style>
</style>