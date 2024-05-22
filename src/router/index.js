import { createRouter, createWebHistory } from "vue-router";
import Welcome from '../App.vue';
import Register from '../components/Register.vue';
import ListUser from '../components/ListUser.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../components/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/listUser',
        name: 'ListUser',
        component: ListUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;