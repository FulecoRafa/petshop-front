<template>
    <div>
        <CartItem value='0' name='Dog food' marca='Crunch bites' price='20.99'
            @remove='remove(0)' @increment='increment(0)' @decrement='decrement(0)'
            @update='x => update(0, x)'>
            <img src='@/assets/dog-food.jpg' alt='dog-food'>
        </CartItem>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
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