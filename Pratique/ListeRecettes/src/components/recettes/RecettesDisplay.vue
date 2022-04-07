<template>
  <ul>
    <recette
      v-for="rec in lesRecettes"
      :key="rec.id"
      :id="rec.id"
      :titre="rec.titre"
      :description="rec.description"
      :srcImage="rec.srcImage"
    ></recette>
  </ul>
</template>

<script>
import Recette from "./Recette.vue";
export default {
  components: { Recette },
  inject: ["lesRecettes"],
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>