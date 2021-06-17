<i18n lang="yaml">
en:
  maths:
    title: "Maths"
    description: "A library of math tools."
  algorithms:
    title: "Algorithms"
    description: "A library (of visualisations) of algorithms ranging from the simple sorting of an array to Dijkstra's algorithm."
  datastructures:
    title: "Datastructures"
    description: "A library (of visualisations) of datastructures ranging from the simple array of an array to red-black trees."
  tools:
    title: "Tools"
    description: "A library of various tools."
  aboutme:
    title: "About me"
    description: "Find out more about me"
  indev: "Currently in development."

de:
  maths:
    title: "Mathe"
    description: "Eine Sammlung an Mathe-Werkzeugen."
  algorithms:
    title: "Algorithmen"
    description: "Eine Sammlung (von Visualisierungen) von Algorithmen vom einfachen Sortieren bis zu Dijkstra's Algorithmus."
  datastructures:
    title: "Datenstrukturen"
    description: "Eine Sammlung (von Visualisierungen) von Datenstrukturen von dem einfachen Array zu Rot-schwarz Bäumen ."
  tools:
    title: "Werkzeuge"
    description: "Eine Sammlung von verschiedenen Werkzeugen."
  aboutme:
    title: "Über mich"
    description: "Informationen über mich"
  indev: "Currently in development."
</i18n>

<template>
  <div class="card-container">
    <!-- Card -->
    <nuxt-link
      :to="localePath('/math/stochastics/data-analysis')"
      class="
        card
        from-yellow-300
        hover:from-yellow-400
        to-yellow-600
        hover:to-yellow-700
      "
    >
      <div class="card-icon">
        <fa
          :icon="faCalculator"
          class="text-rainbow-5 text-7xl"
          style="filter: drop-shadow(1px 1px 1px black)"
        />
      </div>
      <div class="card-title">
        {{ $t("maths.title") }}
      </div>
      <div class="card-subtitle">
        <span>{{ $t("maths.description") }}</span>
        <span class="italic">{{ $t("indev") }}</span>
      </div>
    </nuxt-link>

    <!-- Card -->
    <nuxt-link
      :to="localePath('/')"
      class="
        card
        from-green-400
        hover:from-green-500
        to-yellow-400
        hover:to-yellow-500
      "
    >
      <div class="card-icon">
        <fa
          :icon="faCode"
          class="text-rainbow-6 text-7xl"
          style="filter: drop-shadow(1px 1px 1px black)"
        />
      </div>
      <div class="card-title">
        {{ $t("algorithms.title") }}
      </div>
      <div class="card-subtitle">
        <span>{{ $t("algorithms.description") }}</span>
        <span class="italic">{{ $t("indev") }}</span>
      </div>
    </nuxt-link>

    <!-- Card -->
    <nuxt-link
      :to="localePath('/')"
      class="
        card
        from-yellow-500
        hover:from-yellow-600
        to-red-400
        hover:to-red-500
      "
    >
      <div class="card-icon">
        <fa
          :icon="faDatabase"
          class="text-rainbow-1 text-7xl"
          style="filter: drop-shadow(1px 1px 1px black)"
        />
      </div>
      <div class="card-title">
        {{ $t("datastructures.title") }}
      </div>
      <div class="card-subtitle">
        <span>{{ $t("datastructures.description") }}</span>
        <span class="italic">{{ $t("indev") }}</span>
      </div>
    </nuxt-link>

    <!-- Card -->
    <nuxt-link
      :to="localePath('/')"
      class="
        card
        from-pink-400
        hover:from-pink-500
        to-purple-500
        hover:to-purple-600
      "
    >
      <div class="card-icon">
        <fa
          :icon="faTools"
          class="text-rainbow-3 text-7xl"
          style="filter: drop-shadow(1px 1px 1px black)"
        />
      </div>
      <div class="card-title">
        {{ $t("tools.title") }}
      </div>
      <div class="card-subtitle">
        <span>{{ $t("tools.description") }}</span>
        <span class="italic">{{ $t("indev") }}</span>
      </div>
    </nuxt-link>

    <!-- Card -->
    <nuxt-link
      :to="localePath('/aboutme')"
      class="
        card
        from-blue-500
        hover:from-blue-600
        to-pink-600
        hover:to-pink-700
      "
    >
      <div class="card-icon">
        <fa
          :icon="faAddressCard"
          class="text-rainbow-4 text-7xl"
          style="filter: drop-shadow(1px 1px 1px black)"
        />
      </div>
      <div class="card-title">
        {{ $t("aboutme.title") }}
      </div>
      <div class="card-subtitle">
        <span>{{ $t("aboutme.description") }}</span>
        <span class="italic">{{ $t("indev") }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import {
  faCalculator,
  faCode,
  faDatabase,
  faTools,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: "Home | Til Mohr",
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { hid: "description", name: "description", content: "Homepage" },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    };
  },
  computed: {
    faCalculator() {
      return faCalculator;
    },
    faCode() {
      return faCode;
    },
    faDatabase() {
      return faDatabase;
    },
    faTools() {
      return faTools;
    },
    faAddressCard() {
      return faAddressCard;
    },
  },
};
</script>

<style scoped>
.card-container {
  @apply flex flex-wrap my-4 p-4 lg:p-0 gap-x-12 gap-y-12 container mx-auto max-w-7xl;
}

.card {
  @apply flex flex-1 flex-col p-8 bg-gradient-to-br rounded
			cursor-pointer
			shadow-lg hover:shadow-2xl;
}

.card:hover {
  transform: scale(1.05);
}

.card-icon {
  @apply flex justify-center p-0 mt-6 mb-2;
}

.glow {
  filter: drop-shadow(0px 0px 20px white);
}

.card-title {
  @apply flex justify-center content-center text-background-primary text-2xl md:text-4xl font-bold uppercase mx-4 my-2;
}

.card-subtitle {
  @apply flex flex-col justify-center content-center text-background-secondary text-center mt-1 mb-4 mx-4;
}
</style>
