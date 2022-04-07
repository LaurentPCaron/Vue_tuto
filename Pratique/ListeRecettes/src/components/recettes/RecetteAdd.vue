<template>
  <base-dialog v-if="formIsInvalid" title="Erreur" @close="confirmError">
    <template #default>
      <p>L'un des champs est invalide</p>
      <p>Vérifiez vos donnée.</p>
    </template>
    <template #actions>
      <base-bouton @click="confirmError">Ok</base-bouton>
    </template>
  </base-dialog>
  <base-carte>
    <form @submit.prevent="submitForm">
      <div class="form-element">
        <label for="input-titre">Titre:</label>
        <input id="input-titre" type="text" name="titre" ref="titreRef" />
      </div>

      <div class="form-element">
        <label for="input-description">Description:</label>
        <textarea
          id="input-description"
          name="description"
          rows="3"
          ref="descriptionRef"
        />
      </div>

      <div class="form-element">
        <label for="input-image">Image:</label>
        <input id="input-image" type="text" name="image" ref="imageRef" />
      </div>

      <base-bouton type="submit">Ajouter</base-bouton>
    </form>
  </base-carte>
</template>

<script>
export default {
  inject: ["addARecette"],
  data() {
    return {
      formIsInvalid: false,
    };
  },

  methods: {
    submitForm() {
      const inputTitle = this.$refs.titreRef.value;
      const inputDescription = this.$refs.descriptionRef.value;
      const inputImage = this.$refs.imageRef.value;

      if (
        inputTitle.trim() === "" ||
        inputDescription.trim() == "" ||
        inputImage.trim() === ""
      ) {
        this.formIsInvalid = true;
        return;
      }

      this.addARecette(inputTitle, inputDescription, inputImage);
    },

    confirmError() {
      this.formIsInvalid = false;
    },
  },
};
</script>

<style lang="scss">
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #000000;
  background-color: #eec9b0;
}
</style>