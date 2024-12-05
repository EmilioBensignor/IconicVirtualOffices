<template>
  <section class="columnAlignCenter">
    <h1 class="text-center">Thank you for choosing Iconic Virtual Offices</h1>
    <div class="ready rowCenter">
      <img class="confirmationIcon" src="/images/getStarted/Confirmation-Icon.svg" alt="Confirmation Icon">
      <div class="column">
        <p class="font-bold">Your virtual office is ready!</p>
        <p>Confirmation number <span>{{ confirmationNumber }}</span></p>
      </div>
    </div>
    <GetStartedOrderSummary />
  </section>
</template>

<script>
export default {
  data() {
    return {
      confirmationNumber: '#12345-AB'
    }
  }
}
</script>

<style scoped>
.ready {
  gap: 0.75rem;
}

.ready div {
  gap: 0.25rem;
}

.ready div p:first-of-type {
  font-size: 1.125rem;
}

.ready div p {
  font-weight: 500;
}

@media (width >=660px) {
  section {
    align-items: flex-start;
    gap: 2rem;
  }

  h1 {
    text-align: start !important;
  }

  .ready {
    gap: 1rem;
  }

  .confirmationIcon {
    width: 3rem;
    height: 3rem;
  }

  .ready div p:first-of-type {
    font-size: 1.5rem;
  }
}
</style>