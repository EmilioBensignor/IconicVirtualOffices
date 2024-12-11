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
          <button class="secondaryButton" @click="openModal">
            <div>
              <p>Or book a free call</p>
            </div>
          </button>
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
    <Dialog 
      class="dialogFreeCall" 
      v-model:visible="freeCallModal"
      modal
      :dismissableMask="true"
    >
      <div class="iframe-container">
        <iframe
          src="https://crm.iconicworkspaces.com/widget/booking/MqdwQUAhBgdoGYRWYde3"
          style="width: 100%; border: none; height: 100%;"
          id="zN16rkmdbW6OwImL7GlP_1733762458422"
        ></iframe>
      </div>
    </Dialog>
  </section>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      freeCallModal: false,
    };
  },
  methods: {
    openModal() {
      this.freeCallModal = true;
      this.$nextTick(() => {
        this.loadFormScript();
      });
    },
    loadFormScript() {
      const script = document.createElement("script");
      script.src = "https://crm.iconicworkspaces.com/js/form_embed.js";
      script.type = "text/javascript";
      document.body.appendChild(script);
    },
  },
};
</script>

<style>
.p-dialog-mask {
  background-color: rgba(0, 0, 0, 0.5);
}

.dialogFreeCall {
  width: 100%;
  max-width: 700px !important;
  padding: 1rem;
  border-radius: 18px;
  background-color: white;
}

.dialogFreeCall .p-dialog-header {
  justify-content: flex-end;
}

.dialogFreeCall .p-dialog-content {
  padding: 0;
  height: 80vh;
  overflow: hidden;
}

.iframe-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.dialogFreeCall iframe {
  display: block;
  -webkit-overflow-scrolling: touch;
}

</style>

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
