<template>
  <div class="promo bg-gradient">
    <p class="text-center text-white font-bold">
      Limited spots available! Join Miami’s top virtual office service today.
    </p>
  </div>
</template>

<style scoped>
  .promo {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0.75rem 1.25rem;
  }

  .promo p {
    font-size: 0.75rem;
  }

  @media (width >=660px) {
    .promo {
      padding: 1.25rem 2.5rem;
    }

    .promo p {
      font-size: 1rem;
    }
  }

  @media (width >=1080px) {
    .promo {
      padding: 1.5rem 5.625rem;
    }

    .promo p {
      font-size: 1.25rem;
    }
  }
</style>