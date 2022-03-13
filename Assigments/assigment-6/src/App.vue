<template>
  <div>
    <active-user :name="userName" :age="userAge"></active-user>
    <user-data @get-new-user="addNewUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    addNewUser(name, age) {
      this.userName = name;
      this.userAge = age;
    },
  },
};
</script>

<style>
</style>