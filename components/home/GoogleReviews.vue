<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Discover how we make a difference</h2>
    <div class="w-full carrouselContainer columnAlignCenter">
      <Carousel :value="reviews" :num-visible="1" :num-scroll="1" circular :autoplayInterval="3000"
        class="w-full carrouselReviews">
        <template #item="slotProps">
          <HomeSwiperGoogleReviewCard :review="slotProps.data" />
        </template>
      </Carousel>
      <div class="reviewsContainer">
        <div class="clipContainer">
          <HomeSwiperGoogleReviewCard :review="review" v-for="(review, index) in reviews" :key="index" />
        </div>
      </div>
      <NuxtLink
        to="https://www.google.com/search?sca_esv=fc6c41709a2992ea&cs=0&output=search&kgmid=/g/11j37qgvhb&q=ICONIC+WORKSPACES+AVENTURA&shndl=30&shem=uaasie&source=sh/x/loc/uni/m1/1&kgs=124cdde3e1efc396#lrd=0x88d9ad80602e11ab:0xb85e4989d6fe3803,1"
        target="_blank" class="secondaryButton googleLink">
        <div>
          <p>Read more success stories</p>
          <Icon name="mingcute:arrow-right-line" class="text-black" />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import { reviews } from "~/shared/reviews";

export default {
  data() {
    return {
      reviews: reviews,
    };
  },
  mounted() {
    window.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("touchstart", this.handleTouchStart);
  },
};
</script>

<style>
.carrouselReviews {
  position: relative;
}

.carrouselReviews .p-carousel-next-button,
.carrouselReviews .p-carousel-prev-button {
  width: 2rem;
  height: 2rem !important;
  position: absolute;
  z-index: 5;
  background: #FFFFFF !important;
  box-shadow: 0px 0px 10px 0px #00000033;
}

.carrouselReviews .p-carousel-prev-button {
  left: -0.875rem;
}

.carrouselReviews .p-carousel-next-button {
  right: -0.875rem;
}

.carrouselReviews .p-carousel-next-button .p-icon,
.carrouselReviews .p-carousel-prev-button .p-icon {
  color: var(--color-electric-blue);
}

.carrouselReviews .p-carousel-indicator-list {
  visibility: hidden;
}

@media (width >=480px) {
  .carrouselContainer .p-carousel {
    max-width: 506px;
  }
}

@media (width >=660px) {
  .carrouselContainer .p-carousel {
    display: none !important;
  }
}
</style>

<style scoped>
.googleLogo {
  width: 6.5rem;
  margin-top: 0.75rem;
}

.reviewsContainer {
  display: none;
}

.googleLink {
  width: max-content;
}

.googleLink div {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 0;
}

@media (width >=480px) {
  .h2Google h2 {
    display: block;
  }
}

@media (width >=660px) {
  .carrouselReviews {
    gap: 2rem !important;
    padding: 2.5rem !important;
  }

  .googleHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .h2Google h2 {
    text-align: start !important;
  }

  .googleLogo {
    width: 7rem;
    margin-top: 0;
  }

  .googleStars {
    display: flex;
    gap: 0.266rem;
  }

  .reviewsContainer {
    width: 100%;
    height: 40rem;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .clipContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: inset(0 0 0 0);
    column-count: 2;
    column-gap: 1.25rem;
    row-gap: 0.625rem;
  }

  .googleLink {
    margin-top: 1.25rem;
  }
}

@media (width >=1080px) {
  .carrouselReviews {
    padding: 3.75rem 5rem !important;
  }

  .googleLogo {
    width: 8.313rem;
  }

  .clipContainer {
    column-count: 3;
    column-gap: 0.75rem;
  }

  .googleLink {
    margin-top: 1.5rem;
  }
}

@media (width >=1440px) {
  .carrouselReviews {
    gap: 3.5rem !important;
    padding: 3.75rem 8rem !important;
  }

  .clipContainer {
    column-gap: 1rem;
  }
}

@media (width >=1600px) {
  .clipContainer {
    column-count: 4;
  }
}
</style>
