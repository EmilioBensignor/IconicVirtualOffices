<template>
  <div class="w-full cardsContainer columnAlignCenter">
    <button
      v-for="(item, index) in planDurations"
      :key="index"
      :class="[
        'w-full durationCard columnAlignCenter bg-white',
        { active: durationPlanSelected === index },
      ]"
      @click="selectPlanDuration(index)"
    >
      <h3>{{ item.name }}</h3>
      <p>
        Starting <span>${{ selectedPlan.durations[item.priceKey] }}</span> /month
      </p>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    selectedPlan: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      planDurations: [
        {
          name: "Month-to-month",
          priceKey: 'monthly'
        },
        {
          name: "6 months contract",
          priceKey: 'semiannual'
        },
        {
          name: "12 months contract",
          priceKey: 'annual'
        },
      ],
      durationPlanSelected: 0,
    };
  },
  methods: {
    selectPlanDuration(index) {
      this.durationPlanSelected = index;
      const selectedDuration = this.planDurations[index];
      this.$emit("plan-changed", {
        name: selectedDuration.name,
        price: this.selectedPlan.durations[selectedDuration.priceKey]
      });
    },
  },
  created() {
    // Inicializar con el primer plan duration
    this.selectPlanDuration(0);
  }
};
</script>

<style scoped>
.cardsContainer {
  gap: 1.25rem;
}

.durationCard {
  gap: 0.75rem;
  border-radius: 9px;
  border: none;
  box-shadow: 0px 0px 10px 0px #00000033;
  color: black;
  cursor: pointer;
  padding: 0.75rem;
}

.durationCard.active {
  box-shadow: 0px 0px 20px 0px #69b9fc;
}

.durationCard p span {
  font-size: 1.125rem;
  font-weight: 600;
}

@media (width >=660px) {
  .cardsContainer {
    flex-direction: row;
  }

  .durationCard {
    height: 11.25rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }

  .durationCard h3 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .durationCard p {
    font-size: 0.9rem;
  }

  .durationCard p span {
    font-size: 1.25rem;
  }
}

@media (width >=1080px) {
  .durationCard h3 {
    font-size: 1.25rem;
  }

  .durationCard p {
    font-size: 1rem;
  }

  .durationCard p span {
    font-size: 1.5rem;
  }
}

@media (width >=1440px) {
  .durationCard h3 {
    font-size: 1.5rem;
  }

  .durationCard p span {
    font-size: 1.75rem;
  }
}
</style>
