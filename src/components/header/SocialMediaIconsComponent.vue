<script setup lang="ts">
import { Icon } from 'src/components/interfaces';

const icons: Icon[] = [
  {
    href: 'https://twitter.com/jozaguts',
    name: 'mdi-twitter',
  },
  {
    href: 'https://github.com/Jozaguts',
    name: 'mdi-github',
  },
  {
    href: 'https://www.linkedin.com/in/jozaguts/',
    name: 'mdi-linkedin',
  },
  {
    href: 'mailto:contact@jozaguts.dev',
    name: 'mdi-email',
  },
];
</script>

<template>
  <div>
    <q-btn
      v-for="icon in icons"
      :key="icon.name"
      round
      unelevated
      class="mx-sm"
      :href="icon.href"
      target="_blank"
    >
      <q-icon :name="icon.name" size="1.5rem"></q-icon>
    </q-btn>
  </div>
</template>
