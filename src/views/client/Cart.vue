<template>
    <div class='cart'>
        <div v-for='({quantity, product} , key) in items' :key='key'>
            <CartItem :value='quantity' :name='product.name' :marca='product.marca' :price='product.price'
            @remove='remove(key)' @increment='increment(key)' @decrement='decrement(key)'
            @update='x => update(key, x)'>
                <img :src='require(`@/assets/${product.src}`)' :alt='product.alt'>
            </CartItem>
            <hr>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'

const createProduct = (name, price, marca, desc, src, alt) => ({
    name, price, marca, desc, src, alt
})


export default {
    name: 'Cart',
    components: {
        CartItem
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
        remove(item) {
            console.log(`Remove ${item}`)
        },
        increment(item) {
            console.log(`inc ${item}`)
        },
        decrement(item) {
            console.log(`dec ${item}`)
        },
        update(item, x){
            console.log(`up ${item} to ${x}`)
        }
    }
}
</script>

<style scoped>

</style>