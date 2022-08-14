<script lang="ts" setup>
import { usePosts } from 'src/services/posts';
const { posts } = usePosts();
</script>
<template>
  <div class="row">adsds
    <div class="col-md-4" v-for="post in posts" :key="post.id">{{ post }}</div>
  </div>
</template>
