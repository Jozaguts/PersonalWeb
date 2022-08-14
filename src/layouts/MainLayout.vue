<template>
  <q-layout view="hhh Lpr fff">
    <HeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import HeaderComponent from 'components/header/IndexComponent.vue';
</script>
