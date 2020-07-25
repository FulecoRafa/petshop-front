<template>
    <div class='profile'>
        <SecondHeader title='Shop'></SecondHeader>
        <div class='content'>
            <SearchBox @search="search"></SearchBox>
            <Card flex='true'>
                <Product v-for='i in products' :key='i._id'
                  :name='i.title' :price='i.price' :desc='i.description' @buy="buy(i._id, i.price)">
                    <!-- <img :src='require(`@/assets/${i.src}`)' alt='product'> -->
                </Product>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Product from '@/components/rcard/Product'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Shop',
    components: {
        Card,
        Product,
        SearchBox,
        SecondHeader
    },
    data: () => ({
        products: []
    }),
    props:['user'],
    methods:{
      search(prompt){
        this.$http.post('http://localhost:9000/products/search', {prompt: prompt}, {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.products = res.data
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
      },
      buy(id, price){
        console.log(id);
        this.$http.put('http://localhost:9000/orders/'+this.user._id, {id: id, price:price}, {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            alert(res.data);
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
      }
    },
    mounted:function(){
      this.$http.get('http://localhost:9000/products', {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          console.log(res.data);
          if(res.data.newAuthToken){
            localStorage.setItem('auth', res.data.newAuthToken);
            location.reload();
          }else{
            this.products = res.data
          }
        })
        .catch(err=>{
          alert(err.response.data);
        });
    }
}
</script>

<style scoped>
</style>