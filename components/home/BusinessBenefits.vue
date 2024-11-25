<template>
  <section class="columnAlignCenter">
    <h2 class="text-center">Unlock your business potential</h2>
    <div class="w-full columnAlignCenter">
      <article class="w-full columnAlignCenter" v-for="(benefit, index) in benefits" :key="index">
        <NuxtImg :src="`/images/home/${benefit.img}.png`" :alt="benefit.alt" />
        <h3 class="text-center">{{ benefit.title }}</h3>
        <ul class="column">
          <li class="flex" v-for="(item, index) in benefit.list" :key="index">
            <Icon class="text-mid-blue" :name="`mingcute:${item.icon}`" />
            <p class="text-dark-gray">{{ item.text }}</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          img: "Benefit-Image",
          alt: "",
          title: "Focus on growth",
          list: [
            {
              icon: "phone-call-line",
              text: "Don't worry about mail, calls, and logistics",
            },
            {
              icon: "location-3-line",
              text: "Gain a prestigious business address to build trust with clients",
            },
          ],
        },
        {
          img: "Benefit-Image",
          alt: "",
          title: "Stay productive",
          list: [
            {
              icon: "door-line",
              text: "Reduce the distractions of managing office logistics",
            },
            {
              icon: "settings-5-line",
              text: "Enjoy streamlined administrative support",
            },
          ],
        },
        {
          img: "Benefit-Image",
          alt: "",
          title: "Expand with flexibility",
          list: [
            {
              icon: "file-forbid-line",
              text: "No long-term contracts and affordable monthly plans.",
            },
            {
              icon: "chart-vertical-line",
              text: "Scale flexibly, without physical space limits.",
            },
          ],
        },
      ],
    }
  }
}
</script>

<style scoped>
section>div {
  gap: 1rem;
}

article {
  max-width: 310px;
}

article,
article ul,
article ul li {
  gap: 0.75rem;
}

article ul li span {
  width: 10%;
}

article ul li p {
  width: 90%;
}

article img {
  width: 8.75rem;
}

@media (width >=660px) {
  section>div {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  article {
    max-width: 400px;
    width: 45% !important;
  }

  article p {
    font-size: 0.875rem;
  }
}

@media (width >=1080px) {
  section>div {
    justify-content: space-around;
  }

  article {
    max-width: 328px;
    width: 30% !important;
  }

  article {
    gap: 1.5rem;
  }

  article ul {
    gap: 1.25rem;
  }

  article ul li span {
    width: 7.5%;
  }

  article p {
    font-size: 1rem;
  }
}

@media (width >=1440px) {
  section>div {
    justify-content: space-between;
  }

  article {
    max-width: 350px;
  }

  article ul li span {
    font-size: 1.25rem !important;
  }

  article p {
    font-size: 1.25rem;
  }
}
</style>