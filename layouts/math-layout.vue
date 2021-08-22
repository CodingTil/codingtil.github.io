<template>
	<basis-layout>
		<div class="flex flex-col min-h-screen">
			<navbar />
			<div class="content-container">
				<math-sidebar />
				<content-layout>
					<nuxt />
				</content-layout>
			</div>
			<footer-rainbow />
		</div>
	</basis-layout>
</template>

<style>
.content-container {
	@apply container mx-auto max-w-7xl flex;
}
</style>