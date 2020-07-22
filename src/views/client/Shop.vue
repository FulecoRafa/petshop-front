<template>
    <div class='profile'>
        <SecondHeader title='Shop'></SecondHeader>
        <div class='content'>
            <SearchBox></SearchBox>
            <Card class='products'>
                <Product v-for='(i, key) in products' :key='key' :name='i.name' :price='i.price' :marca='i.marca' :desc='i.desc'>
                    <img :src='require(`@/assets/${i.src}`)' :alt='i.alt'>
                </Product>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Product from '@/components/Product'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

const createProduct = (name, price, marca, desc, src, alt) => ({
    name, price, marca, desc, src, alt
})

export default {
    name: 'Shop',
    data: () => ({
        a: ['n', 'b', 'c'],
        products: [
            createProduct('Dog food', 20.99, 'Crunchie bites', 'Box food for dogs', 'dog-food.jpg', 'dog-food'),
            createProduct('Cat food', 20.99, 'Whiskas', 'Snacks for cats', 'catfood.jpg', 'cat-food'),
            createProduct('Colar', 5.99, 'Sheffield', 'Collar with guide for walk', 'coleira.jpeg', 'colar'),
            createProduct('Food Bowl', 2.99, 'Sheffield', 'Food bowl of different colors', 'pratinhodecomida.jpg', 'bowl'),
            createProduct('Pet bed', 9.99, 'Sheffield', 'Comfortable little bed for your pet to sleep in', 'petbed.jpg', 'pet-bed'),
            createProduct('Aquarium', 49.99, 'Le Fisherman', 'Large 20L aquarium with filter', 'aquario.jpeg', 'aquarium'),
            createProduct('Dog Toy', 1.99, 'Sheffield', 'Munching toy shapped like a bone', 'dogtoy.jpg', 'dog-toy'),
            createProduct('Bird cage', 9.99, 'Birds of paradise', 'Small cage for small birds', 'birdcage.jpg', 'bird-cage')
        ]
    }),
    components: {
        Card,
        Product,
        SearchBox,
        SecondHeader
    }
}
</script>

<style scoped>
.products{
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>