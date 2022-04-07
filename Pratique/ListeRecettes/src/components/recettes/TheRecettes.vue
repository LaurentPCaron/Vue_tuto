<template>
  <div class="boutons-nav">
    <base-bouton
      :mode="`group--left ${modeShowRecettes}`"
      @click="changeView(`recettes-display`)"
      >Les recettes</base-bouton
    >
    <base-bouton
      :mode="`group--right ${modeAddRecette}`"
      @click="changeView(`recette-add`)"
      >Ajouter une recette</base-bouton
    >
  </div>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</template>

<script>
import BaseBouton from "../UI/BaseBouton.vue";
import BaseCarte from "../UI/BaseCarte.vue";
import RecetteAdd from "./RecetteAdd.vue";
import RecettesDisplay from "./RecettesDisplay.vue";
export default {
  components: { RecettesDisplay, BaseCarte, BaseBouton, RecetteAdd },
  data() {
    return {
      view: "recettes-display",
      recetteBD: [
        {
          id: 1,
          titre: "Curry japonais",
          description:
            "Le curry japonais (カレー, karē) parfois appelé karī (カリー) est l'un des plats les plus populaires au Japon. On a l'habitude de le servir sous trois formes principales : le riz au curry (カレーライス, karēraisu), le karē udon (des nouilles épaisses) et le karē-pan (du pain fourré). Il est habituellement plus épais et a un goût plus doux et moins épicé que son équivalent indien.",
          srcImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Beef_curry_rice_003.jpg/1024px-Beef_curry_rice_003.jpg",
        },
        {
          id: 2,
          titre: "Poutine",
          description:
            "La poutine est un plat de la cuisine québécoise composé, dans sa forme classique, de trois éléments : des frites, du fromage en grains et de la sauce brune1. La poutine tire son origine du Centre-du-Québec à la fin des années 1950.",
          srcImage:
            "https://journalmetro.com/wp-content/uploads/2021/06/129011536_m.jpg?w=980",
        },
      ],
    };
  },

  provide() {
    return {
      lesRecettes: this.recetteBD,
      deleteARecette: this.deleteARecette,
      addARecette: this.addARecette,
    };
  },

  computed: {
    modeShowRecettes() {
      return this.view === "recettes-display" ? "pushed" : "";
    },
    modeAddRecette() {
      return this.view === "recette-add" ? "pushed" : "";
    },
  },

  methods: {
    addARecette(titre, description, srcImage) {
      const newRecette = {
        id: new Date().toISOString(),
        titre,
        description,
        srcImage,
      };

      this.recetteBD.push(newRecette);
      this.changeView("recettes-display");
    },
    deleteARecette(recetteId) {
      const recetteIndex = this.recetteBD.findIndex(
        (item) => item.id === recetteId
      );
      this.recetteBD.splice(recetteIndex, 1);
    },

    changeView(viewName) {
      this.view = viewName;
    },
  },
};
</script>

<style lang="scss" scoped>
.boutons-nav {
  display: flex;

  justify-content: center;
}
</style>