<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Getting started is simple</h2>
    <div class="steps">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step column"
        :class="{ active: step.isActive }"
      >
        <NuxtImg :src="`/images/home/${step.img}.png`" :alt="`${step.title} Iconic Virtual Offices`" />
        <div>
          <h3 class="font-bold">{{ step.title }}</h3>
        </div>
        <p class="stepDescription text-dark-gray">{{ step.description }}</p>
        <div v-if="step.isActive" class="step-action">
          <Button label="Next" class="primaryButton" />
        </div>
      </div>
    </div>
    <NuxtLink :to="routes.GET_STARTED" class="primaryButton"
      >Launch my virtual office</NuxtLink
    >
  </section>
</template>

<script>
import { ROUTE_NAMES } from "~/constants/ROUTE_NAMES";

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      steps: [
        {
          img: "Step-Image",
          title: "Select a Plan",
          description:
            "Choose the virtual office plan that best suits your business needs and budget to start benefiting from our services.",
          isActive: true,
        },
        {
          img: "Step-Image",
          title: "Complete Registration",
          description:
            "Fill in your business details and verify your account to set up your virtual office presence.",
          isActive: false,
        },
        {
          img: "Step-Image",
          title: "Customize Settings",
          description:
            "Configure your virtual office preferences, communication channels, and team access levels.",
          isActive: false,
        },
        {
          img: "Step-Image",
          title: "Launch Office",
          description:
            "Start using your virtual office space with all features enabled for your business operations.",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
}

.step {
  gap: 0.75rem;
  position: relative;
  box-shadow: 0px 0px 10px 0px #00000033;
  border-radius: 12px;
  padding: 1.25rem;
}

.stepDescription {
  font-weight: 500;
}

.step-action {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
