import Stripe from "stripe";
import { defineEventHandler, readBody } from "h3";

const product_price_map: any = {
	"Downtown Connect / Month": "price_1QniXQE4udfRrvV7LT9R4a6Y",
	"Downtown Connect / 6": "price_1QniXtE4udfRrvV7kjprFrvb",
	"Downtown Connect / 12": "price_1Qnia0E4udfRrvV7SmW59L22",
	"Downtown Grow / Month": "price_1QniaXE4udfRrvV7R7i90Npx",
	"Downtown Grow / 6": "price_1QniauE4udfRrvV7AHdqZlTD",
	"Downtown Grow / 12": "price_1QnicWE4udfRrvV7H3Gygc2y",
	"Downtown Evolve / Month": "price_1QnidKE4udfRrvV7xBnngyT1",
	"Downtown Evolve / 6": "price_1QnieaE4udfRrvV70ryK1y1n",
	"Downtown Evolve / 12": "price_1Qnif7E4udfRrvV75xjSvwUB",
	"Aventura Connect / Month": "price_1QnihLE4udfRrvV7zy0t312X",
	"Aventura Connect / 6": "price_1QnihzE4udfRrvV7vGHPno7I",
	"Aventura Connect / 12": "price_1QniiYE4udfRrvV74dwe3N2X",
	"Aventura Grow / Month": "price_1Qnij5E4udfRrvV7H5gHBtFK",
	"Aventura Grow / 6": "price_1QnijQE4udfRrvV77SIT8Dm6",
	"Aventura Grow / 12": "price_1QnikuE4udfRrvV7u8OgQKO7",
	"Aventura Evolve / Month": "price_1QnilmE4udfRrvV7MzMmsTd8",
	"Aventura Evolve / 6": "price_1QnimHE4udfRrvV7L4zplYRG",
	"Aventura Evolve / 12": "price_1QnimfE4udfRrvV7cI27jPlr",
	"Additional mail recipient / Month": "price_1QnjDVE4udfRrvV7kTNB3NDE",
	"Additional mail recipient / 6": "price_1QnjDvE4udfRrvV7ujEe3HaV",
	"Additional mail recipient / 12": "price_1QnjEPE4udfRrvV7IexM3TCq",
	"Bilingual Receptionist / Month": "price_1QnjBNE4udfRrvV7tq5C08JU",
	"Bilingual Receptionist / 6": "price_1QnjBkE4udfRrvV7iBhfcWbr",
	"Bilingual Receptionist / 12": "price_1QnjCxE4udfRrvV7w8xa515O",
	"Auto-attendant voice menu / Month": "price_1Qnj9uE4udfRrvV7JyF9vONN",
	"Auto-attendant voice menu / 6": "price_1QnjAPE4udfRrvV7LVBzYnLs",
	"Auto-attendant voice menu / 12": "price_1QnjAuE4udfRrvV7dzaTZy3B",
	"Dedicated Local Phone Number / Month": "price_1Qnj0QE4udfRrvV7j3X1d6Sg",
	"Dedicated Local Phone Number / 6": "price_1Qnj8mE4udfRrvV77z15dneN",
	"Dedicated Local Phone Number / 12": "price_1Qnj9SE4udfRrvV73w29KbRh",
	"Registered agent / Month": "price_1QnotjE4udfRrvV7aZJ6Vize",
	"Registered agent / 6": "price_1QnozbE4udfRrvV7FnYpPz19",
	"Registered agent / 12": "price_1Qnp1NE4udfRrvV7W172ye2p",
	"Virtual Office Set Up Fee / Connect": "price_1QniyPE4udfRrvV71ZkRSWgz",
	"Virtual Office Set Up Fee / Grow & Evolve":
		"price_1QniymE4udfRrvV7mRN98qkY",
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default defineEventHandler(async (event) => {
	try {
		const { checkoutData } = await readBody(event); // Read the request body
		const line_items = [];

		const main_product_id: string = `${checkoutData.location} ${
			checkoutData.plan
		} / ${checkoutData.duration.split("-").join(" ").split(" ")[0]}`;

		line_items.push({
			price: product_price_map[main_product_id],
			quantity: 1,
		});
		const fee_id =
			checkoutData.plan == "Connect"
				? "Virtual Office Set Up Fee / Connect"
				: "Virtual Office Set Up Fee / Grow & Evolve";
		line_items.push({
			price: product_price_map[fee_id],
			quantity: 1,
		});

		checkoutData.addons.forEach((addon: any) => {
			const addon_id = `${addon.title} / ${
				checkoutData.duration.split("-").join(" ").split(" ")[0]
			}`;
			line_items.push({
				price: product_price_map[addon_id],
				quantity: addon.quantity,
			});
		});

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items,
			mode: "subscription",
			success_url: "http://localhost:3000/",
			cancel_url: "http://localhost:3000/get-started",
		});

		return { url: session.url }; // Return the Stripe checkout URL
	} catch (error: any) {
		return { error: error.message };
	}
});
