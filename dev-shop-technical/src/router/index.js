import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import TutorBrowse from '../views/TutorBrowse.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tutorbrowse',
            name: 'tutorbrowse',
            component: TutorBrowse
        },
        {
            path: '/',
            name: 'unwired',
            component: Home
        },
    ]
});

export default router;