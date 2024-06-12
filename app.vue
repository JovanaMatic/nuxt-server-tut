<script setup>
const route = useRoute()
  const { data } = await useFetch(`/api/${route.id}`)
  console.log(data.value)
</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
