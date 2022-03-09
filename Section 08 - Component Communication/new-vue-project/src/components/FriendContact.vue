<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "&#9733;" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleIsFavorite">&#9733;</button>
    <button @click="$emit('delete-friend', id)">X</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props: ["info"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", "delete-friend"],
  /* emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
    },
  }, */
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleIsFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>