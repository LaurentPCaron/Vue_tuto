import { createApp } from 'vue';
import App from './App.vue';

import BaseCarte from './components/UI/BaseCarte.vue';
import BaseBouton from './components/UI/BaseBouton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-carte', BaseCarte);
app.component('base-bouton', BaseBouton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
