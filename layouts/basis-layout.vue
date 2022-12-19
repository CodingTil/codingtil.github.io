<template>
	<div>
		<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<Head>
				<template v-for="link in head.link" :key="link.id">
					<Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
				</template>
				<template v-for="meta in head.meta" :key="meta.id">
					<Meta :id="meta.id" :property="meta.property" :content="meta.content" />
				</template>
			</Head>
			<Body>
				<slot />
			</Body>
		</Html>
	</div>
</template>

<script setup>
	const route = useRoute()
	const { t } = useI18n()
	const head = useLocaleHead({
		addDirAttribute: true,
		identifierAttribute: 'id',
		addSeoAttributes: true
	})
	useHead({
		titleTemplate: title => title + " | Til Mohr",
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
		]
	})
</script>

<style>
.content-wrapper {
	min-height: 100vh;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.trans,
.trans * {
	@apply transition duration-300 ease-in-out;
}

.my-body {
	@apply trans content-wrapper font-poppins bg-background-primary;
}
</style>