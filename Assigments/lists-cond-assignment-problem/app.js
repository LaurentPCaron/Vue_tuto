const app = Vue.createApp({
  data() {
    return {
      taskInput: '',
      tasks: [],
      taskIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = '';
    },
    toggleList() {
      this.taskIsVisible = !this.taskIsVisible;
    },
  },
});

app.mount('#assignment');
