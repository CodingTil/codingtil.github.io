<template>
	<div>
		<nuxt-link
			:to="localePath('/')"
			class="justify-self-start inline-flex content-center items-center space-x-2"
		>
			<div>
				<font-awesome-icon icon="fa-solid fa-trademark" class="text-3xl text-rainbow-1" style="filter: drop-shadow(1px 1px 1px black);" />
			</div>
			<div class="text-foreground-primary">
				Home
			</div>
		</nuxt-link>
	</div>
</template>