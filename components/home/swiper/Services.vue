<template>
  <div>
    <Carousel
      :value="services"
      :num-visible="2"
      :num-scroll="1"
      circular
      :autoplayInterval="3000"
      :responsiveOptions="responsiveOptions"
      class="w-full carrouselServices"
    >
      <template #item="slotProps">
        <div class="slide columnAlignCenter">
          <NuxtImg
            class="imgSlide"
            :src="`/images/services/${slotProps.data.img}-service.png`"
            :alt="`${slotProps.data.text} Service`"
          />
          <p class="text-center">{{ slotProps.data.text }}</p>
        </div>
      </template>
    </Carousel>
    <div class="w-full servicesDesktop column">
      <div class="servicesContainer">
        <div
          class="columnAlignCenter"
          v-for="(service, index) in services.slice(0, 4)"
          :key="index"
        >
          <NuxtImg
            class="imgSlide"
            :src="`/images/services/${service.img}-service.png`"
            :alt="`${service.text} Service`"
          />
          <p class="text-center">{{ service.text }}</p>
        </div>
      </div>
      <div class="servicesContainer">
        <div
          class="columnAlignCenter"
            v-for="(service, index) in services.slice(4, 8)"
          :key="index"
        >
          <NuxtImg
            class="imgSlide"
            :src="`/images/services/${service.img}-service.png`"
            :alt="`${service.text} Service`"
          />
          <p class="text-center">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "1920px",
          numVisible: 4,
          numScroll: 1,
          autoplayInterval: 0,
          showArrows: false,
        },
        {
          breakpoint: "1080px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "660px",
          numVisible: 2,
          numScroll: 1,
        },
      ],
      services: [
        {
          img: "Receptionist-secretarial-support",
          alt: "Reception secretarial support",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Mail-scanning-forwarding",
          alt: "Mail scanning forwarding",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Package-handling-courier",
          alt: "Package handling courier services",
          text: "Package handling & courier services",
        },
        {
          img: "Telephone-answering",
          alt: "Telephone answering service",
          text: "Telephone answering service",
        },
        {
          img: "Business-address",
          alt: "Business Address for Company Registration",
          text: "Business Address for Company Registration",
        },
        {
          img: "Co-working-spaces",
          alt: "Access to Co-Working Spaces",
          text: "Access to Co-Working Spaces",
        },
        {
          img: "Executive-offices",
          alt: "Access to Executive Offices",
          text: "Access to Executive Offices",
        },
        {
          img: "Premium-meeting-rooms",
          alt: "Access to Premium Meeting Rooms",
          text: "Access to Premium Meeting Rooms",
        },
        {
          img: "Receptionist-secretarial-support",
          alt: "Reception secretarial support",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Mail-scanning-forwarding",
          alt: "Mail scanning forwarding",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Package-handling-courier",
          alt: "Package handling courier services",
          text: "Package handling & courier services",
        },
        {
          img: "Telephone-answering",
          alt: "Telephone answering service",
          text: "Telephone answering service",
        },
        {
          img: "Business-address",
          alt: "Business Address for Company Registration",
          text: "Business Address for Company Registration",
        },
        {
          img: "Co-working-spaces",
          alt: "Access to Co-Working Spaces",
          text: "Access to Co-Working Spaces",
        },
        {
          img: "Executive-offices",
          alt: "Access to Executive Offices",
          text: "Access to Executive Offices",
        },
        {
          img: "Premium-meeting-rooms",
          alt: "Access to Premium Meeting Rooms",
          text: "Access to Premium Meeting Rooms",
        },
        {
          img: "Receptionist-secretarial-support",
          alt: "Reception secretarial support",
          text: "Receptionist & secretarial support",
        },
        {
          img: "Mail-scanning-forwarding",
          alt: "Mail scanning forwarding",
          text: "Mail scanning & forwarding",
        },
        {
          img: "Package-handling-courier",
          alt: "Package handling courier services",
          text: "Package handling & courier services",
        },
        {
          img: "Telephone-answering",
          alt: "Telephone answering service",
          text: "Telephone answering service",
        },
        {
          img: "Business-address",
          alt: "Business Address for Company Registration",
          text: "Business Address for Company Registration",
        },
        {
          img: "Co-working-spaces",
          alt: "Access to Co-Working Spaces",
          text: "Access to Co-Working Spaces",
        },
        {
          img: "Executive-offices",
          alt: "Access to Executive Offices",
          text: "Access to Executive Offices",
        },
        {
          img: "Premium-meeting-rooms",
          alt: "Access to Premium Meeting Rooms",
          text: "Access to Premium Meeting Rooms",
        },
      ],
    };
  },
};
</script>

<style>
.carrouselServices .p-carousel-next-button,
.carrouselServices .p-carousel-prev-button {
  width: 2rem;
  height: 2rem !important;
  position: absolute;
  background: white !important;
  border: none;
  box-shadow: 0px 0px 10px 0px #00000033;
  border-radius: 999px !important;
  color: var(--color-electric-blue) !important;
  transition: all 0.3s;
  cursor: pointer;
}

.carrouselServices .p-carousel-prev-button {
  left: 0.5rem;
}

.carrouselServices .p-carousel-next-button {
  right: 0.5rem;
}

.carrouselServices .p-carousel-viewport {
  padding: 0 1rem;
}

@media (width >=660px) {
  .carrouselServices .p-carousel-next-button,
  .carrouselServices .p-carousel-prev-button {
    width: 2.5rem;
    height: 2.5rem !important;
  }

  .carrouselServices .p-carousel-prev-button {
    left: 1rem;
  }

  .carrouselServices .p-carousel-next-button {
    right: 1rem;
  }

  .carrouselServices .p-carousel-next-button svg,
  .carrouselServices .p-carousel-prev-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .carrouselServices .p-carousel-viewport {
    padding: 0 1.25rem;
  }
}

@media (width >=1080px) {
  .carrouselServices {
    display: none !important;
  }
}
</style>

<style scoped>
p {
  max-width: 122px;
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

.servicesContainer {
  display: none;
}

@media (width >=660px) {
  p {
    max-width: 140px;
    font-size: 1rem;
  }

  .imgSlide {
    height: 5.125rem;
  }
}

@media (width >=1080px) {
  .servicesDesktop {
    gap: 2rem;
  }

  .serviceContainer {
    display: flex;
  }

  .servicesContainer {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 0 3rem;
  }

  .servicesContainer div {
    gap: 1.5rem;
  }

  p {
    max-width: 175px;
    font-size: 1.25rem;
  }

  .imgSlide {
    height: 8.125rem;
  }
}
</style>
