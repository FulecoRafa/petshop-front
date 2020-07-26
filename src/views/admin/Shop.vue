<template>
    <div class='shop'>
        <SecondHeader title='Shop'>
            <router-link to='/admin/productedit' class='button'>Add</router-link>
        </SecondHeader>
        <div class='content'>
            <SearchBox @search="search"></SearchBox>
            <Card flex='true'>
                <ProductEdit v-for='(i, key) in products' :key='key'
                 :name='i.title' :price='i.price' :desc='i.description' :id='i._id'>
                    <!-- <img :src='require(`@/assets/${i.src}`)' alt='product'> -->
                </ProductEdit>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import SearchBox from '@/components/SearchBox'
import ProductEdit from '@/components/rcard/ProductEdit'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Shop',
    components: {
        Card,
        SearchBox,
        ProductEdit,
        SecondHeader
    },
    data: () => ({
        products: []
    }),
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