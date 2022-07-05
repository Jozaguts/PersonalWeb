<script setup lang="ts">
import BrandComponent from './header/brand.vue'
</script>
<template>
  <q-header class="text-white q-px-lg q-pt-sm" style="height: 20vh">
    <q-toolbar>
      <BrandComponent/>
      <q-space></q-space>
     <div>
       <q-btn
         round unelevated class="mx-sm"
         href="https://twitter.com/jozaguts"
         target="_blank"
       >
        <q-icon name="mdi-twitter" size="2rem"></q-icon>
       </q-btn>
       <q-btn round unelevated class="mx-sm">
         <q-icon name="mdi-github" size="2rem"></q-icon>
       </q-btn>
       <q-btn round unelevated class="mx-sm">
         <q-icon name="mdi-linkedin" size="2rem"></q-icon>
       </q-btn>
       <q-btn round unelevated class="mx-sm">
         <q-icon name="mdi-facebook" size="2rem"></q-icon>
       </q-btn>
       <q-btn round unelevated class="mx-sm">
         <q-icon name="mdi-email" size="2rem"></q-icon>
       </q-btn>



     </div>

    </q-toolbar>
    <nav class="absolute-bottom flex justify-center items-baseline">
      <ul class="text-center flex">
        <li class="q-px-sm text-white bg-transparent">
          <router-link
            to="/"
            v-text="'Home'"
            class="text-h6 text-white text-capitalize underline-animated"
          />
        </li>
        <li class="q-px-sm text-white bg-transparent">
          <router-link
            to="/posts"
            v-text="'Articulos'"
            class="text-h6 text-white text-capitalize underline-animated"
          />
        </li>
        <li class="q-px-sm text-white bg-transparent">
          <router-link
            to="/posts"
            v-text="'Contacto'"
            class="text-h6 text-white text-capitalize underline-animated"
          />
        </li>
      </ul>
    </nav>
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
