<i18n lang="yaml">
en:
  title: "Prime Numbers"
  primecheck: "Prime Number Check"
  enternumber: "Enter a number:"
  generate: "Sieve of Eratosthenes"
  generaterequest: "Generate prime numbers between"
  primefactors: "Primfaktorzerlegung"
  and: "and"

de:
  title: "Primzahlen"
  primecheck: "Primzahlprüfung"
  enternumber: "Geben Sie eine Zahl ein:"
  generate: "Sieb des Eratosthenes"
  generaterequest: "Generiere alle Primzahlen zwischen"
  primefactors: "Primfaktorzerlegung"
  and: "and"
</i18n>

<template>
	<div>
		<h1>{{ $t("title") }}</h1>

		<!-- Prime number check -->
		<section class="my-6">
			<h2>{{ $t("primecheck") }}</h2>
			<div class="flex space-x-2 items-center">
				<label>{{ $t("enternumber") }}</label>
				<input
					type="text"
					name="prime"
					size="5"
					v-model="primenumbercheck"
				/>
				<div v-if="primenumbercheck">
					<div v-if="isPrime(primenumbercheck)">
						<fa
							:icon="faCheckCircle"
							class="text-green-600 text-2xl"
						/>
					</div>
					<div v-else>
						<fa
							:icon="faTimesCircle"
							class="text-red-500 text-2xl"
						/>
					</div>
				</div>
			</div>
		</section>

		<hr />

		<!-- Prime number generation based on sieve of eratosthenes -->
		<section class="my-6">
			<h2>{{ $t("generate") }}</h2>
			<div class="flex space-x-2 items-center">
				<label>{{ $t("generaterequest") }}</label>
				<input type="text" name="from" size="1" v-model="from" />
				<label>{{ $t("and") }}</label>
				<input type="text" name="to" size="1" v-model="to" />
				<label>:</label>
			</div>
			<div
				class="
					bg-background-tertiary
					text-foreground-primary
					p-6
					rounded
					mt-2
				"
			>
				{{ primenumberlist(from, to).join(", ") }}
			</div>
		</section>

		<hr />

		<!-- Get all prime factors of a number -->
		<section class="my-6">
			<h2>{{ $t("primefactors") }}</h2>
			<div class="flex space-x-2 items-center">
				<label>{{ $t("enternumber") }}</label>
				<input
					type="text"
					name="prime"
					size="5"
					v-model="primefactornumber"
				/>
			</div>
			<div
				class="
					bg-background-tertiary
					text-foreground-primary
					p-6
					rounded
					mt-2
				"
			>
				{{ primefactors(primefactornumber).join(", ") }}
			</div>
		</section>
	</div>
</template>

<script>
import {
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default {
	layout: "math-layout",
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
		return {
			title: "Primes | Til Mohr",
			htmlAttrs: {
				...i18nHead.htmlAttrs,
			},
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Math - Numbers - Primes",
				},
				...i18nHead.meta,
			],
			link: [...i18nHead.link],
		};
	},
	data() {
		return {
			primenumbercheck: null,
			primefactornumber: null,
			from: null,
			to: null,
		};
	},
	methods: {
		isPrime(number) {
			for (let i = 2, s = Math.sqrt(number); i <= s; i++)
				if (number % i === 0) return false;
			return number > 1;
		},
		primenumberlist: function (from, to) {
			if (from == null || to == null) return [];
			function sieveOfEratosthenes(to) {
				var array = [2, 3];
				for (var i = 5; i <= to; i += 2) {
					if (
						array.every(function (p) {
							return i % p;
						})
					) {
						array.push(i);
					}
				}
				return array;
			}
			return sieveOfEratosthenes(to).filter((i) => from <= i && i <= to);
		},
		primefactors: function (number) {
			var n = number;
			var factors = [];
			var divisor = 2;

			while (n >= 2) {
				if (n % divisor == 0) {
					factors.push(divisor);
					n = n / divisor;
				} else {
					divisor++;
				}
			}
			return factors;
		},
	},
	computed: {
		faCheckCircle() {
			return faCheckCircle;
		},
		faTimesCircle() {
			return faTimesCircle;
		},
	},
};
</script>

<style>
</style>