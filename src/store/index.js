import { createStore } from 'vuex'

import authModule from './authStore/index.js';
import postsModule from './postStore/index.js';
import usersModule from './userStore/index.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: authModule,
    posts: postsModule,
    users: usersModule,
  }
})
