import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Posts from '../views/Posts.vue'
import store from '../store/index.js';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isLoggedIn']) {
        next({ name: 'Posts' });
      } else {
        next();
      }
    },
  },
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/user/:userid',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isLoggedIn']) {
        next({ name: 'Login' });
      } else {
        next();
      }
    },
  },
]

// noinspection JSCheckFunctionSignatures
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
