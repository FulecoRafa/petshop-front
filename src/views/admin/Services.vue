<template>
    <div class='services'>
        <SecondHeader title='services'>
             <router-link to='/client/edit' class='button'>Add service</router-link>
        </SecondHeader>
        <div class='content'>
            <SearchBox @search="search"></SearchBox>
            <Card flex='true'>
                <Service v-for='(i, key) in services' :key='key'
                  :name='i.title' :price='i.price' :desc='i.description'>
                    <img :src='require(`@/assets/${i.image}`)' alt='service'>
                </Service>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Service from '@/components/rcard/Service'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Services',
    data: () => ({
        services:[]
    }),
    components: {
        Card,
        Service,
        SearchBox,
        SecondHeader
    },
    methods:{
      search(prompt){
        this.$http.post('http://localhost:9000/services/search', {prompt: prompt}, {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.services = res.data
          }
        })
        .catch(err=>{
          console.log(err.response);
          alert(err.response.data);
        });
      }
    },
    mounted:function(){
      this.$http.get('http://localhost:9000/services', {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.services = res.data
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
    }
}
</script>

<style scoped>
.button {
    background-color: white;
    color: var(--maincolor);
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    margin-left: 15px;
}
.button:hover{
    filter: brightness(1.2);
    box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
}
</style>