<template>
  <section class="checkout columnAlignCenter">
    <h1 class="text-center">Let’s launch your virtual office</h1>
    <Stepper class="w-full columnAlignCenter" value="3">
      <StepList class="w-full">
        <Step value="1"></Step>
        <Step value="2"></Step>
        <Step value="3"></Step>
        <Step value="4"></Step>
      </StepList>
      <div class="w-full userCheckout columnAlignCenter">
        <StepPanels>
          <StepPanel value="1">
            <div>
              <h2>Choose your plan duration</h2>
              <p>Choose from monthly, semi-annual, or annual plans</p>
            </div>
            <GetStartedStepsPlanDuration />
          </StepPanel>
          <StepPanel value="2">
            <div>
              <h2>Customize your plan</h2>
              <p>Upgrade your experience with our monthly add-on services.</p>
            </div>
            <GetStartedStepsCustomize />
          </StepPanel>
          <StepPanel value="3">
            <div>
              <h2>Contact information</h2>
              <p>Provide the information of the person responsible for this order below</p>
            </div>
            <GetStartedStepsContactInformation />
            <div>
              <h2>Billing address</h2>
              <p>Fill out the address associated with your card</p>
            </div>
            <GetStartedStepsBillingAddress />
          </StepPanel>
        </StepPanels>
        <GetStartedOrderSummary />
      </div>
    </Stepper>
  </section>
</template>

<style>
.checkout .p-stepper {
  gap: 2rem;
}

.checkout .p-step-header {
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-light-gray);
  border-radius: 999px;
  padding: 0.25rem
}

.checkout .p-step-active .p-step-header {
  background: var(--color-light-blue);
  color: var(--color-white);
}

.checkout .p-step-number {
  color: var(--color-dark-gray);
  font-weight: 700;
  font-size: 1.125rem;
}

.checkout .p-stepper-separator {
  height: 2px;
  background: var(--color-dark-gray);
}

.checkout .p-steppanels {
  width: 100%;
}

.checkout .p-steppanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.checkout .p-steppanel > div {
  width: 100%;
}

.checkout .p-steppanel h2 {
  margin-bottom: 0.25rem;
}
</style>

<style scoped>
.userCheckout {
  gap: 2rem;
}
</style>