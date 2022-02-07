const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(value) {
      this.counter += value;
    },
    reduce(value) {
      this.counter -= value;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm(e) {
      e.preventDefault();
      alert('Big penis');
    },
  },
});

app.mount('#events');
