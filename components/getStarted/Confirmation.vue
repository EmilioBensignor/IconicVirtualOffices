<template>
  <section class="columnAlignCenter">
    <h1 class="text-center">Thank you for choosing Iconic Virtual Offices</h1>
    <div class="w-full readyOrder columnAlignCenter">
      <div class="ready rowCenter">
        <img
          class="confirmationIcon"
          src="/images/getStarted/Confirmation-Icon.svg"
          alt="Confirmation Icon"
        />
        <div class="column">
          <p class="font-bold">Your virtual office is ready!</p>
          <p>
            Confirmation number <span>{{ confirmationNumber }}</span>
          </p>
        </div>
      </div>
      <GetStartedOrderSummary />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      confirmationNumber: "#12345-AB",
    };
  },
};
</script>

<style scoped>
.ready,
.readyOrder {
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

  .ready,
  .readyOrder {
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

@media (width >=1080px) {
  .readyOrder {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }

  .readyOrder > div:first-of-type {
    width: 100%;
  }

  .readyOrder > div:last-of-type {
    width: 95% !important;
  }

  .ready {
    gap: 1.25rem;
  }

  .ready div p:first-of-type {
    font-size: 1.875rem;
  }

  .ready div p {
    font-size: 1.25rem;
  }

  .confirmationIcon {
    width: 3.75rem;
    height: 3.75rem;
  }
}

@media (width >=1440px) {
  .confirmationIcon {
    width: 4rem;
    height: 4rem;
  }

  .ready div p:first-of-type {
    font-size: 2.25rem;
  }
}
</style>
