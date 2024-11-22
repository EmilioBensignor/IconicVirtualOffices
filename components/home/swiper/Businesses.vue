<template>
  <div class="w-full column">
    <p class="text-center text-dark-gray font-bold">Trusted by +1000 businesses</p>
    <div ref="container" class="w-full slider">
      <div class="keen-slider" ref="sliderTrack">
        <div class="slide" v-for="(slide, index) in businesses" :key="index"
          :class="`keen-slider__slide number-slide${index + 1}`">
          <NuxtImg class="imgSlide" :src="`/images/businesses/${slide}`" :alt="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businesses: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    };
  },
  setup() {
    const animation = { duration: 4500, easing: (t) => t };

    const [container] = useKeenSlider({
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 3,
        spacing: 15,
      },
      created(s) {
        s.moveToIdx(4, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 4, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 4, true, animation);
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

.imgSlide {
  width: 100%;
  height: 2.188rem;
  object-fit: contain;
}

@media (width >=660px) {
  p {
    font-size: 1rem;
  }
}
</style>
