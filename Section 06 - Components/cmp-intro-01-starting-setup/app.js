const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'usagi ',
          name: 'Usagi Tsukino',
          phone: '(450) 405-6216',
          email: 'rabbit07@moon.jp',
        },
        {
          id: 'eggamn',
          name: 'Ivo Robotnick',
          phone: '(450) 867 9807',
          email: 'eggman@eggman-empire.egg',
        },
      ],
    };
  },
});

app.component('user-content', {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide Details' : 'Show Details'}}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone : </strong>{{friend.phone}}</li>
      <li><strong>Email : </strong>{{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 'usagi ',
        name: 'Usagi Tsukino',
        phone: '(450) 405-6216',
        email: 'rabbit07@moon.jp',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount('#app');
