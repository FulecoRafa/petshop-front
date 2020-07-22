<!-- TODO I think the array index isn't a good key -->

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
        },
        increment(index) {
            this.items[index].quantity++
        },
        decrement(index) {
            const item = this.items[index]
            item.quantity--
            item.quantity = item.quantity < 0 ? 0 : item.quantity
        },
        update(index, value) {
            this.items[index].quantity = value < 0 ? 0 : value
        }
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
</style>