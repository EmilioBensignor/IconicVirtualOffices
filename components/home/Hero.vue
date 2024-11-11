<template>
  <section class="columnAlignCenter">
    <div class="hero column">
      <h1 class="text-center">
        Take your bussiness global, with a
        <span class="text-electric-blue">virtual office.</span>
      </h1>
      <p class="text-center">
        Gain a professional address, local phone support, and seamless mail
        services to establish your business presence in the nation that drives
        the world’s economy.
      </p>
      <div>
        <NuxtLink :to="routes.GET_STARTED" class="primaryButton"
          >Get Started</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
  import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

  export default {
    data() {
      return {
        routes: ROUTE_NAMES,
      };
    },
  };
</script>

<style scoped>
  .hero {
    gap: 0.75rem;
  }

  h1 {
    font-weight: 800;
  }

  .hero p:first-of-type {
    font-weight: 500;
  }
</style>
