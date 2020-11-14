<template>
  <img class="page-img" alt="foo art" src="./assets/vd.png">
  <h1>Vue 3 and HTTP Fetch Example</h1>
  <Foo />
</template>

<script>
import Foo from './components/Foo.vue'

export default {
  name: 'App',
  components: {
    Foo
  },
}
</script>

<style>
.page-img {
  width: 100%;
}
</style>
