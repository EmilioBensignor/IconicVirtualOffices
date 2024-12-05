<template>
  <main>
    <GetStartedCheckout v-if="showCheckout" @confirm-order="confirmOrder" />
    <GetStartedConfirmation v-if="showConfirmation" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      showCheckout: true,
      showConfirmation: false
    }
  },
  methods: {
    confirmOrder() {
      this.showCheckout = false;
      this.showConfirmation = true;
    }
  }
}
</script>