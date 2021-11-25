const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Get good at Touhou',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return;
            }
        }
    }
});

app.mount('#user-goal');