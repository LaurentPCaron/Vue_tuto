const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      nameShowing: '',
      //fullname: '',
    };
  },
  watch: {
    /* name(value) {
      value
        ? (this.fullname = `${value} ${this.lastName}`)
        : (this.fullname = '');
    },
    lastName(value) {
      value ? (this.fullname = ` ${this.name} ${value}`) : (this.fullname = '');
    }, */
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName == '') {
        return '';
      }
      return `${this.name} ${this.lastName}`;
    },
  },
  methods: {
    add(value) {
      this.counter += value;
    },
    reduce(value) {
      this.counter -= value;
    },
    resetInput() {
      this.name = '';
      this.nameShowing = '';
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      this.nameShowing = this.name;
    },
  },
});

app.mount('#events');
