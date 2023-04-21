<template>
  <div>
    <h1 class="contact-title">Contact Us</h1>
    <p class="contact-descrip">Have a question or comment about our travel blog? Want to share your own travel experiences or collaborate with us? We'd love to hear from you! Please fill out the contact form below and we'll get back to you as soon as possible. Thank you for your interest in our travel community.</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    submitForm() {
      // Add code here to handle form submission
    },
  },
};
</script>

<style scoped>
.contact-title {
  padding: 1em 0 0 1em;
}

.contact-descrip {
  padding: 0 0 1em 45px;
}

form {
  padding-left: 3em;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
}

label {
  font-weight: bold;
  padding-bottom: 0.5em;
}

input[type="text"],
input[type="email"],
textarea {
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 5em;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5em;
}
</style>



</style>