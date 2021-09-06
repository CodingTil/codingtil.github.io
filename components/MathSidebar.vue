<i18n lang="yaml">
en:
  numbers:
    title: "NUMBERS"
    baseconversion: "Base Conversion"
    primes: "Primes"

de:
  numbers:
    title: "ZAHLEN"
    baseconversion: "Basenumrechnung"
    primes: "Primzahlen"
</i18n>

<template>
	<sidebar title="Math">
		<sidebar-item :title="$t('numbers.title')">
			<sidebar-list-item
				:title="$t('numbers.baseconversion')"
				:link="localePath('/math/numbers/baseconversion')"
			/>
			<sidebar-list-item
				:title="$t('numbers.primes')"
				:link="localePath('/math/numbers/primes')"
			/>
		</sidebar-item>
	</sidebar>
</template>

<script>
export default {};
</script>

<style>
</style>