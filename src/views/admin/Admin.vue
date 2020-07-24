<template>
    <div class='home'>
        <AdminNavBar></AdminNavBar>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import AdminNavBar from '@/components/navigation/AdminNavBar'

export default {
  name: 'Admin',
    components: {
        AdminNavBar
    }
}
</script>
