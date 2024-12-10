<template>
  <NuxtLink
    to="https://www.google.com/search?sca_esv=fc6c41709a2992ea&cs=0&output=search&kgmid=/g/11j37qgvhb&q=ICONIC+WORKSPACES+AVENTURA&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=124cdde3e1efc396#lrd=0x88d9ad80602e11ab:0xb85e4989d6fe3803,1"
    target="_blank"
    class="reviewCard column relative no-underline"
  >
    <div class="rowCenter gap-2">
      <ClientOnly>
        <div class="avatar rowCenter" :style="{ backgroundColor: randomColor }">
          {{ review.name.charAt(0).toUpperCase() }}
        </div>
      </ClientOnly>
      <div class="reviewHeader column gap-1">
        <p class="font-bold">{{ review.name }}</p>
        <p>{{ review.numReviews }} reviews</p>
      </div>
    </div>
    <div>
      <div v-if="review.numStars === 4.5">
        <MiscStarsFourHalf />
      </div>
      <div v-if="review.numStars === 5">
        <MiscStarsFive />
      </div>
    </div>
    <p>{{ review.text }}</p>
    <NuxtImg
      class="googleIcon absolute"
      src="/images/Home/Google-Icon.svg"
      alt="Google Icon"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  computed: {
    randomColor() {
      const colors = [
        "#EF6C00",
        "#0C7A81",
        "#455A64",
        "#C2185B",
        "#309727",
        "#33691E",
        "#3B1B7F",
        "#D32F2F",
        "#1976D2",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style scoped>
.reviewCard {
  background-color: #eeeeee;
  gap: 0.625rem;
  border-radius: 12px;
  border: 1px solid var(--color-dark-gray);
  color: var(--color-black);
  padding: 1.25rem 0.75rem;
  margin: 0 0.75rem;
}

.googleIcon {
  width: 1.25rem;
  top: 1.25rem;
  right: 0.75rem;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  font-weight: 500;
  justify-content: center;
  font-size: 1rem;
}

.reviewHeader p:first-of-type {
  font-size: 0.875rem;
}

.reviewHeader p:last-of-type {
  font-size: 0.75rem;
}

.reviewCard p:last-of-type {
  font-size: 0.75rem;
}

@media (width >= 660px) {
  .reviewCard {
    width: 100%;
    height: max-content;
    break-inside: avoid-column;
    page-break-inside: avoid;
    margin: 0 !important;
    margin-bottom: 0.625rem !important;
  }
}

@media (width >= 1440px) {
  .reviewCard {
    gap: 0.875rem;
    margin-bottom: 1rem !important;
  }

  .reviewHeader p:first-of-type {
    font-size: 1rem;
  }

  .reviewCard p:last-of-type {
    font-size: 0.875rem;
  }
}
</style>
