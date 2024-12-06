<template>
  <div class="w-full order columnAlignCenter">
    <div class="w-full orderHeader columnAlignCenter">
      <p>Order Summary</p>
    </div>
    <div class="w-full orderBody">
      <div class="orderLine">
        <p class="font-bold">Plan:</p>
        <p>{{ selectedPlan }}</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Location:</p>
        <div>
          <p>{{ selectedDestination }}</p>
          <p>{{ locationAddress }}</p>
          <p>{{ locationCity }}</p>
        </div>
      </div>
      <div class="orderLine">
        <p class="font-bold">Duration:</p>
        <p>{{ order.duration }}</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Next biling date:</p>
        <p>{{ nextBillingDate }}</p>
      </div>
      <div class="orderLine">
        <p class="font-bold">Today’s payment:</p>
        <p>${{ order.payment }}.00</p>
      </div>
      <div class="orderAddOns orderLine" v-if="selectedAddOns.length">
        <p class="font-bold">Add-ons:</p>
        <div>
          <div v-for="(addOn, index) in selectedAddOns" :key="index">
            <p class="font-bold">{{ addOn.title }}</p>
            <p>${{ (addOn.price * addOn.quantity).toFixed(2) }}  /month</p>
          </div>
        </div>
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
        <p>${{ (order.payment + 99).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    durationData: {
      type: Object,
      required: false,
      default: () => ({
        name: 'Month-to-month',
        price: 149.00
      })
    },
    addOns: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      order: {
        duration: this.durationData?.name || 'Month-to-month',
        payment: this.durationData?.price || 149.00
      }
    }
  },
  watch: {
    durationData: {
      handler(newData) {
        if (newData) {
          this.order.duration = newData.name;
          this.order.payment = newData.price;
        }
      },
      deep: true
    }
  },
  computed: {
    selectedDestination() {
      return this.$route.query.destination
    },
    selectedPlan() {
      return this.$route.query.plan
    },
    locationAddress() {
      return this.selectedDestination === 'Downtown'
        ? '150 SE 2nd Ave, 3rd floor.'
        : '19495 Biscayne Blvd. Suite 600'
    },
    locationCity() {
      return this.selectedDestination === 'Downtown'
        ? 'Downtown Miami, FL 33131'
        : 'Aventura, FL 33180'
    },
    nextBillingDate() {
      const today = new Date();
      let nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      if ([29, 30, 31].includes(today.getDate())) {
        nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 28);
      }
      return nextMonth.toLocaleDateString();
    },
    selectedAddOns() {
      return this.addOns.filter(addOn => addOn.quantity > 0);
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

.orderAddOns, .orderAddOns > div {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.orderAddOns > div > div {
  display: flex;
  justify-content: space-between;
}

.orderLine:last-of-type {
  border: none;
}

.total {
  padding: 1rem 0;
}

@media (width >=660px) {
  .order {
    gap: 0.75rem;
  }

  .orderHeader {
    border-radius: 12px;
    padding: 0.75rem;
  }

  .order .orderHeader p {
    font-size: 1.125rem;
  }

  .order p {
    font-size: 0.875rem;
  }
}

@media (width >=1080px) {
  .orderHeader {
    border-radius: 18px;
    padding: 1rem 0.75rem;
  }

  .order .orderHeader p {
    font-size: 1.25rem;
  }

  .order p {
    font-size: 1rem;
  }

  .orderLine {
    padding: 0.75rem 0 ;
  }
}
</style>