<template>
  <div class="navigation-wrapper">
    <div ref="container" class="w-full slider keen-slider">
      <div class="slide columnAlignCenter" v-for="(slide, index) in services" :key="index"
        :class="`keen-slider__slide number-slide${index + 1}`">
        <NuxtImg class="imgSlide" :src="`/images/home/${slide.img}.png`" :alt="slide.text" />
        <p class="text-center">{{ slide.text }}</p>
      </div>
    </div>
    <button class="btnSlider prev" @click="prevSlide" aria-label="Prev Arrow">
      <Icon class="text-electric-blue" name="mingcute:left-line" />
    </button>
    <button class="btnSlider next" @click="nextSlide" aria-label="Next Arrow">
      <Icon class="text-electric-blue" name="mingcute:right-line" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
        {
          img: "Service-Image",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Service-Image",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Service-Image",
          text: "Package handling & courier services",
        },
        {
          img: "Service-Image",
          text: "Telephone answering service",
        },
      ],
    };
  },
  setup() {
    let intervalId;
    const [container, slider] = useKeenSlider(
      {
        loop: true,
        drag: false,
        slides: {
          perView: 2,
          spacing: 8,
        },
        breakpoints: {
          660: {
            slides: {
              perView: 3,
            },
          },
        },
        renderMode: "performance",
        defaultAnimation: {
          duration: 500,
        },
      },
      [
        (slider) => {
          slider.on("created", () => {
            intervalId = setInterval(() => {
              slider.next();
            }, 2000);
          });

          slider.on("destroyed", () => {
            if (intervalId) {
              clearInterval(intervalId);
            }
          });
        },
      ]
    );

    return {
      container,
      prevSlide: () => slider.value?.prev(),
      nextSlide: () => slider.value?.next(),
    };
  },
};
</script>

<style scoped>
.navigation-wrapper {
  position: relative;
}

p {
  font-size: 0.75rem;
}

.slide {
  gap: 1.25rem;
}

.imgSlide {
  width: 100%;
  height: 3.438rem;
  object-fit: contain;
}

.btnSlider {
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30%;
  background: white;
  border: none;
  box-shadow: 0px 0px 10px 0px #00000033;
  border-radius: 999px;
  transition: all 0.3s;
  cursor: pointer;
}

.btnSlider:hover {
  background: var(--color-light-blue);
}

.btnSlider span {
  width: 2rem;
  font-size: 1.5rem !important;
}

.btnSlider:hover span {
  color: white;
}

.prev {
  left: -2rem;
}

.next {
  right: -2rem;
}

@media (width >=660px) {
  p {
    font-size: 1rem;
  }

  .imgSlide {
    height: 5.125rem;
  }

  .btnSlider {
    width: 2.5rem;
    height: 2.5rem;
  }

  .btnSlider span {
    font-size: 2rem !important;
  }

  .prev {
    left: -2.5rem;
  }

  .next {
    right: -2.5rem;
  }
}
</style>
