<template>
  <section class="columnAlignCenter">
    <video
      muted
      loop
      playsinline
      preload="auto"
      class="w-full"
      src="/videos/Iconic-Virtual-Offices-Professional-Presence.mp4"></video>
    <div class="workspace columnAlignCenter">
      <h2 class="text-center">Your way to a professional presence</h2>
      <p class="text-center">
        <span class="text-electric-blue font-bold"
          >Iconic Virtual Offices brings the premium experience of Iconic
          Workspaces into the virtual space.</span
        >
        Our services provides you with the benefits of a prestigious business
        presence in Miami, tailored to meet the needs of a modern, flexible
        workspace.
      </p>
    </div>
    <ul class="column">
      <li v-for="(benefit, index) in benefits" class="flex" :key="index">
        <Icon :name="`mingcute:${benefit.icon}`" class="text-mid-blue" />
        <p>{{ benefit.text }}</p>
      </li>
    </ul>
    <NuxtLink :to="routes.GET_STARTED" class="secondaryButton">
      <div class="arrowBtn">
        <p>Get to know us</p>
        <Icon name="mingcute:arrow-right-line" />
      </div>
    </NuxtLink>
  </section>
</template>

<script>
  import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

  export default {
    data() {
      return {
        routes: ROUTE_NAMES,
        benefits: [
          {
            icon: "location-line",
            text: "With years of experience, we upholds a reputation for quality and reliability in virtual office solutions.",
          },
          {
            icon: "ai-line",
            text: "We are located in two distinct areas of Miami, one in Aventura and the other in the Downtown Miami business district.",
          },
          {
            icon: "user-heart-line",
            text: "More than 1000 companies trust us to support their growth with professional, reliable virtual office services.",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .workspace {
    gap: 0.75rem;
  }

  .workspace p {
    font-weight: 500;
  }

  ul {
    gap: 1.25rem;
  }

  ul li {
    gap: 1rem;
  }

  ul li span {
    width: 7.5%;
  }

  ul li p {
    width: 90%;
  }

  .arrowBtn {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
</style>
