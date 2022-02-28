const app = Vue.createApp({
  data() {
    return {
      enterdGoalValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterdGoalValue);
      this.enterdGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
