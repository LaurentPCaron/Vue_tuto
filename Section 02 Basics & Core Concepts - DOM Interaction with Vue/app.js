

/* const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addEllement() {
    const newEl = document.createElement('li');
    newEl.textContent = inputEl.value;
    listEl.append(newEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addEllement); */

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}
).mount('#app');;