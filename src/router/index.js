import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// noinspection JSCheckFunctionSignatures
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
