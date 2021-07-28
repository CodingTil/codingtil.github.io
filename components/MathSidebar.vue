<i18n lang="yaml">
en:
  algebra:
    title: "ALGEBRA"
    matrix:
      inversion: "Matrix Inversion"
      multiplication: "Matrix Multiplication"
  stochastic:
    title: "STOCHASTICS"
    data-analysis: "Data Analysis"


de:
  algebra:
    title: "ALGEBRA"
    matrix:
      inversion: "Matrix Invertieren"
      multiplication: "Matrix Multiplizierung"
  stochastic:
    title: "STOCHASTIK"
    data-analysis: "Datenanalyse"
</i18n>

<template>
	<sidebar title="Math">
		<sidebar-item :title="$t('algebra.title')">
			<sidebar-list-item
				:title="$t('algebra.matrix.inversion')"
				:link="localePath('/math/algebra/matrix/inversion')"
			/>
			<sidebar-list-item
				:title="$t('algebra.matrix.multiplication')"
				:link="localePath('/math/algebra/matrix/multiplication')"
			/>
		</sidebar-item>
		<sidebar-item :title="$t('stochastic.title')">
			<sidebar-list-item
				:title="$t('stochastic.data-analysis')"
				:link="localePath('/math/stochastics/data-analysis')"
			/>
		</sidebar-item>
	</sidebar>
</template>

<script>
export default {};
</script>

<style>
</style>