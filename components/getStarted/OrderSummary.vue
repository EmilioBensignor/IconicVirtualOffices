<template>
  <div class="w-full order columnAlignCenter">
    <div class="w-full orderHeader columnAlignCenter">
      <p>Order Summary</p>
    </div>
    <div class="w-full orderBody">
      <div class="orderLine">
        <p class="font-bold">Plan:</p>
        <p>{{ order.plan }}</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Location:</p>
        <div>
          <p>Downtown</p>
          <p>150 SE 2nd Ave, 3rd floor.</p>
          <p>Downtown Miami, FL 33131</p>
        </div>
      </div>
      <div class="orderLine">
        <p class="font-bold">Duration:</p>
        <p>Month-to-month</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Next biling date:</p>
        <p>2024-11-16</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Today’s payment:</p>
        <p>$149.00</p>
      </div>
      <div class="oneTime">
        <div class="orderLine">
          <p class="font-bold">One-Time Setup Fee:</p>
          <p>$99.00</p>
        </div>
        <p>Security Deposit 1 Month Required for ALL memberships</p>
      </div>
      <div class="total orderLine">
        <p class="font-bold">Total:</p>
        <p>$248.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        plan: "Grow",
      }
    }
  }
}
</script>

<style scoped>
.order {
  gap: 0.5rem;
}

.order p {
  font-size: 0.75rem;
  color: black;
}

.orderHeader {
  background: var(--gradient-blue);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #00000033;
  padding: 0.5rem 0.75rem;
}

.orderHeader p {
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-white);
}

.orderBody {
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px #00000033;
  padding: 0.75rem;
}

.orderLine {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E2E0E0;
  padding: 0.5rem 0;
}

.oneTime {
  border-bottom: 1px solid #E2E0E0;
  padding-bottom: 0.5rem;
}

.orderLine:last-of-type {
  border: none;
}

.total {
  padding: 1rem 0;
}
</style>