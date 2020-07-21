<template>
  <div class="home">
    <UserNavBar></UserNavBar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import UserNavBar from '@/components/ClientNavBar.vue';

export default {
  name: 'Test',
  components: {
      UserNavBar
  }
}
</script>
