<template>
  <section class="columnAlignCenter">
    <div class="videoContainer columnAlignCenter">
      <video 
        ref="videoPlayer" 
        src="/videos/Iconic-Virtual-Offices-Professional-Presence.mp4" 
        controls
        playsinline
        webkit-playsinline
        playsInline
      ></video>
    </div>
    <div class="workspaceContainer columnAlignCenter">
      <div class="workspace columnAlignCenter">
        <h2 class="text-center">Your way to a professional presence</h2>
        <p class="text-center">
          <span class="text-electric-blue font-bold">
            Iconic Virtual Offices brings the premium experience of Iconic
            Workspaces into the virtual space.
          </span>
          Our services provides you with the benefits of a prestigious business
          presence in Miami, tailored to meet the needs of a modern, flexible
          workspace.
        </p>
      </div>
      <ul class="w-full column">
        <li v-for="(benefit, index) in benefits" class="flex" :key="index">
          <Icon :name="`mingcute:${benefit.icon}`" class="text-mid-blue" />
          <p>{{ benefit.text }}</p>
        </li>
      </ul>
      <NuxtLink :to="routes.GET_STARTED" class="secondaryButton">
        <div class="arrowBtn">
          <p class="font-bold">Get to know us</p>
          <Icon name="mingcute:arrow-right-line" class="text-black" />
        </div>
      </NuxtLink>
    </div>

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
  mounted() {
    this.$refs.videoPlayer.currentTime = 0.1;
  },
};
</script>

<style scoped>
.videoContainer {
  width: 100%;
  height: max-content;
  position: relative;
  overflow: hidden;
}

.videoContainer video {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
  background: #000;
}

.workspaceContainer {
  gap: 1.25rem;
}

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
  gap: 0.75rem;
}

ul li span {
  width: 5%;
}

ul li p {
  width: 90%;
}

.arrowBtn {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

@media (width >=480px) {
  ul li span {
    width: 7.5%;
    font-size: 1.125rem !important;
  }
}

@media (width >=660px) {

  h2,
  p {
    width: 100%;
    text-align: start !important;
  }

  .videoContainer,
  .workspaceContainer {
    max-width: 750px;
  }

  ul li span {
    width: 5%;
  }
}

@media (width >=1080px) {
  section {
    flex-direction: row;
    align-items: flex-start;
  }

  .videoContainer,
  .workspaceContainer {
    width: 50%;
  }

  .workspaceContainer {
    align-items: flex-start;
  }

  ul li span {
    font-size: 1.25rem !important;
  }

  ul li p {
    font-size: 1rem;
  }
}

@media (width >=1440px) {
  .workspaceContainer {
    gap: 2.25rem;
  }

  .workspace,
  ul {
    gap: 1.5rem;
  }

  ul li span {
    font-size: 1.375rem !important;
  }

  ul li p {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .videoContainer video {
    max-height: 100vh;
    width: 100%;
    object-fit: contain;
  }
}
</style>
