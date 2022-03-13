<template>
  <form action="" @submit.prevent="onUserSubmit">
    <label for="name-input">Name: </label>
    <input type="text" name="name" id="name-input" v-model="nameInput" />
    <label for="age-iunput">Age: </label>
    <input type="number" name="age" id="age-input" v-model="ageInput" />
    <button>New User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameInput: "Laurent",
      ageInput: "31",
    };
  },

  emits: ["get-new-user"],

  beforeMount() {
    this.$emit("get-new-user", this.nameInput, this.ageInput);
  },
  methods: {
    onUserSubmit() {
      this.$emit("get-new-user", this.nameInput, this.ageInput);
    },
  },
};
</script>

<style>
</style>