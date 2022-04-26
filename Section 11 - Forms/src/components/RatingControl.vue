<template>
  <ul>
    <li :class="{ active: modelValue === 'boff' }">
      <button type="button" @click="activate('boff')">Boff</button>
    </li>
    <li :class="{ active: modelValue === 'ehhh' }">
      <button type="button" @click="activate('ehhh')">Ehhh</button>
    </li>
    <li :class="{ active: modelValue === 'mehh' }">
      <button type="button" @click="activate('mehh')">Mehh</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  /* data() {
    return {
      activeOption: this.modelValue,
    };
  }, */

  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>