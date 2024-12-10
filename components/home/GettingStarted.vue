<template>
  <section class="columnAlignCenter">
    <h2>Getting started is simple</h2>
    <div class="w-full relative overflow-hidden">
      <div class="steps" :style="{ transform: `translateX(${translateX}px)` }">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="{
            active: currentStep === index,
            upcoming: index > currentStep,
            completed: index < currentStep,
          }"
          :ref="index === 0 ? 'firstStep' : null"
        >
          <div class="stepCard">
            <video
              :src="`/videos/Get-started-${step.video}.webm`"
              :alt="`Get started ${step.title}`"
              class="w-full object-contain"
              :autoplay="false"
              muted
              playsinline
              @loadeddata="setLastFrame($event, index)"
            ></video>
            <h3>{{ step.title }}</h3>
            <p class="text-dark-gray">{{ step.description }}</p>

            <div v-if="currentStep === index" class="stepActions">
              <button v-if="index > 0" @click="prevStep" class="backButton">
                <Icon name="mingcute:arrow-left-line" class="text-dark-gray" />
              </button>
              <button
                v-if="index < steps.length - 1"
                @click="nextStep"
                class="nextButton"
                :class="{ 'ml-auto': index === 0 }"
              >
                <span>Next</span>
                <Icon name="mingcute:arrow-right-line" class="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a @click.prevent="scrollToSection('#plans')" class="primaryButton">
      Launch my virtual office
    </a>
  </section>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      currentStep: 0,
      translateX: 0,
      handleResize: null,
      isFirstStepVisible: false,
      steps: [
        {
          video: "select-plan",
          title: "Select a Plan",
          description:
            "Choose the virtual office plan that best suits your business needs and budget to start benefiting from our services.",
        },
        {
          video: "onboarding",
          title: "Onboarding",
          description:
            "Provide us with the necessary information during the onboarding process, so we can set up your virtual office smoothly.",
        },
        {
          video: "check-out",
          title: "Checkout",
          description:
            "Complete your payment securely to finalize your plan selection and activate your services.",
        },
        {
          video: "ready",
          title: "Ready to Go",
          description:
            "Start using your virtual office and enjoy the professional support and services your business needs to grow.",
        },
      ],
      observer: null,
    };
  },
  methods: {
    calculateTranslate() {
      const step = document.querySelector(".step");
      if (!step) return 0;

      const stepWidth = step.offsetWidth;
      const gap = 20;
      return -this.currentStep * (stepWidth + gap);
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.translateX = this.calculateTranslate();
        this.$nextTick(() => {
          this.playCurrentVideo();
        });
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.translateX = this.calculateTranslate();
        this.$nextTick(() => {
          this.playCurrentVideo();
        });
      }
    },
    playCurrentVideo() {
      try {
        const videos = this.$el.querySelectorAll("video");
        videos.forEach((video, index) => {
          if (index === this.currentStep) {
            if (index !== 0 || (index === 0 && this.isFirstStepVisible)) {
              if (video.readyState >= 2) {
                // Verificamos que el video esté listo para reproducirse
                video.play().catch(() => {}); // Capturamos cualquier error de reproducción
              }
            }
          } else {
            video.pause();
            if (video.duration && isFinite(video.duration)) {
              try {
                video.currentTime = video.duration;
              } catch (e) {
                console.warn("Could not set video currentTime:", e);
              }
            }
          }
        });
      } catch (e) {
        console.warn("Error playing video:", e);
      }
    },
    setLastFrame(event, index) {
      if (index !== this.currentStep && event.target.duration) {
        if (isFinite(event.target.duration)) {
          try {
            event.target.currentTime = event.target.duration;
          } catch (e) {
            console.warn("Could not set last frame:", e);
          }
        }
      }
    },
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isFirstStepVisible = entry.isIntersecting;
            if (entry.isIntersecting && this.currentStep === 0) {
              const firstVideo = entry.target.querySelector("video");
              if (firstVideo && firstVideo.readyState >= 2) {
                firstVideo.play().catch(() => {});
              }
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      if (this.$refs.firstStep && this.$refs.firstStep[0]) {
        this.observer.observe(this.$refs.firstStep[0]);
      }
    },
    cleanupVideos() {
      try {
        const videos = this.$el.querySelectorAll("video");
        videos.forEach((video) => {
          video.pause();
          if (video.readyState >= 2) {
            try {
              video.currentTime = 0;
            } catch (e) {
              console.warn("Could not reset video:", e);
            }
          }
        });
      } catch (e) {
        console.warn("Error cleaning up videos:", e);
      }
    },
  },
  mounted() {
    this.translateX = this.calculateTranslate();
    this.handleResize = () => {
      this.translateX = this.calculateTranslate();
    };
    window.addEventListener("resize", this.handleResize);
    this.setupIntersectionObserver();
    this.$nextTick(() => {
      this.playCurrentVideo();
    });
  },
  beforeDestroy() {
    this.cleanupVideos();
    if (this.handleResize) {
      window.removeEventListener("resize", this.handleResize);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style scoped>
.steps {
  display: flex;
  gap: 1.25rem;
  transition: transform 0.5s ease;
  padding: 4px;
}

.step {
  flex: 0 0 214px;
  transition: all 0.3s ease;
}

.stepCard {
  height: 25.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--color-white);
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px #00000033;
  padding: 0.75rem;
}

.step.upcoming {
  opacity: 0.5;
}

.step.completed {
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

h3 {
  font-weight: 600;
}

.stepActions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0 0 0;
  padding-top: 1rem;
}

.backButton {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.backButton span {
  font-size: 1.25rem !important;
}

.nextButton {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  background: var(--gradient-blue);
  border: none;
  border-radius: 999px;
  color: var(--color-white);
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

@media (width >=660px) {
  .step {
    flex: 0 0 250px;
  }

  .stepCard {
    height: 29rem;
  }

  .nextButton {
    font-size: 0.875rem;
  }
}

@media (width >=1080px) {
  .steps {
    justify-content: center;
    gap: 1.5rem;
    transform: none !important;
  }

  .step {
    flex: 0 0 23%;
  }

  .stepCard {
    height: 27rem;
  }

  .stepCard video {
    max-width: 200px;
    margin: 0 auto;
  }

  p {
    font-size: 1rem;
  }

  .stepActions {
    padding-top: 0;
  }

  .nextButton {
    font-size: 1rem;
  }
}

@media (width >=1440px) {
  .step {
    flex: 0 0 290px;
  }

  .stepCard {
    height: 29rem;
  }

  p {
    font-size: 1.25rem;
  }
}
</style>
