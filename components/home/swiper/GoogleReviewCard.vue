<template>
  <NuxtLink
    to="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDGqLMkrKS8yYLRSNagwMzFPSTaztEhMtDA0NDYwtTKoSE21NEhJSbY0MTA2TzE1TvUSzEzOz8tMVkgsLs4sLknMKykGABRIFoU&q=iconic+assistants&rlz=1C1ALOY_esAR1068AR1068&oq=ic&gs_lcrp=EgZjaHJvbWUqEggDEC4YJxivARjHARiABBiKBTIGCAAQRRg8MgYIARBFGDwyBggCEEUYOTISCAMQLhgnGK8BGMcBGIAEGIoFMgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxOTEwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x647dc698aa811305:0xee90ddc94037d53e,1"
    target="_blank"
    class="reviewCard column relative no-underline"
  >
    <div class="rowCenter gap-2">
      <div
        class="avatar bgCover"
        :style="{
          backgroundImage: `url('/images/reviews/${review.img}-Google-Review.svg')`,
        }"
      ></div>
      <div class="reviewHeader column gap-1">
        <p class=" font-bold">{{ review.name }}</p>
        <p>{{ review.numReviews }} reviews</p>
      </div>
    </div>
    <div>
      <div v-if="review.numStars === 4.5">
        <MiscStarsFourHalf />
      </div>
      <div v-if="review.numStars === 5">
        <MiscStarsFive />
      </div>
    </div>
    <p>{{ review.text }}</p>
    <NuxtImg
      class="googleIcon absolute"
      src="/images/Home/Google-Icon.svg"
      alt="Google Icon"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.reviewCard {
  background-color: #EEEEEE;
  gap: 0.625rem;
  border-radius: 12px;
  border: 1px solid var(--color-dark-gray);
  color: var(--color-black);
  padding: 1.25rem 0.75rem;
  margin: 0 0.75rem;
}

.googleIcon {
  width: 1.25rem;
  top: 1.25rem;
  right: 0.75rem;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
}

.reviewHeader p:first-of-type {
  font-size: 0.875rem;
}

.reviewHeader p:last-of-type {
  font-size: 0.75rem;
}

.reviewCard p:last-of-type {
  font-size: 0.75rem;
}

@media (width >= 660px) {
  .reviewCard {
    width: 100%;
    height: max-content;
    break-inside: avoid-column;
    page-break-inside: avoid;
    margin: 0 !important;
    margin-bottom: 0.625rem !important;
  }
}

@media (width >= 1440px) {
  .reviewCard {
    gap: 0.875rem;
    margin-bottom: 1rem !important;
  }

  .reviewHeader p:first-of-type {
    font-size: 1rem;
  }

  .reviewCard p:last-of-type {
    font-size: 0.875rem;
  }
}
</style>
