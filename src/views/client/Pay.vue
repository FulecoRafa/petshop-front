<template>
    <div>
        <SecondHeader title='Pay'></SecondHeader>
        <div class='content'>
            <Card>
              <form @submit="pay">
                <Credit :value='total'></Credit>
                <input type="submit" id='payButton' value="Pay">
              </form>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Credit from '@/components/Credit'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Pay',
    components: {
        Card,
        Credit,
        SecondHeader
    },
    props:['total', 'cartid'],
    methods:{
      pay(event){
        event.preventDefault();
        this.$http.put('http://localhost:9000/orders/' + this.cartid + '/done', {}, {headers:{auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
          .then(()=>{
            alert("Order put!");
          })
          .catch(err=>{
            console.error(err.response);
            alert("Error putting order: " + err.response.data);
          });
      }
    },
    mounted(){
      if(!(this.total && this.cartid)) this.$router.push('/client/cart');
    }
}
</script>

<style>
#payButton{
    background-color: var(--maincolor);
    color: white;
    font-weight: 800;
    font-size: 16px;
    border: none;
    padding: 2px 40px;
    cursor: pointer;
}
#payButton:hover{
    filter: brightness(1.2);
}
</style>