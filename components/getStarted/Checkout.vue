<template>
	<section class="checkout columnAlignCenter">
		<h1 class="w-full text-center">Let's launch your virtual office</h1>
		<Stepper
			v-model="currentStep"
			:value="currentStep"
			aria-labelledby="Checkout Stepper"
			class="w-full columnAlignCenter"
		>
			<StepList class="w-full">
				<Step v-for="step in 4" :key="step" :value="step"></Step>
			</StepList>
			<div class="w-full userCheckout columnAlignCenter">
				<StepPanels>
					<StepPanel :value="1">
						<div>
							<h2>Choose your plan duration</h2>
							<p>
								Choose from monthly, semi-annual, or annual
								plans
							</p>
						</div>
						<GetStartedStepsPlanDuration
							:selected-plan="selectedPlan"
							@plan-changed="handlePlanChange"
						/>
						<div class="rowCenter justify-content-end">
							<Button
								type="button"
								label="Next step"
								class="primaryButtonImportant"
								@click="currentStep++"
							>
								<template #icon>
									<Icon name="mingcute:arrow-right-line" />
								</template>
							</Button>
						</div>
					</StepPanel>
					<StepPanel :value="2">
						<div>
							<h2>Customize your plan</h2>
							<p>
								Upgrade your experience with our monthly add-on
								services.
							</p>
						</div>
						<GetStartedStepsCustomize
							@update-add-ons="updateAddOns"
						/>
						<div class="rowSpaceBetween">
							<Button class="back" @click="currentStep--">
								<template #icon>
									<Icon name="mingcute:arrow-left-line" />
								</template>
							</Button>
							<Button
								label="Next step"
								class="primaryButtonImportant"
								@click="currentStep++"
							>
								<template #icon>
									<Icon name="mingcute:arrow-right-line" />
								</template>
							</Button>
						</div>
					</StepPanel>
					<StepPanel :value="3">
						<div>
							<h2>Contact information</h2>
							<p>
								Provide the information of the person
								responsible for this order below
							</p>
						</div>
						<GetStartedStepsContactInformation
							@form-submit="handleFormSubmit"
							ref="contactForm"
							:showErrors="showErrors"
							:validateOnMount="true"
						/>
						<div>
							<h2>Billing address</h2>
							<p>
								Fill out the address associated with your card
							</p>
						</div>
						<GetStartedStepsBillingAddress
							@form-submit="handleFormSubmit"
							ref="billingForm"
							:showErrors="showErrors"
							:validateOnMount="true"
						/>
						<div class="rowSpaceBetween">
							<Button class="back" @click="currentStep--">
								<template #icon>
									<Icon name="mingcute:arrow-left-line" />
								</template>
							</Button>
							<Button
								label="Confirm order"
								class="primaryButtonImportant"
								@click="confirmOrder"
							>
								<template #icon>
									<Icon name="mingcute:arrow-right-line" />
								</template>
							</Button>
						</div>
					</StepPanel>
					<!-- <StepPanel :value="4">
						STRIPE
						<div class="rowSpaceBetween">
							<Button class="back" @click="currentStep--">
								<template #icon>
									<Icon name="mingcute:arrow-left-line" />
								</template>
							</Button>
							<Button
								label="Confirm order"
								class="primaryButtonImportant"
								@click="confirmOrder"
							/>
						</div>
					</StepPanel> -->
				</StepPanels>
				<GetStartedOrderSummary
					:duration-data="durationData"
					:addOns="addOns"
				/>
			</div>
		</Stepper>
	</section>
</template>

