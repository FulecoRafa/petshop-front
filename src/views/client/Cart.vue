<!-- TODO I think the array index isn't a good key -->
<!-- TODO Add links -->

<template>
    <div class='cart'>
        <SecondHeader title='Cart'></SecondHeader>
        <div class="content">
            <Card class='cartList'>
                <div v-for='({quantity, product} , key) in items' :key='key'>
                    <CartItem :value='quantity' :name='product.name' :marca='product.marca' :price='product.price'
                    @remove='remove(key)' @increment='increment(key)' @decrement='decrement(key)'
                    @update='x => update(key, x)'>
                        <img :src='require(`@/assets/${product.src}`)' :alt='product.alt'>
                    </CartItem>
                    <hr>
                </div>
                <div class="total">
                    <div class="amount">
                        <h2>Total amount</h2>
                        <p>${{ parseFloat(total).toFixed(2) }}</p>
                    </div>
                    <router-link id="continueShopping" to="/client/Shop">Continue shopping</router-link>
                    <router-link  id="buy" to="/404">Buy</router-link>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import CartItem from '@/components/CartItem'
import SecondHeader from '@/components/SecondHeader'

const createProduct = (name, price, marca, desc, src, alt) => ({
    name, price, marca, desc, src, alt
})


export default {
    name: 'Cart',
    components: {
        Card,
        CartItem,
        SecondHeader
    },

    data: () => ({
        total: NaN,
        items: [
            {
                quantity: 1,
                product: createProduct('Dog food', 20.99, 'Crunchie bites', 'Box food for dogs', 'dog-food.jpg', 'dog-food')
            },
            {
                quantity: 2,
                product: createProduct('Cat food', 20.99, 'Whiskas', 'Snacks for cats', 'catfood.jpg', 'cat-food'), 
            },
            {
                quantity: 1,
                product: createProduct('Colar', 5.99, 'Sheffield', 'Collar with guide for walk', 'coleira.jpeg', 'colar'),
            }
        ]
    }),

    methods: {
        remove(index) {
            this.items.splice(index, 1)
            this.change()
        },
        increment(index) {
            this.items[index].quantity++
            this.change()
        },
        decrement(index) {
            const item = this.items[index]
            item.quantity--
            item.quantity = item.quantity < 0 ? 0 : item.quantity
            this.change()
        },
        update(index, value) {
            this.items[index].quantity = value < 0 ? 0 : value
            this.change()
        },
        change() {
            this.total = this.items.reduce((sum, {quantity, product}) => (sum + product.price * quantity), 0)
        }
    },

    mounted() {
        this.change()
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