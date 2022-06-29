<template>
    <code>
      function debounce(fn: Function, time: number) {
        let timeOutId: any
        return () =>{
          if(timeOutId){
            clearTimeout(timeOutId)
        }
        const context: any = this;
          const args = arguments;
        timeOutId = setTimeout(fn.apply(context,args),time)
      }
    </code>
</template>

<script lang="ts" setup>
   function debounce(fn: Function, time: number) {
     let timeOutId: any
    return () =>{
       if(timeOutId){
         clearTimeout(timeOutId)
       }
       const context: any = this;
       const args = arguments;
      timeOutId = setTimeout(fn.apply(context,args),time)
    }
  }
</script>

<style scoped>

</style>
