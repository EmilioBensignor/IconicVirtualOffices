<template>
  <Form v-slot="$form" :resolver="resolver" :validateOnValueUpdate="false" :validateOnBlur="true" class="w-full column"
    @submit="onFormSubmit">
    <div class="formRow field">
      <div class="field">
        <label for="streetAddress">Street address</label>
        <InputText id="streetAddress" name="streetAddress" type="text" placeholder="123 Main St" />
        <Message v-if="showErrors && $form.streetAddress?.invalid" severity="error" size="small" variant="simple">{{
          $form.streetAddress.error.message }}</Message>
      </div>
      <div class="field">
        <label for="city">City</label>
        <InputText id="city" name="city" type="text" placeholder="New York" />
        <Message v-if="showErrors && $form.city?.invalid" severity="error" size="small" variant="simple">{{
          $form.city.error.message }}</Message>
      </div>
    </div>
    <div class="stateZip">
      <div>
        <div class="field">
          <label for="stateProvince">State/Province</label>
          <InputText id="stateProvince" name="stateProvince" type="text" placeholder="NY" />
        </div>
        <div class="field">
          <label for="zipCode">Zip Code</label>
          <InputText id="zipCode" name="zipCode" type="text" placeholder="90210" />
        </div>
      </div>
      <Message v-if="showErrors && $form.stateProvince?.invalid" severity="error" size="small" variant="simple">{{
        $form.stateProvince.error.message }}</Message>
      <Message v-if="showErrors && $form.zipCode?.invalid" severity="error" size="small" variant="simple">{{
        $form.zipCode.error.message }}</Message>
    </div>
    <div class="formRow field">
      <div class="field">
        <label for="country">Country</label>
        <InputText id="country" name="country" type="text" placeholder="United States" autocomplete="country" />
        <Message v-if="showErrors && $form.country?.invalid" severity="error" size="small" variant="simple">{{
          $form.country.error.message }}</Message>
      </div>
    </div>
  </Form>
</template>

<script>
export default {
  props: {
    showErrors: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      initialValues: {
        streetAddress: '',
        city: '',
        stateProvince: '',
        zipCode: '',
        country: ''
      }
    };
  },
  methods: {
    resolver({ values }) {
      const errors = {};

      if (!values.streetAddress) {
        errors.streetAddress = [{ message: 'Street address is required.' }];
      } else if (values.streetAddress.length < 2) {
        errors.streetAddress = [{ message: 'Street address must be at least 2 characters.' }];
      } else if (values.streetAddress.length > 50) {
        errors.streetAddress = [{ message: 'Street address must be at most 50 characters.' }];
      }

      if (!values.city) {
        errors.city = [{ message: 'City is required.' }];
      } else if (values.city.length < 2) {
        errors.city = [{ message: 'City must be at least 2 characters.' }];
      } else if (values.city.length > 50) {
        errors.city = [{ message: 'City must be at most 50 characters.' }];
      }

      if (!values.stateProvince) {
        errors.stateProvince = [{ message: 'State/Province is required.' }];
      } else if (values.stateProvince.length < 2) {
        errors.stateProvince = [{ message: 'State/Province must be at least 2 characters.' }];
      } else if (values.stateProvince.length > 50) {
        errors.stateProvince = [{ message: 'State/Province must be at most 50 characters.' }];
      }

      if (!values.zipCode) {
        errors.zipCode = [{ message: 'Zip Code is required.' }];
      } else if (values.zipCode.length < 2) {
        errors.zipCode = [{ message: 'Zip Code must be at least 2 characters.' }];
      } else if (values.zipCode.length > 20) {
        errors.zipCode = [{ message: 'Zip Code must be at most 20 characters.' }];
      } else if (!/^[0-9]*$/.test(values.zipCode)) {
        errors.zipCode = [{ message: 'Zip Code must contain only numbers.' }];
      } else if (!/^[0-9]/.test(values.zipCode)) {
        errors.zipCode = [{ message: 'Zip Code must start with a number.' }];
      } else if (!/[0-9]$/.test(values.zipCode)) {
        errors.zipCode = [{ message: 'Zip Code must end with a number.' }];
      }

      if (!values.country) {
        errors.country = [{ message: 'Country is required.' }];
      } else if (values.country.length < 2) {
        errors.country = [{ message: 'Country must be at least 2 characters.' }];
      } else if (values.country.length > 50) {
        errors.country = [{ message: 'Country must be at most 50 characters.' }];
      } else if (!/^[a-zA-Z\s]*$/.test(values.country)) {
        errors.country = [{ message: 'Country must contain only letters and spaces.' }];
      } else if (!/^[a-zA-Z]/.test(values.country)) {
        errors.country = [{ message: 'Country must start with a letter.' }];
      } else if (!/[a-zA-Z]$/.test(values.country)) {
        errors.country = [{ message: 'Country must end with a letter.' }];
      }

      return {
        errors
      };
    },
    onFormSubmit(event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      this.$emit('form-submit', { name: 'billingForm', valid: !Object.keys(this.$form.errors).length });
    }
  }
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