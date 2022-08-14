<script setup lang="ts">
import NavBar from './NavbarComponent.vue';
import SocialMediaIcons from './SocialMediaIconsComponent.vue';
</script>
<template>
  <q-header class="text-white q-px-md-lg q-pt-sm">
    <q-toolbar class="wrap-xs">
      <q-avatar>
        <img
          loading="lazy"
          width="50"
          alt="jozaguts.dev logo"
          src="~/assets/code.png"
        />
      </q-avatar>
      <q-toolbar-title
        shrink
        @click="$router.push('/')"
        class="flex items-center cursor-pointer">
        <h5 class="underline-animated">Jozaguts</h5>
      </q-toolbar-title>
      <SocialMediaIcons/>
      <NavBar />
    </q-toolbar>
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
