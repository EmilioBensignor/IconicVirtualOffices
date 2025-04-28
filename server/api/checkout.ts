// TODO: cambiar rutas stripe (cancel y success)
// TODO: validar mejor fomulario

import Stripe from "stripe";
import { defineEventHandler, readBody } from "h3";

const BASE_URL = 'https://rest.gohighlevel.com/v1/contacts/';
const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.HIGHLEVEL_API_KEY}`,
});

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

const CUSTOM_FIELD_IDS = {
	LOCATION: 'dm0MZZTsr5VzXMex6z2b',
	SOLUTION: 'fLo1zjZtmG5CoZvm0cNk',
	PREFERRED_SOLUTION: 'WR6IhvSzTLZspZitgdly',
	LEAD_LOCATION: '5mRFmkrDpSjPDfs7tjha',
	VIRTUAL_OFFICE_CHECKOUT: 'npzwzy1JwU0K35jCIajn',
	IS_PAYING_CLIENT: 'EFMFfbtbay7LwGjNOt8X',
	VIRTUAL_OFFICE_SOLUTION: 'Z3mq8bdg5Ew2GeSvliXn',
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default defineEventHandler(async (event) => {
    try {
        // Step 1: Read the request body
        const { checkoutData } = await readBody(event);

        // Step 2: Handle CRM operations
        await handle_crm(checkoutData);

        // Step 3: Get the Stripe checkout URL
        const checkoutURL = await getCheckoutURL(checkoutData);

        // Return the checkout URL
        return checkoutURL;
    } catch (error: any) {
        // Handle errors and return the error message
        return { error: error.message };
    }
});

async function getCheckoutURL(checkoutData: any) {
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
		success_url: "https://iconic-virtual-offices.vercel.app/",
		cancel_url: "https://iconic-virtual-offices.vercel.app/get-started",
	});

	return { url: session.url };
}

async function handleExistingUser(formData:any, userData:any) {
    const isPayingClient = userData.contacts[0].customField.find(
        (field:any) => field.id === CUSTOM_FIELD_IDS.IS_PAYING_CLIENT
    ).value === 'YES';
	
    if (isPayingClient) {
        console.log('User already exists and is a paying client.');
		throw new Error('User already exists and is paying client')
    } else {
        console.log('Non-paying client, updating...');
        const reqBody = buildUpdateRequestBody(formData);
        await updateContact(userData.contacts[0].id, reqBody);
        console.log('User updated!');
    }
}

function buildCreateRequestBody(formData:any) {
    return {
        type: 'lead',
        email: formData.contact.emailAddress,
        phone: formData.contact.phoneNumber,
        country: formData.billing.country,
        city: formData.billing.city,
        address1: formData.billing.streetAddress,
        companyName: formData.contact.companyName,
        state: formData.billing.stateProvince,
        postalCode: formData.billing.zipCode,
        lastName: formData.contact.lastName,
        firstName: formData.contact.firstName,
        customField: [
            { id: CUSTOM_FIELD_IDS.LOCATION, value: formData.location === 'Downtown' ? 'Downtown Miami' : 'Aventura Park Square' },
            { id: CUSTOM_FIELD_IDS.SOLUTION, value: 'Virtual Offices' },
            { id: CUSTOM_FIELD_IDS.PREFERRED_SOLUTION, value: 'Remote Office' },
            { id: CUSTOM_FIELD_IDS.LEAD_LOCATION, value: formData.location === 'Downtown' ? 'Downtown Miami' : 'Aventura' },
            { id: CUSTOM_FIELD_IDS.VIRTUAL_OFFICE_CHECKOUT, value: 'Did not complete' },
            { id: CUSTOM_FIELD_IDS.IS_PAYING_CLIENT, value: 'NO' },
            { id: CUSTOM_FIELD_IDS.VIRTUAL_OFFICE_SOLUTION, value: createVirtualOfficeSolution(formData) },
        ],
    };
}

function buildUpdateRequestBody(formData:any) {
    return {
        country: formData.billing.country,
        city: formData.billing.city,
        address1: formData.billing.streetAddress,
        companyName: formData.contact.companyName,
        state: formData.billing.stateProvince,
        postalCode: formData.billing.zipCode,
        lastName: formData.contact.lastName,
        firstName: formData.contact.firstName,
        customField: [
            { id: CUSTOM_FIELD_IDS.LOCATION, value: formData.location === 'Downtown' ? 'Downtown Miami' : 'Aventura Park Square' },
            { id: CUSTOM_FIELD_IDS.LEAD_LOCATION, value: formData.location === 'Downtown' ? 'Downtown Miami' : 'Aventura' },
            { id: CUSTOM_FIELD_IDS.VIRTUAL_OFFICE_SOLUTION, value: createVirtualOfficeSolution(formData) },
        ],
    };
}

async function handle_crm(formData:any) {
    try {
        // Fetch user by email or phone
        const contact = await fetchUserByEmailOrPhone(formData.contact.emailAddress, formData.contact.phoneNumber);

        if (contact) {
            console.log('User exists');
            await handleExistingUser(formData, { contacts: [contact] });
        } else {
            console.log('User not found, creating...');
            const reqBody = buildCreateRequestBody(formData);
			
            await createContact(reqBody);
            console.log('User created!');
        }

    } catch (error) {
        console.error('Error in main:', error);
		throw error
    }
}





async function fetchUserByEmailOrPhone(email:string, phone:string) {
    try {
        let contact = null;

        // Check by email
        if (email) {
            const emailResponse = await fetch(`${BASE_URL}lookup?email=${email}`, { headers });
			
            if (emailResponse.status === 200) {
                const emailData = await emailResponse.json();
				
                if (emailData.contacts && emailData.contacts.length > 0) {
                    contact = emailData.contacts[0]; // Found contact by email
                }
            }
        }

        // Check by phone if no contact was found by email
        if (!contact && phone) {
            const phoneResponse = await fetch(`${BASE_URL}lookup?phone=${phone}`, { headers });
			
            if (phoneResponse.status === 200) {
                const phoneData = await phoneResponse.json();
				
                if (phoneData.contacts && phoneData.contacts.length > 0) {
                    contact = phoneData.contacts[0]; // Found contact by phone
                }
            }
        }

        return contact; // Return the found contact or null if none found
		
    } catch (error) {
        console.error('Error fetching user by email or phone:', error);
        throw error;
    }
}

async function createContact(reqBody:any) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(reqBody),
        });
        return response;
    } catch (error) {
        console.error('Error creating contact:', error);
        throw error;
    }
}

async function updateContact(contactId:string, reqBody:any) {
    try {
        const response = await fetch(`${BASE_URL}/${contactId}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(reqBody),
        });
        return response;
    } catch (error) {
        console.error('Error updating contact:', error);
        throw error;
    }
}



function createVirtualOfficeSolution(formData:any) {
    let solution = `${formData.plan} ${formData.location} ${formData.duration}`;
    if (formData.addons) {
        solution += ' + Addons:';
        formData.addons.forEach((addon:any) => {
            solution += ` + ${addon.title} x${addon.quantity}`;
        });
    }
    return solution;
}