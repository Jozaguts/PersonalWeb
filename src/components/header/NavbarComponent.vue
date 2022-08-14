<template>
  <nav class="q-mx-xs-auto q-mx-md-none q-ml-md-auto">
    <ul class="flex ">
      <li v-for="link in links" :key="link.text"  class="q-mx-lg">
        <router-link :to="link.to"
                     active-class="active-class"
                     :class="link.class"
                     class="text-weight-bold"
        >
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import { links } from 'src/components/interfaces';
</script>
