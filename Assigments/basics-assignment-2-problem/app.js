const app = Vue.createApp({
  data() {
    return {
      instantInput: '',
      enterInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Eggman is cool');
    },
    showInstantInput(e) {
      this.instantInput = e.target.value;
    },
    showEnterInput(e) {
      this.enterInput = e.target.value;
    },
  },
});

app.mount('#assignment');
