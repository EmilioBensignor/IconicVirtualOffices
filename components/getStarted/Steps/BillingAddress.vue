<template>
  <Form
    @submit.prevent="validateForm"
    :initial-values="initialValues"
    :resolver="resolver"
    class="w-full column"
  >
    <div class="formRow field">
      <div class="field">
        <label for="streetAddress"
          >Street address <span class="text-red-500">*</span></label
        >
        <InputText
          id="streetAddress"
          name="streetAddress"
          type="text"
          placeholder="123 Main St"
          @input="validateField('streetAddress', $event.target.value)"
        />
        <Message
          v-if="showErrors && formErrors?.streetAddress"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ formErrors.streetAddress[0].message }}
        </Message>
      </div>
      <div class="field">
        <label for="city">City <span class="text-red-500">*</span></label>
        <InputText
          id="city"
          name="city"
          type="text"
          placeholder="New York"
          @input="validateField('city', $event.target.value)"
        />
        <Message
          v-if="showErrors && formErrors?.city"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ formErrors.city[0].message }}
        </Message>
      </div>
    </div>

    <div class="stateZip">
      <div>
        <div class="field">
          <label for="stateProvince"
            >State/Province <span class="text-red-500">*</span></label
          >
          <InputText
            id="stateProvince"
            name="stateProvince"
            type="text"
            placeholder="NY"
            @input="validateField('stateProvince', $event.target.value)"
          />
          <Message
            v-if="showErrors && formErrors?.stateProvince"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ formErrors.stateProvince[0].message }}
          </Message>
        </div>
        <div class="field">
          <label for="zipCode"
            >Zip Code <span class="text-red-500">*</span></label
          >
          <InputText
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="90210"
            @input="validateField('zipCode', $event.target.value)"
          />
          <Message
            v-if="showErrors && formErrors?.zipCode"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ formErrors.zipCode[0].message }}
          </Message>
        </div>
      </div>
    </div>

    <div class="formRow field">
      <div class="field">
        <label for="country">Country <span class="text-red-500">*</span></label>
        <InputText
          id="country"
          name="country"
          type="text"
          placeholder="United States"
          autocomplete="country"
          @input="validateField('country', $event.target.value)"
        />
        <Message
          v-if="showErrors && formErrors?.country"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ formErrors.country[0].message }}
        </Message>
      </div>
    </div>
  </Form>
</template>

<script>
export default {
  name: "GetStartedStepsBillingAddress",
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
        streetAddress: "",
        city: "",
        stateProvince: "",
        zipCode: "",
        country: "",
      },
      formErrors: null,
    };
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
      const formData = new FormData(this.$el);
      const values = Object.fromEntries(formData);
      const { errors } = this.resolver(values);

      this.formErrors = errors;

      const isValid = Object.keys(errors).length === 0;

      this.$emit("form-submit", {
        name: "billingForm",
        valid: isValid,
      });

      return {
        isValid,
        errors,
      };
    },
    resolver(values) {
      const errors = {};

      if (!values.streetAddress) {
        errors.streetAddress = [{ message: "Street address is required." }];
      } else if (values.streetAddress.length < 2) {
        errors.streetAddress = [
          { message: "Street address must be at least 2 characters." },
        ];
      } else if (values.streetAddress.length > 50) {
        errors.streetAddress = [
          { message: "Street address must be at most 50 characters." },
        ];
      }

      if (!values.city) {
        errors.city = [{ message: "City is required." }];
      } else if (values.city.length < 2) {
        errors.city = [{ message: "City must be at least 2 characters." }];
      } else if (values.city.length > 50) {
        errors.city = [{ message: "City must be at most 50 characters." }];
      }

      if (!values.stateProvince) {
        errors.stateProvince = [{ message: "State/Province is required." }];
      } else if (values.stateProvince.length < 2) {
        errors.stateProvince = [
          { message: "State/Province must be at least 2 characters." },
        ];
      } else if (values.stateProvince.length > 50) {
        errors.stateProvince = [
          { message: "State/Province must be at most 50 characters." },
        ];
      }

      if (!values.zipCode) {
        errors.zipCode = [{ message: "Zip Code is required." }];
      } else if (values.zipCode.length < 2) {
        errors.zipCode = [
          { message: "Zip Code must be at least 2 characters." },
        ];
      } else if (values.zipCode.length > 20) {
        errors.zipCode = [
          { message: "Zip Code must be at most 20 characters." },
        ];
      } else if (!/^[0-9]*$/.test(values.zipCode)) {
        errors.zipCode = [{ message: "Zip Code must contain only numbers." }];
      }

      if (!values.country) {
        errors.country = [{ message: "Country is required." }];
      } else if (values.country.length < 2) {
        errors.country = [
          { message: "Country must be at least 2 characters." },
        ];
      } else if (values.country.length > 50) {
        errors.country = [
          { message: "Country must be at most 50 characters." },
        ];
      } else if (!/^[a-zA-Z\s]*$/.test(values.country)) {
        errors.country = [
          { message: "Country must contain only letters and spaces." },
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

.stateZip {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin: 0;
}

.stateZip div {
  width: 100%;
  display: flex;
  gap: 0.375rem;
  margin: 0;
}

.stateZip div div:first-of-type {
  width: 77.5%;
}

.stateZip div div:last-of-type {
  width: 22.5%;
}

@media (width >=660px) {
  .stateZip > div {
    gap: 1rem;
  }

  .stateZip div div:first-of-type,
  .stateZip div div:last-of-type {
    width: 50%;
  }
}
</style>
