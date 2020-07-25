<template>
    <div class='home'>
        <ClientNavBar :user="user"></ClientNavBar>
        <router-view :user="user"></router-view>
    </div>
</template>

<script>
import ClientNavBar from '@/components/navigation/ClientNavBar';
import {guard} from 'vue-router-guard';
import Axios from 'axios';

export default {
  name: 'Client',
  components: {
      ClientNavBar
  },
  props:['user'],
  mounted: function(){
    console.log(this.user);
  },
  beforeRouteEnter: guard((to, from, next) => {
    Axios.get('http://localhost:9000/client/auth', {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
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
