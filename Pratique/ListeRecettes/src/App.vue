<template>
  <TheHeader></TheHeader>
  <the-recettes></the-recettes>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheRecettes from "./components/recettes/TheRecettes.vue";
export default {
  components: { TheHeader, TheRecettes },
};
</script>

<style lang="scss" >
* {
  margin: 0;
}
</style>