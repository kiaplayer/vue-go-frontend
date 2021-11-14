<template>
  <div class="container">
    <h1>{{ user.username }}</h1>
    <p>{{ user.description }}</p>
    <post-list :posts="posts" title="Last Posts">
    </post-list>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
export default {
  components: {
    PostList,
  },
  data() {
    return {
      user: {
        username: 'idalmasso',
        description: 'This is only a little description',
      },
      posts: [
        {
          id: 1,
          user: 'mycurrentuser',
          date: '2021-01-19 15:30:30',
          post: 'Today I\'m feeling sooooo well.',
          comments: [
            {
              id: 3,
              user: 'Nostradamus',
              date: '2021-01-20 20:30:34',
              post: 'LOL',
            },
            {
              id: 4,
              user: 'FinnishMan',
              date: '2021-01-20 20:30:34',
              post: 'Please...',
            },
          ],
        },
        {
          id: 2,
          user: 'cshannon',
          date: '2021-01-19 15:25:20',
          post: 'I think that I love giraffes',
          comments: [
            {
              id: 5,
              user: 'Ally',
              date: '2021-01-23 13:30:34',
              post: 'Thanks',
            },
            {
              id: 6,
              user: 'Stranger',
              date: '2021-01-24 16:20:44',
              post: 'Nice article, dude!',
            },
          ],
        },
      ],
    };
  },
};
</script>
