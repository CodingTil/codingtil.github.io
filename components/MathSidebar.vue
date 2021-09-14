<i18n lang="yaml">
en:
  numbers:
    title: "NUMBERS"
    baseconversion: "Base Conversion"
    primes: "Primes"
  linear_algebra:
    title: "LINEAR ALGEBRA"
    matrix: "Matrix"

de:
  numbers:
    title: "ZAHLEN"
    baseconversion: "Basenumrechnung"
    primes: "Primzahlen"
  linear_algebra:
    title: "LINEARE ALGEBRA"
    matrix: "Matrix"
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
		<sidebar-item :title="$t('linear_algebra.title')">
			<sidebar-list-item
				:title="$t('linear_algebra.matrix')"
				:link="localePath('/math/linear_algebra/matrix')"
			/>
		</sidebar-item>
	</sidebar>
</template>

<script>
export default {};
</script>

<style>
</style>