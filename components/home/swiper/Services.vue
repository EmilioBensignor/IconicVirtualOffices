<template>
  <div class="navigation-wrapper">
    <div ref="container" class="w-full slider keen-slider">
      <div
        class="slide columnAlignCenter"
        v-for="(slide, index) in services"
        :class="`keen-slider__slide number-slide${index + 1}`"
      >
        <NuxtImg
          class="imgSlide"
          :src="`/images/home/${slide.img}.png`"
          :alt="slide.text"
        />
        <p class="text-center">{{ slide.text }}</p>
      </div>
    </div>
    <button class="btnSlider prev" @click="prevSlide" aria-label="Prev Arrow">
      <NuxtImg src="/images/Prev-Arrow-Icon.svg" alt="Prev-Arrow-Icon" />
    </button>
    <button class="btnSlider next" @click="nextSlide" aria-label="Next Arrow">
      <NuxtImg src="/images/Next-Arrow-Icon.svg" alt="Next-Arrow-Icon" />
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
    const [container, slider] = useKeenSlider(
      {
        loop: true,
        drag: false,
        slides: {
          perView: 2,
          spacing: 8,
        },
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );

    const prevSlide = () => {
      if (slider.value) {
        slider.value.prev();
      }
    };

    const nextSlide = () => {
      if (slider.value) {
        slider.value.next();
      }
    };

    return { container, prevSlide, nextSlide };
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
  cursor: pointer;
}

.prev {
  left: -2rem;
}

.next {
  right: -2rem;
}
</style>
