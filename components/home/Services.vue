<template>
  <section class="bg-gradient">
    <div class="services column bg-white">
      <h2 class="text-center">All-in-one office services, wherever you are</h2>
      <HomeSwiperServices />
    </div>
  </section>
</template>

<style scoped>
  .services {
    gap: 1.25rem;
    border-radius: 22px;
    padding: 1.25rem 0;
  }

  .services h2 {
    padding: 0 1rem;
  }

  @media (width >=660px) {
    .services {
      gap: 1.5rem;
      padding: 2rem 0;
    }

    .services h2 {
      padding: 0 1.5rem;
    }
  }

  @media (width >=1080px) {
    .services {
      padding: 2.5rem 0;
    }

    .services h2 {
      padding: 0 2.5rem;
    }
  }
  
  @media (width >=1440px) {
    .services {
      gap: 2rem;
      padding: 2.75rem 0;
    }

    .services h2 {
      padding: 0 2.75rem;
    }
  }
</style>