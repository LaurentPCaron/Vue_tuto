const app = Vue.createApp({
  data() {
    return {
      total: 0,
    };
  },
  watch: {
    showResult() {
      setTimeout(() => {
        this.total = 0;
      }, 5000);
    },
  },
  computed: {
    showResult() {
      if (this.total < 37) {
        return 'Not there yet';
      }
      if (this.total > 37) {
        return 'To much!';
      }
      return '37';
    },
  },
  methods: {
    addToTotal(value) {
      this.total += value;
    },
  },
});
app.mount('#assignment');
