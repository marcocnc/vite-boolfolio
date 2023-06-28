import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Posts from './pages/Posts.vue';
import Contacts from './pages/Contacts.vue';
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',

    routes : [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        }
    ]

});

export { router };