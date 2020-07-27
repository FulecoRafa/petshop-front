<template>
    <div class='cart'>
        <SecondHeader title='Cart'></SecondHeader>
        <div class='content'>
            <Card class='cartList' v-if="cart">
              <!-- <h1 v-if="cart">Cart empty</h1> -->
                <div v-for='({price, quantity, product} , key) in cart.items' :key='key'>
                    <CartItem :value='quantity' :name='product.title' :price='price'
                    @remove='remove(key)' @increment='increment(key)' @decrement='decrement(key)'
                    @update='x => update(key, x)'>
                    </CartItem>
                    <hr>
                </div>
                <div class='total'>
                    <div class='amount'>
                        <h2>Total amount</h2>
                        <p>${{ parseFloat(total).toFixed(2) }}</p>
                    </div>
                    <router-link id='continueShopping' to='/client/'>Continue shopping</router-link>
                    <router-link  id='buy' :to="{name: 'ClientPay', params: {cartid: id, total: total}}">Buy</router-link>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import CartItem from '@/components/CartItem'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Cart',
    components: {
        Card,
        CartItem,
        SecondHeader
    },
    props:['user'],
    data: () => ({
        cart: null,
        save: false
    }),
    computed:{
      total: function(){
        let sum = 0;
        if(!this.cart) return sum;
        else{
          for (let item of this.cart.items){
            sum += item.price*item.quantity;
          }
          return sum;
        }
      },
      id: function(){ return this.cart._id}
    },
    methods: {
        remove(index) {
            this.cart.items.splice(index, 1)
        },
        increment(index) {
            this.cart.items[index].quantity++
        },
        decrement(index) {
            const item = this.cart.items[index]
            item.quantity--
            item.quantity = item.quantity < 1 ? 1 : item.quantity
        },
        update(index, value) {
            this.items[index].quantity = value < 1 ? 1 : value
        }
    },

    mounted() {
        this.$http.get('http://localhost:9000/orders/'+ this.user._id, {headers: {auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
          .then(res=>{
            this.cart = res.data;
            this.save = true;
          })
          .catch(err=>{
            console.error(err.response);
            alert("No cart found");
            this.$router.push('/client')
          });
    },

    beforeRouteLeave(to, from, next){
      if(this.save){
        this.$http.put('http://localhost:9000/orders/save/' + this.cart._id, this.cart.items, {headers: {auth: localStorage.getItem('auth'), refresh: localStorage.getItem('refresh')}})
        .then(res=>{
          alert(res.data);
          console.log(res);
          console.info(this.cart._id);
          next();
        })
        .catch(err=>{
          alert(err.response.data);
          console.error(err.response);
          next(false);
        });
      }else next();
    }
}
</script>

<style scoped>
.cartList {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
}

.total {
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.total .amount {
  text-align: center;
  padding: 20px 20px;
  margin-bottom: 30px;
}

.total .amount h2 {
  color: rgb(37, 0, 248);
}

#buy{
  background: var(--secondarycolor);
  width: 100%;
  height: 30px;
  border: solid 3px var(--secondarycolor);
  border-radius: 1px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

#buy:hover{
  filter: brightness(1.2);
}

#continueShopping {
  width: 100%;
  height: 30px;
  border-style: solid;
  border-width: 3px;
  border-radius: 1px;
  border-color: var(--secondarycolor);
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  color: #43484d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

#continueShopping:hover{
  background: var(--secondarycolor);
  color: white;
}
</style>