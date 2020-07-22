<template>
    <div class='home'>
        <ClientNavBar></ClientNavBar>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import ClientNavBar from '@/components/ClientNavBar.vue';

export default {
  name: 'Test',
    components: {
        ClientNavBar
    }
}
</script>
