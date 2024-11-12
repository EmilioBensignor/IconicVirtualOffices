<template>
  <div class="w-full column">
    <p class="text-center text-dark-gray">Trusted by +1000 businesses</p>
    <div ref="container" class="w-full slider keen-slider">
      <div
        class="slide"
        v-for="(slide, index) in businesses"
        :class="`keen-slider__slide number-slide${index + 1}`"
      >
        <NuxtImg
          class="imgSlide"
          :src="`/images/businesses/${slide}`"
          :alt="slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
const animation = { duration: 7500, easing: (t) => t };
export default {
  data() {
    return {
      businesses: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
      ],
    };
  },
  setup() {
    const [container] = useKeenSlider({
      loop: true,
      mode: "free",
      drag: true,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      slides: {
        perView: 3.75,
        spacing: 15,
      },
    });
    return { container };
  },
};
</script>

<style scoped>
p {
  font-size: 0.75rem;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgSlide {
  width: 100%;
  height: 2.188rem;
  object-fit: contain;
}
</style>
