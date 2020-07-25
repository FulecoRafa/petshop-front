<template>
    <div class='home'>
        <AdminNavBar :user="user"></AdminNavBar>
        <router-view :user="user"></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import AdminNavBar from '@/components/navigation/AdminNavBar'

import Axios from 'axios'
import {guard} from 'vue-router-guard'

export default {
  name: 'Admin',
  components: {
      AdminNavBar
  },
  props:['user'],
  mounted: function(){
    console.log(this.user);
  },
  beforeRouteEnter: guard((to, from, next) => {
    Axios.get('http://localhost:9000/client/auth_admin', {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
    .then((res) => {
      if(res.data.newAuthKey){
        localStorage.setItem('auth', res.data.newAuthKey);
        location.reload();
      }else{
        next.props({user:res.data})()
      }
    })
    .catch(()=>{
      next('/login');
    });
  })
}
</script>
