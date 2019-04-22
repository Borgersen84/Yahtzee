import Home from './components/Home.vue';
import Game from './components/Game.vue';
import End from './components/End.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/game', component: Game},
    {path: '/end', component: End}
];