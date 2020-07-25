<template>
    <div class='users'>
        <SecondHeader title='Users'></SecondHeader>
        <div class='content'>
            <SearchBox @search="search"></SearchBox>
            <Card flex='true'>
                <User v-for='(i, key) in users' :key='key'
                  :name='i.name' :admin='i.permission'>
                    <img :src='require(`@/assets/profile.png`)'>
                </User>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import User from '@/components/rcard/User'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Users',
    components: {
        Card,
        User,
        SearchBox,
        SecondHeader
    },
    data: () => ({
        users: []
    }),
    methods:{
      search(prompt){
        this.$http.post('http://localhost:9000/client/search', {prompt: prompt}, {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.users = res.data
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
      }
    },
    mounted:function(){
      this.$http.get('http://localhost:9000/client', {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.users = res.data
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
    }
}
</script>