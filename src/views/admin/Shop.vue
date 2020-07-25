<template>
    <div class='shop'>
        <SecondHeader title='Shop'></SecondHeader>
        <div class='content'>
            <SearchBox @search="search"></SearchBox>
            <Card flex='true'>
                <ProductEdit v-for='(i, key) in products' :key='key' :name='i.title' :price='i.price' :desc='i.description'>
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