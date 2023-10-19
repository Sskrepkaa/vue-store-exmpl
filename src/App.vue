

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/ui/NavBar.vue"

export default {
  components: {
    NavBar,
  }
}


</script>

<style scoped>

</style>
