<template>
  <section class="columnAlignCenter">
    <h2>Getting started is simple</h2>
    <div class="w-full relative overflow-hidden">
      <div class="steps" :style="{ transform: `translateX(${translateX}px)` }">
        <div v-for="(step, index) in steps" :key="index" class="step" :class="{
          'active': currentStep === index,
          'upcoming': index > currentStep,
          'completed': index < currentStep
        }">
          <div class="stepCard">
            <NuxtImg :src="`/images/home/${step.img}.png`" :alt="`${step.title}`" class="w-full object-contain" />
            <h3>{{ step.title }}</h3>
            <p class="text-dark-gray">{{ step.description }}</p>

            <div v-if="currentStep === index" class="stepActions">
              <button v-if="index > 0" @click="prevStep" class="backButton">
                <Icon name="mingcute:arrow-left-line" class="text-dark-gray" />
              </button>
              <button v-if="index < steps.length - 1" @click="nextStep" class="nextButton"
                :class="{ 'ml-auto': index === 0 }">
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
      steps: [
        {
          img: "Step-Image",
          title: "Select a Plan",
          description: "Choose the virtual office plan that best suits your business needs and budget to start benefiting from our services.",
        },
        {
          img: "Step-Image",
          title: "Complete Registration",
          description: "Fill in your business details and verify your account to set up your virtual office presence.",
        },
        {
          img: "Step-Image",
          title: "Customize Settings",
          description: "Configure your virtual office preferences, communication channels, and team access levels.",
        },
        {
          img: "Step-Image",
          title: "Launch Office",
          description: "Start using your virtual office space with all features enabled for your business operations.",
        },
      ],
    };
  },
  methods: {
    calculateTranslate() {
      const step = document.querySelector('.step');
      if (!step) return 0;

      const stepWidth = step.offsetWidth;
      const gap = 20;
      return -this.currentStep * (stepWidth + gap);
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.translateX = this.calculateTranslate();
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.translateX = this.calculateTranslate();
      }
    },
  },
  mounted() {
    this.translateX = this.calculateTranslate();
    window.addEventListener('resize', () => {
      this.translateX = this.calculateTranslate();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.translateX = this.calculateTranslate();
    });
  }
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
  height: 20rem;
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
  padding-top: 1rem;
  margin-top: auto;
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
    height: 22rem;
  }

  .nextButton {
    font-size: 0.875rem
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
    height: 24rem;
  }

  p {
    font-size: 1rem;
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
    height: 28rem;
  }

  p {
    font-size: 1.25rem;
  }
}
</style>