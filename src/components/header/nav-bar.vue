<template>
  <nav class="absolute-bottom flex justify-center items-baseline">
    <ul class="text-center flex ">
      <li
        v-for="link in links"
        :key="link.text"
        class="q-ml-sm"
      >
        <router-link
          :to="link.to"
          :class="link.class"
        >
          {{link.text}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import { links } from "src/models";

</script>

<style scoped lang="sass">
ul
  list-style: none
  padding: 0

</style>
