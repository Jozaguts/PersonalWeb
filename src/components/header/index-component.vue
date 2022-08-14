<script setup lang="ts">
import BrandComponent from './brand-component.vue';
import NavBar from './nav-bar.vue';
</script>
<template>
  <q-header class="text-white q-px-lg q-pt-sm">
    <q-toolbar>
      <BrandComponent />
    </q-toolbar>
    <NavBar />
  </q-header>
</template>
<style scoped lang="sass">
ul
  list-style: none
  padding: 0
.underline-animated
  text-decoration: none
  cursor: pointer
  position: relative
.underline-animated::before
  content: ""
  position: absolute
  width: 100%
  height: 4px
  border-radius: 4px
  background-color: #40c28a
  bottom: 0
  left: 0
  transform-origin: right
  transform: scaleX(0)
  transition: transform .3s ease-in-out
.underline-animated:hover::before
  transform-origin: left
  transform: scaleX(1)
</style>
