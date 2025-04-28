export const useStripeCheckout = async (checkoutData: any) => {
	const data: any = await $fetch("/api/checkout", {
		method: "POST",
		body: { checkoutData },
	});
	
	if (data.url) {
		window.location.href = data.url; // Redirect to Stripe checkout
	} else {
		console.error("Stripe error");
		return;
	}
};
