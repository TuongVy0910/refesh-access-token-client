import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue";
import LoginPage from "./components/Login.vue";
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router