const app = Vue.createApp({
  data() {
    return {
      classA: '',
      classB: 'visible',
      visible: true,
      color: '',
    };
  },
  watch: {
    visible() {
      this.visible ? (this.classB = 'visible') : (this.classB = 'hidden');
    },
  },
  methods: {
    togleVisible() {
      this.visible = !this.visible;
    },
  },
});
app.mount('#assignment');
