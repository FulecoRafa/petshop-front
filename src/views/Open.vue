<template>
  <div class="home">
    <OpenNavBar></OpenNavBar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import OpenNavBar from '@/components/OpenNavBar.vue';

export default {
  name: 'Home',
  components: {
    OpenNavBar
  }
}
</script>
