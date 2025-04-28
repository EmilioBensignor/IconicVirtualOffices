<template>
	<main>
		<GetStartedCheckout
			v-if="showCheckout && selectedPlan"
			:selected-plan="selectedPlan"
			@confirm-order="confirmOrder"
		/>
		<GetStartedConfirmation v-if="showConfirmation" />
	</main>
</template>

<script>
import { destinations } from "~/shared/destinations";

export default {
	data() {
		return {
			showCheckout: true,
			showConfirmation: false,
			selectedPlan: null,
			destinations,
			stripe: null,
		};
	},
	created() {
		const { destination, plan } = this.$route.query;

		if (!destination || !plan) {
			return this.$router.push("/");
		}

		const destinationFound = this.destinations.find(
			(d) => d.title === destination
		);

		if (destinationFound) {
			const planFound = destinationFound.plans.find(
				(p) => p.name === plan
			);

			if (planFound) {
				this.selectedPlan = planFound;
				return;
			}
		}
		this.$router.push("/");
	},
	methods: {
		async confirmOrder(durationData, addOns, billingData, contactData) {
			const output = {
				duration: durationData.name,
				addons: addOns,
				plan: this.selectedPlan.name,
				billing: billingData,
				contact: contactData,
				location: this.$route.query.destination,
			};
			await useStripeCheckout(output);
			console.log(output);
			// this.showCheckout = false;
			// this.showConfirmation = true;
		},
	},
};
</script>
