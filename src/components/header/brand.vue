<template>
  <q-toolbar-title
    @click="$router.push('/')"
    class="flex items-center cursor-pointer ">
    <q-avatar class="q-mr-sm">
      <img
        loading="lazy"
        width="50"
        alt="jozaguts.dev logo"
        src="../../assets/code.png"
      />
    </q-avatar>
    <h1 class="text-h5 underline-animated">Jozaguts</h1>
  </q-toolbar-title>
</template>

<script>
export default {
  name: "brand"
}
</script>

<style scoped>

</style>
