<template>
  <section class="heroSection columnAlignCenter">
    <div class="w-full columnAlignCenter">
      <div class="hero columnAlignCenter">
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
          <button
            class="primaryButton"
            @click.prevent="scrollToSection('#plans')"
          >
            Get Started
          </button>
          <NuxtLink :to="routes.GET_STARTED" class="secondaryButton">
            <div>
              <p>Or book a free call</p>
            </div>
          </NuxtLink>
        </div>
        <p class="starting text-center text-dark-gray">
          No long-term contracts, starting at
          <span class="font-bold">only $59/month.</span>
        </p>
      </div>
      <div class="videoContainer">
        <video
          class="w-full"
          src="/videos/Iconic-Virtual-Offices-Workspaces.mp4"
          muted
          loop
          autoplay
          playsinline
          webkit-playsinline
          playsInline
        ></video>
      </div>
    </div>
    <HomeSwiperBusinesses />
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
section {
  gap: 2.5rem;
}

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
  max-width: 350px;
  font-weight: 800;
}

.hero > p:first-of-type {
  max-width: 350px;
  font-weight: 500;
}

.heroBtns {
  justify-content: center;
  gap: 1.5rem;
}

.starting {
  font-size: 0.75rem;
}

.videoContainer {
  padding-right: 1.25rem;
}

.videoContainer video {
  max-width: 575px;
  border-radius: 18px;
}

@media (width >=660px) {
  section {
    gap: 3rem;
  }

  .heroSection {
    padding: 3rem 0 3rem 2.5rem;
  }

  .heroSection > div:first-of-type {
    gap: 3rem;
  }

  .hero {
    width: 100%;
    gap: 1.25rem;
    padding-right: 2.5rem;
  }

  h1 {
    max-width: 460px;
  }

  .hero > p:first-of-type {
    max-width: 575px;
  }

  .heroBtns {
    gap: 3rem;
  }

  .starting {
    font-size: 0.875rem;
  }
}

@media (width >=1080px) {
  section {
    gap: 5rem;
  }

  .heroSection {
    padding: 4rem 0 4rem 4.375rem;
  }

  .heroSection > div:first-of-type {
    flex-direction: row;
  }

  .heroSection > div:first-of-type > div:first-of-type {
    width: 60%;
  }

  .hero {
    align-items: flex-start;
    padding-right: 0;
  }

  h1,
  p {
    text-align: start !important;
  }

  h1 {
    max-width: 610px;
  }

  .hero > p:first-of-type {
    max-width: 595px;
  }

  .heroBtns {
    justify-content: start;
  }

  .starting {
    font-size: 1rem;
  }

  .videoContainer {
    width: 70%;
    padding-right: 4.375rem;
  }

  .videoContainer video {
    max-width: 100%;
  }
}

@media (width >=1440px) {
  .heroSection {
    padding: 5rem 0 5rem 5.625rem;
  }
}
</style>
