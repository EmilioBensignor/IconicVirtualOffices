<template>
  <section class="heroSection columnAlignCenter">
    <div class="columnAlignCenter">
      <div class="hero column">
        <h1 class="text-center">
          Take your bussiness global, with a
          <span class="text-electric-blue">virtual office.</span>
        </h1>
        <p class="text-center">
          Gain a professional address, local phone support, and seamless mail
          services to establish your business presence in the nation that drives
          the world's economy.
        </p>
        <div class="heroBtns rowCenter">
          <NuxtLink :to="routes.GET_STARTED" class="primaryButton"
            >Get Started</NuxtLink
          >
          <NuxtLink :to="routes.GET_STARTED" class="secondaryButton">
            <div>
              <p>Or book a free call</p>
            </div>
          </NuxtLink>
        </div>
        <p class="starting text-center text-dark-gray">
          No long-term contracts, starting at
          <span class="font-bold">only $99/month.</span>
        </p>
      </div>
      <div>ANIMATION // Padding Right</div>
    </div>
    <!-- <HomeSwiperBusinesses /> -->
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
.heroSection {
  padding: 2rem 0 2rem 1.25rem;
}

.heroSection > div {
  gap: 1.5rem;
}

.hero {
  gap: 0.75rem;
  padding-right: 1.25rem;
}

h1 {
  font-weight: 800;
}

.hero > p:first-of-type {
  font-weight: 500;
}

.heroBtns {
  justify-content: center;
  gap: 1.5rem;
}

.starting {
  font-size: 0.75rem;
}

@media (width >=660px) {
  .heroSection {
    padding: 3rem 0 3rem 2.5rem;
  }

  .heroSection > div:first-of-type {
    gap: 3rem;
  }

  .hero {
    gap: 1.25rem;
    padding-right: 2.5rem;
  }

  .heroBtns {
    gap: 3rem;
  }

  .starting {
    font-size: 0.875rem;
  }
}
</style>
