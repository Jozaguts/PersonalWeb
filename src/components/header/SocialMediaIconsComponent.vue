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
  <div class="q-ml-xs-auto q-ml-md-none">
    <q-btn
      v-for="icon in icons"
      :key="icon.name"
      :href="icon.href"
      unelevated
      rounded
      flat-mini
      padding=".5rem"
      size="sm"
      target="_blank"
      text-color="blue-grey-4"

    >
      <q-icon :name="icon.name" size="1.2rem"></q-icon>
    </q-btn>
  </div>

</template>
