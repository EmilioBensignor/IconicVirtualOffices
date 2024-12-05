<template>
  <Form v-slot="$form" :resolver="resolver" :validateOnValueUpdate="false" :validateOnBlur="true" class="w-full column"
    @submit="onFormSubmit">
    <div class="formRow field">
      <div class="field">
        <label for="firstName">First name</label>
        <InputText id="firstName" name="firstName" type="text" placeholder="John" />
        <Message v-if="showErrors && $form.firstName?.invalid" severity="error" size="small" variant="simple">{{
          $form.firstName.error.message }}</Message>
      </div>
      <div class="field">
        <label for="lastName">Last name</label>
        <InputText id="lastName" name="lastName" type="text" placeholder="Doe" />
        <Message v-if="showErrors && $form.lastName?.invalid" severity="error" size="small" variant="simple">{{
          $form.lastName.error.message }}</Message>
      </div>
    </div>
    <div class="formRow field">
      <div class="field">
        <label for="emailAddress">Email address</label>
        <InputText id="emailAddress" name="emailAddress" type="text" placeholder="yourname@example.com" />
        <Message v-if="showErrors && $form.emailAddress?.invalid" severity="error" size="small" variant="simple">{{
          $form.emailAddress.error.message }}</Message>
      </div>
      <div class="field">
        <label for="phoneNumber">Phone number</label>
        <InputText id="phoneNumber" name="phoneNumber" type="text" placeholder="+1 123 456 7890" />
        <Message v-if="showErrors && $form.phoneNumber?.invalid" severity="error" size="small" variant="simple">{{
          $form.phoneNumber.error.message }}</Message>
      </div>
    </div>
    <di class="formRow field">
      <div class="field">
        <label for="companyName">Company name</label>
        <InputText id="companyName" name="companyName" type="text" placeholder="ABC Tech Solutions" />
        <Message v-if="showErrors && $form.companyName?.invalid" severity="error" size="small" variant="simple">{{
          $form.companyName.error.message }}</Message>
      </div>
    </di>
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
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        companyName: ''
      }
    };
  },
  methods: {
    resolver({ values }) {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = [{ message: 'First name is required.' }];
      } else if (values.firstName.length < 2) {
        errors.firstName = [{ message: 'First name must be at least 2 characters.' }];
      } else if (values.firstName.length > 50) {
        errors.firstName = [{ message: 'First name must be at most 50 characters.' }];
      } else if (!/^[a-zA-Z\s]*$/.test(values.firstName)) {
        errors.firstName = [{ message: 'First name must contain only letters and spaces.' }];
      } else if (!/^[a-zA-Z]/.test(values.firstName)) {
        errors.firstName = [{ message: 'First name must start with a letter.' }];
      } else if (!/[a-zA-Z]$/.test(values.firstName)) {
        errors.firstName = [{ message: 'First name must end with a letter.' }];
      }

      if (!values.lastName) {
        errors.lastName = [{ message: 'Last name is required.' }];
      } else if (values.lastName.length < 2) {
        errors.lastName = [{ message: 'Last name must be at least 2 characters.' }];
      } else if (values.lastName.length > 50) {
        errors.lastName = [{ message: 'Last name must be at most 50 characters.' }];
      } else if (!/^[a-zA-Z\s]*$/.test(values.lastName)) {
        errors.lastName = [{ message: 'Last name must contain only letters and spaces.' }];
      } else if (!/^[a-zA-Z]/.test(values.lastName)) {
        errors.lastName = [{ message: 'Last name must start with a letter.' }];
      } else if (!/[a-zA-Z]$/.test(values.lastName)) {
        errors.lastName = [{ message: 'Last name must end with a letter.' }];
      }

      if (!values.emailAddress) {
        errors.emailAddress = [{ message: 'Email address is required.' }];
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
        errors.emailAddress = [{ message: 'Email address must containt @ and . (dot).' }];
      } else if (values.emailAddress.length > 50) {
        errors.emailAddress = [{ message: 'Email address must be at most 50 characters long.' }];
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = [{ message: 'Phone number is required.' }];
      } else if (!/^\+?[0-9\s]+$/.test(values.phoneNumber)) {
        errors.phoneNumber = [{ message: 'Phone number must contain only numbers and spaces.' }];
      } else if (values.phoneNumber.length > 20) {
        errors.phoneNumber = [{ message: 'Phone number must be at most 20 characters long.' }];
      }

      if (!values.companyName) {
        errors.companyName = [{ message: 'Company name is required.' }];
      } else if (values.companyName.length < 2) {
        errors.companyName = [{ message: 'Company name must be at least 2 characters.' }];
      } else if (values.companyName.length > 50) {
        errors.companyName = [{ message: 'Company name must be at most 50 characters.' }];
      } else if (!/^[a-zA-Z0-9\s]*$/.test(values.companyName)) {
        errors.companyName = [{ message: 'Company name must contain only letters, numbers, and spaces.' }];
      } else if (!/^[a-zA-Z0-9]/.test(values.companyName)) {
        errors.companyName = [{ message: 'Company name must start with a letter or number.' }];
      } else if (!/[a-zA-Z0-9]$/.test(values.companyName)) {
        errors.companyName = [{ message: 'Company name must end with a letter or number.' }];
      }

      return {
        errors
      };
    },
    onFormSubmit(event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      this.$emit('form-submit', { name: 'contactForm', valid: !Object.keys(this.$form.errors).length });
    }
  }
};
</script>

<style scoped>
form {
  gap: 0.75rem;
}
</style>