<script>
export default {
	props: {
		selectedPlan: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			currentStep: 1,
			durationData: {
				name: "Month-to-month",
				price: 0,
			},
			addOns: [],
			formsValid: {
				contactForm: false,
				billingForm: false,
			},
			isSubmitting: false,
			showErrors: false,
			contactData: null,
			billingData: null,
		};
	},
	methods: {
		handlePlanChange(data) {
			this.durationData = data;
		},
		updateAddOns(addOns) {
			this.addOns = addOns;
		},
		handleFormSubmit({ name, valid }, formData) {
			this.formsValid[name] = valid;
			if (name == "contactForm") {
				this.contactData = formData;
			} else {
				this.billingData = formData;
			}
		},
		async submitForms() {
			if (this.isSubmitting) return;
			this.isSubmitting = true;

			this.showErrors = true;

			try {
				const contactFormComponent = this.$refs.contactForm;
				const billingFormComponent = this.$refs.billingForm;

				if (!contactFormComponent || !billingFormComponent) return;

				const [contactResult, billingResult] = await Promise.all([
					contactFormComponent.validateForm(),
					billingFormComponent.validateForm(),
				]);

				await this.$nextTick();

				if (
					this.formsValid.contactForm &&
					this.formsValid.billingForm
				) {
					this.currentStep++;
					this.showErrors = false;
				} else {
					this.showErrors = true;
				}
			} finally {
				this.isSubmitting = false;
			}
		},
		confirmOrder() {
			this.$emit(
				"confirm-order",
				this.durationData,
				this.addOns,
				this.billingData,
				this.contactData
			);
		},
	},
};
</script>

<style>
.checkout .p-stepper {
	gap: 2rem;
}

.checkout .p-steplist {
	pointer-events: none;
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
	padding: 0.25rem;
}

.checkout .p-step-active .p-step-header,
.checkout .p-step:has(~ .p-step-active) .p-step-header {
	background: var(--color-light-blue);
	color: var(--color-white);
}

.checkout .p-step-number {
	color: var(--color-dark-gray);
	font-weight: 700;
	font-size: 1.125rem;
}

.checkout .p-step-active .p-step-number,
.checkout .p-step:has(~ .p-step-active) .p-step-number {
	color: var(--color-white);
}

.checkout .p-stepper-separator {
	height: 2px;
	background: var(--color-dark-gray);
}

.checkout .p-step:has(~ .p-step-active) .p-stepper-separator {
	background: var(--color-light-blue);
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

@media (width >=660px) {
	.checkout .p-step-header {
		width: 2.75rem;
		height: 2.75rem;
	}

	.checkout .p-step-number {
		font-size: 1.5rem;
	}

	.checkout .p-stepper-separator {
		height: 4px;
	}

	.checkout .p-steppanel h2 {
		margin-bottom: 0.5rem;
	}

	.checkout .p-steppanel {
		gap: 1.5rem;
	}

	.checkout .p-steppanel > div:last-of-type {
		margin-top: 0.5rem;
	}
}

@media (width >=1080px) {
	.checkout .p-step-header {
		width: 3.75rem;
		height: 3.75rem;
	}

	.checkout .p-step-number {
		font-size: 2rem;
	}

	.checkout .p-steppanel h2 {
		margin-bottom: 0.75rem;
	}

	.checkout .p-steppanel {
		gap: 2rem;
	}
}

@media (width >=1440px) {
	.checkout .p-step-header {
		width: 5rem;
		height: 5rem;
	}

	.checkout .p-step-number {
		font-size: 2.25rem;
	}
}
</style>

<style scoped>
.userCheckout {
	gap: 2rem;
}

.primaryButtonImportant {
	flex-direction: row-reverse;
	gap: 0.625rem;
}

.primaryButtonImportant span,
.back span {
	font-size: 1.5rem !important;
}

@media (width >=660px) {
	section {
		gap: 2rem;
	}

	h1 {
		text-align: start !important;
	}
}

@media (width >=1080px) {
	.userCheckout {
		flex-direction: row;
		align-items: flex-start;
		gap: 1.5rem;
	}

	.userCheckout > div:first-of-type {
		width: 60%;
	}

	.userCheckout > div:last-of-type {
		width: 40% !important;
	}

	.primaryButtonImportant span,
	.back span {
		font-size: 1.75rem !important;
	}
}

@media (width >=1440px) {
	.userCheckout {
		gap: 2rem;
	}

	.userCheckout > div:first-of-type {
		width: 75%;
	}

	.primaryButtonImportant span,
	.back span {
		font-size: 2rem !important;
	}
}
</style>
