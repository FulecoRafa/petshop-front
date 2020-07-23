<template>
    <div class='home'>
        <ClientNavBar></ClientNavBar>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import ClientNavBar from '@/components/navigation/ClientNavBar';

export default {
  name: 'Client',
    components: {
        ClientNavBar
    }
}
</script>
