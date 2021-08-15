<i18n lang="yaml">
en:
  numbers:
    title: "NUMBERS"
    primes: "Primes"


de:
  numbers:
    title: "ZAHLEN"
    primes: "Primzahlen"
</i18n>

<template>
	<sidebar title="Math">
		<sidebar-item :title="$t('numbers.title')">
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