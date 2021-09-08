import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import MainGame from "@/views/MainGame.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '*',
        name: 'MainGame',
        component: MainGame,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
