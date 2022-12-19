<template>
	<div class="navbar-container">
		<nav class="navbar">
			<logo />
			<div
				class="
					justify-self-end
					inline-flex
					space-x-2
					content-center
					items-center
				"
			>
				<LanguageSwitcher />
				<ColorThemePicker />
			</div>
		</nav>
	</div>
</template>

<style>
.navbar-container {
	@apply sticky top-0 z-50 bg-background-primary w-full border-b-2 border-background-secondary h-20;
}

.navbar {
	@apply container mx-auto max-w-7xl pt-6 pb-4 px-4 xl:px-0
			flex content-center justify-between items-center;
}
</style>