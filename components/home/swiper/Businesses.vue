<template>
  <div class="w-full businessesContainer column">
    <p class="text-center text-dark-gray font-bold">Trusted by +1000 businesses</p>
    <div class="w-full slider">
      <ClientOnly>
        <div class="logos">
          <NuxtImg v-for="(logo, index) in businesses" :key="index" :src="`/images/businesses/${logo}`" :alt="logo" />
          <NuxtImg v-for="(logo, index) in businesses" :key="index" :src="`/images/businesses/${logo}`" :alt="logo" />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businesses: ["1.png", "2.png", "3.png", "1.png", "2.png", "3.png"],
    };
  },
};
</script>

<style scoped>
.heroSection .businessesContainer {
  gap: 0.75rem;
}

p {
  font-size: 0.75rem;
}

.slider {
  height: fit-content;
  overflow: hidden
}

.logos {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slide 10s linear infinite;
}

.logos img {
  width: 5rem;
  margin: 0 1.5rem;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (width >=660px) {
  .heroSection .businessesContainer {
    gap: 1.25rem;
  }

  p {
    font-size: 1rem;
  }

  .logos img {
    width: 6.75rem;
  }
}

@media (width >=1080px) {

  p {
    font-size: 1.25rem;
  }

  .logos img {
    width: 8rem;
    margin: 0 2rem;
  }
}

@media (width >=1440px) {
  .heroSection .businessesContainer {
    gap: 1.5rem;
  }

  .logos img {
    width: 10rem;
    margin: 0 2.5rem;
  }
}
</style>
