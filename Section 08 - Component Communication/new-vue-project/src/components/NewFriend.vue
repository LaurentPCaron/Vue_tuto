<template>
  <div>
    <form action="" @submit.prevent="getFriendValue">
      <div>
        <label for="input-name">Name:</label>
        <input
          id="input-name"
          v-model="nameInput"
          type="text"
          name="name"
          required
        />
      </div>
      <div>
        <label for="input-phone">Phone:</label>
        <input
          id="input-phone"
          v-model="phoneInput"
          type="tel"
          name="phone"
          required
        />
      </div>
      <div>
        <label for="input-email">Email:</label>
        <input
          id="input-email"
          v-model="emailInput"
          type="email"
          name="email"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameImnput: "",
      phoneInput: "",
      emailInput: "",
    };
  },
  emits: ["getFriendInfo"],
  methods: {
    getFriendValue(e) {
      const name = e.target.elements.name.value;
      const phone = e.target.elements.phone.value;
      const email = e.target.elements.email.value;

      this.nameInnput = "";
      this.phoneInput = "";
      this.emailInput = "";

      this.$emit("getFriendInfo", name, phone, email);
    },
  },
};
</script>
