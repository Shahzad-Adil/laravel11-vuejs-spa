import './bootstrap';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import PostsIndex from './components/Posts/Index.vue'
import PostsCreate from './components/Posts/Create.vue'
import App from './layouts/App.vue'

const routes = [
    { path: '/', component: PostsIndex },
    { path: '/posts/create', component: PostsCreate },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
