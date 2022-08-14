<script lang="ts" setup>
import SocialMediaIcons from './social-media-icons.vue';
</script>
<template>
  <q-toolbar-title
    @click="$router.push('/')"
    class="flex items-center cursor-pointer"
  >
    <q-avatar class="q-mr-sm">
      <img
        loading="lazy"
        width="50"
        alt="jozaguts.dev logo"
        src="~/assets/code.png"
      />
    </q-avatar>
    <h1 class="text-h5 underline-animated">Jozaguts</h1>
    <SocialMediaIcons />
  </q-toolbar-title>
</template>

<style scoped></style>
