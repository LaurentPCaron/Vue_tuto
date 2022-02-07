const app = Vue.createApp({
  data() {
    return {
      name: 'Laurent',
      age: 30,
      imageUrl:
        'https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes.png',
      defaultValue: 'Fart',
    };
  },
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * 100);
    },
  },
});

app.mount('#assignment');
