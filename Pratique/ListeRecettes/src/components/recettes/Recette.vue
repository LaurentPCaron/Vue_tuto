<template>
  <li>
    <base-carte class="carte">
      <h2>{{ titre }}</h2>
      <p>{{ description }}</p>
      <img :src="srcImage" :alt="titre" />
      <base-bouton @click="deleteARecette(id)">Effacer</base-bouton>
    </base-carte>
  </li>
</template>

<script>
export default {
  props: ["id", "titre", "description", "srcImage"],
  inject: ["deleteARecette"],
};
</script>

<style lang="scss" scoped>
.carte {
  display: grid;
  grid-template-columns: 80% 20%;
  & h2 {
    grid-column: span 2;

    margin-bottom: 0.5rem;

    text-align: center;

    width: 100%;
  }

  & img {
    grid-column: 2 / 3;
    grid-row: span 2;

    padding-left: 1.2rem;

    width: 90%;
  }
}
</style>