<template>
  <div class="w-full cardsContainer columnAlignCenter">
    <button v-for="(item, index) in planDurations" :key="index"
      :class="['w-full durationCard columnAlignCenter bg-white', { active: activeIndex === index }]"
      @click="setActive(index)">
      <h3>{{ item.name }}</h3>
      <p>Starting <span>{{ item.price }}</span> /month</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planDurations: [
        {
          name: "Month-to-month",
          price: 149,
        },
        {
          name: "6 months contract",
          price: 129,
        },
        {
          name: "12 months contract",
          price: 119,
        },
      ],
      activeIndex: null,
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
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
  cursor: pointer;
  padding: 0.75rem;
}

.durationCard.active {
  box-shadow: 0px 0px 20px 0px #69B9FC;
}

.durationCard p span {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>