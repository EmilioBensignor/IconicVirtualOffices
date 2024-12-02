<template>
  <div class="w-full">
    <div v-for="(item, index) in addOns" :key="index" class="w-full addOn column">
      <div class="column">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="priceAdd rowSpaceBetween">
        <p class="text-electric-blue"><span>$</span><span>{{ item.price }}</span> /month</p>
        <div class="quantity rowSpaceBetweenCenter">
          <button @click="decrement(index)">-</button>
          <div>
            <span>{{ item.quantity }}</span>
          </div>
          <button @click="increment(index)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addOns: [
        {
          title: "Additional mail recipient",
          description: "Allow multiple users to receive and manage mail from the same mailbox. Add a quantity for each additional person and/or company you need to receive mail for.",
          price: 149,
          quantity: 0,
        },
        {
          title: "Auto-attendant voice menu",
          description: "Record personalized greetings for your callers and automatically direct calls to the appropriate person or department.",
          price: 129,
          quantity: 0,
        },
        {
          title: "Registered agent",
          description: "Stay in compliance with state and federal regulations and have legal documents and correspondence handled securely",
          price: 119,
          quantity: 0,
        },
      ],
    }
  },
  methods: {
    increment(index) {
      this.addOns[index].quantity++;
    },
    decrement(index) {
      if (this.addOns[index].quantity > 0) {
        this.addOns[index].quantity--;
      }
    }
  }
};
</script>

<style scoped>
.addOn {
  gap: 1rem;
  padding: 1rem 0;
}

.addOn:nth-child(2) {
  border-top: 2px solid #E2E0E0;
  border-bottom: 2px solid #E2E0E0;
}

.addOn > div:first-of-type {
  gap: 0.625rem;
}

.priceAdd {
  align-items: end;
}

.quantity {
  width: 8.75rem;
}

.priceAdd p span {
  font-size: 1.25rem;
}

.priceAdd div button {
  width: 2.625rem;
  height: 2.625rem;
  background: var(--color-light-blue);
  border: none;
  border-radius: 9px;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}

.priceAdd div div {
  padding: 0.5rem 1.25rem;
}

.priceAdd div span {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>