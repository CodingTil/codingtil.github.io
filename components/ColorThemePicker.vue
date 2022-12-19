<template>
	<div>
		<div v-if="$colorMode.preference === 'light'">
			<div @click="$colorMode.preference = 'dark'" class="btn outline-none focus:outline-none">
				<div class="text-indigo-900 hover:text-indigo-700">
					<font-awesome-icon icon="fa-solid fa-moon" class="text-3xl" style="filter: drop-shadow(1px 1px 1px black);" title="Edit" />
				</div>
			</div>
		</div>
		<div v-else>
			<div @click="$colorMode.preference = 'light'" class="btn outline-none focus:outline-none">
				<div class="text-yellow-300 hover:text-yellow-100">
					<font-awesome-icon icon="fa-solid fa-sun" class="text-3xl" style="filter: drop-shadow(1px 1px 1px black);" title="Edit" />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.btn .btn:focus .btn::-moz-focus-inner {
	border: 0 !important;
	outline: 0 !important;
	display: block;
}
</style>