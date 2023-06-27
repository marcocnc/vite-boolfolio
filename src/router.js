import { createRouter, createWebHistory } from 'vue-router';

const route = ({
    history: createWebHistory(),

    routes : [
        {
            path: '/',
            name: 'home'
        },
    ]

});