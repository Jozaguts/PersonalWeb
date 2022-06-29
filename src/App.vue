<script lang="ts" setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
$q.dark.set(false)
</script>

<template>
  <router-view />
</template>

