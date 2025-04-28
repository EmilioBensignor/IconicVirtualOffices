<template>
	<Form
		@submit.prevent="validateForm"
		:initial-values="initialValues"
		:resolver="resolver"
		class="w-full column"
		ref="form"
	>
		<div class="formRow field">
			<div class="field">
				<label for="firstName"
					>First name <span class="text-red-500">*</span></label
				>
				<InputText
					id="firstName"
					name="firstName"
					type="text"
					placeholder="John"
					@input="validateField('firstName', $event.target.value)"
				/>
				<Message
					v-if="showErrors && formErrors?.firstName"
					severity="error"
					size="small"
					variant="simple"
				>
					{{ formErrors.firstName[0].message }}
				</Message>
			</div>
			<div class="field">
				<label for="lastName"
					>Last name <span class="text-red-500">*</span></label
				>
				<InputText
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Doe"
					@input="validateField('lastName', $event.target.value)"
				/>
				<Message
					v-if="showErrors && formErrors?.lastName"
					severity="error"
					size="small"
					variant="simple"
				>
					{{ formErrors.lastName[0].message }}
				</Message>
			</div>
		</div>

		<div class="formRow field">
			<div class="field">
				<label for="emailAddress"
					>Email address <span class="text-red-500">*</span></label
				>
				<InputText
					id="emailAddress"
					name="emailAddress"
					type="text"
					placeholder="yourname@example.com"
					@input="validateField('emailAddress', $event.target.value)"
				/>
				<Message
					v-if="showErrors && formErrors?.emailAddress"
					severity="error"
					size="small"
					variant="simple"
				>
					{{ formErrors.emailAddress[0].message }}
				</Message>
			</div>
			<div class="field">
				<label for="phoneNumber"
					>Phone number <span class="text-red-500">*</span></label
				>
				<InputText
					id="phoneNumber"
					name="phoneNumber"
					type="text"
					placeholder="+1 123 456 7890"
					@input="validateField('phoneNumber', $event.target.value)"
				/>
				<Message
					v-if="showErrors && formErrors?.phoneNumber"
					severity="error"
					size="small"
					variant="simple"
				>
					{{ formErrors.phoneNumber[0].message }}
				</Message>
			</div>
		</div>

		<div class="formRow field">
			<div class="field">
				<label for="companyName"
					>Company name <span class="text-red-500">*</span></label
				>
				<InputText
					id="companyName"
					name="companyName"
					type="text"
					placeholder="ABC Tech Solutions"
					@input="validateField('companyName', $event.target.value)"
				/>
				<Message
					v-if="showErrors && formErrors?.companyName"
					severity="error"
					size="small"
					variant="simple"
				>
					{{ formErrors.companyName[0].message }}
				</Message>
			</div>
		</div>
	</Form>
</template>

<script>
export default {
	name: "GetStartedStepsContactInformation",
	props: {
		showErrors: {
			type: Boolean,
			default: false,
		},
		validateOnMount: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			initialValues: {
				firstName: "",
				lastName: "",
				emailAddress: "",
				phoneNumber: "",
				companyName: "",
			},
			formErrors: null,
		};
	},
	mounted() {
		if (this.validateOnMount) {
			this.$nextTick(() => {
				this.validateForm();
			});
		}
	},
	methods: {
		validateField(fieldName, value) {
			if (this.showErrors) {
				const { errors } = this.resolver({ [fieldName]: value });
				this.formErrors = {
					...this.formErrors,
					[fieldName]: errors[fieldName],
				};
			}
		},
		async validateForm() {
			const formData = new FormData(this.$refs.form.$el);
			const values = Object.fromEntries(formData);
			const { errors } = this.resolver(values);

			this.formErrors = errors;

			const isValid = Object.keys(errors).length === 0;

			this.$emit(
				"form-submit",
				{
					name: "contactForm",
					valid: isValid,
				},
				values
			);

			return {
				isValid,
				errors,
			};
		},
		resolver(values) {
			const errors = {};

			if (!values.firstName) {
				errors.firstName = [{ message: "First name is required." }];
			} else if (values.firstName.length < 2) {
				errors.firstName = [
					{ message: "First name must be at least 2 characters." },
				];
			} else if (values.firstName.length > 50) {
				errors.firstName = [
					{ message: "First name must be at most 50 characters." },
				];
			} else if (!/^[a-zA-Z\s]*$/.test(values.firstName)) {
				errors.firstName = [
					{
						message:
							"First name must contain only letters and spaces.",
					},
				];
			} else if (!/^[a-zA-Z]/.test(values.firstName)) {
				errors.firstName = [
					{ message: "First name must start with a letter." },
				];
			} else if (!/[a-zA-Z]$/.test(values.firstName)) {
				errors.firstName = [
					{ message: "First name must end with a letter." },
				];
			}

			if (!values.lastName) {
				errors.lastName = [{ message: "Last name is required." }];
			} else if (values.lastName.length < 2) {
				errors.lastName = [
					{ message: "Last name must be at least 2 characters." },
				];
			} else if (values.lastName.length > 50) {
				errors.lastName = [
					{ message: "Last name must be at most 50 characters." },
				];
			} else if (!/^[a-zA-Z\s]*$/.test(values.lastName)) {
				errors.lastName = [
					{
						message:
							"Last name must contain only letters and spaces.",
					},
				];
			} else if (!/^[a-zA-Z]/.test(values.lastName)) {
				errors.lastName = [
					{ message: "Last name must start with a letter." },
				];
			} else if (!/[a-zA-Z]$/.test(values.lastName)) {
				errors.lastName = [
					{ message: "Last name must end with a letter." },
				];
			}

			if (!values.emailAddress) {
				errors.emailAddress = [
					{ message: "Email address is required." },
				];
			} else if (
				!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)
			) {
				errors.emailAddress = [
					{ message: "Email address must contain @ and . (dot)." },
				];
			} else if (values.emailAddress.length > 50) {
				errors.emailAddress = [
					{
						message:
							"Email address must be at most 50 characters long.",
					},
				];
			}

			if (!values.phoneNumber) {
				errors.phoneNumber = [{ message: "Phone number is required." }];
			} else if (!/^\+?[0-9\s]+$/.test(values.phoneNumber)) {
				errors.phoneNumber = [
					{
						message:
							"Phone number must contain only numbers and spaces.",
					},
				];
			} else if (values.phoneNumber.length > 20) {
				errors.phoneNumber = [
					{
						message:
							"Phone number must be at most 20 characters long.",
					},
				];
			}

			if (!values.companyName) {
				errors.companyName = [{ message: "Company name is required." }];
			} else if (values.companyName.length < 2) {
				errors.companyName = [
					{ message: "Company name must be at least 2 characters." },
				];
			} else if (values.companyName.length > 50) {
				errors.companyName = [
					{ message: "Company name must be at most 50 characters." },
				];
			} else if (!/^[a-zA-Z0-9\s]*$/.test(values.companyName)) {
				errors.companyName = [
					{
						message:
							"Company name must contain only letters, numbers, and spaces.",
					},
				];
			} else if (!/^[a-zA-Z0-9]/.test(values.companyName)) {
				errors.companyName = [
					{
						message:
							"Company name must start with a letter or number.",
					},
				];
			} else if (!/[a-zA-Z0-9]$/.test(values.companyName)) {
				errors.companyName = [
					{
						message:
							"Company name must end with a letter or number.",
					},
				];
			}

			return { errors };
		},
	},
};
</script>

<style scoped>
form {
	gap: 0.75rem;
}
</style>
