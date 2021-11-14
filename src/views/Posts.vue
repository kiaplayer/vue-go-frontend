<template>
  <div class="posts">
    <h1>All Posts</h1>
    <add-text-form
        textRequest="Add Post"
        v-if="loggedIn"
        :showLabel="true"
        @text-added="addPost"
    ></add-text-form>
    <post-list :posts="posts" title="" />
  </div>
</template>

<script>
import AddTextForm from '../components/AddTextForm.vue';
import PostList from '../components/PostList.vue';
import {mapGetters} from 'vuex';
export default
{
  name: 'Posts',
  components: {
    AddTextForm,
    PostList,
  },
  computed: {
    posts() {
      return this.$store.getters['posts/allPosts'];
    },
    ...mapGetters({
      loggedIn: 'auth/isLoggedIn',
    }),
  },
  methods: {
    addPost(text) {
      this.$store.dispatch('posts/addPost', {
        user: this.$store.getters['auth/currentUser'].username,
        post: text
      });
    }
  }
};
</script>
