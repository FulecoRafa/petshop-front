<template>
    <div class='shop'>
        <SecondHeader title='Shop'></SecondHeader>
        <div class='content'>
            <SearchBox></SearchBox>
            <Card flex='true'>
                <ProductEdit v-for='(i, key) in products' :key='key' :name='i.name' :price='i.price' :marca='i.marca' :desc='i.desc'>
                    <img :src='require(`@/assets/${i.src}`)' alt='product'>
                </ProductEdit>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import SearchBox from '@/components/SearchBox'
import ProductEdit from '@/components/ProductEdit'
import SecondHeader from '@/components/SecondHeader'

const createProduct = (name, price, marca, desc, src) => ({
    name, price, marca, desc, src
})

export default {
    name: 'Shop',
    components: {
        Card,
        SearchBox,
        ProductEdit,
        SecondHeader
    },
    data: () => ({
        products: [
            createProduct('Dog food', 20.99, 'Crunchie bites', 'Box food for dogs', 'dog-food.jpg'),
            createProduct('Cat food', 20.99, 'Whiskas', 'Snacks for cats', 'catfood.jpg'),
            createProduct('Colar', 5.99, 'Sheffield', 'Collar with guide for walk', 'coleira.jpeg'),
            createProduct('Food Bowl', 2.99, 'Sheffield', 'Food bowl of different colors', 'pratinhodecomida.jpg'),
            createProduct('Pet bed', 9.99, 'Sheffield', 'Comfortable little bed for your pet to sleep in', 'petbed.jpg'),
            createProduct('Aquarium', 49.99, 'Le Fisherman', 'Large 20L aquarium with filter', 'aquario.jpeg'),
            createProduct('Dog Toy', 1.99, 'Sheffield', 'Munching toy shapped like a bone', 'dogtoy.jpg'),
            createProduct('Bird cage', 9.99, 'Birds of paradise', 'Small cage for small birds', 'birdcage.jpg')
        ]
    }),
}
</script>