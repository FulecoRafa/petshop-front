<template>
    <Card lefty>
        <div id='profile-content'>
            <Data id='profile-pic'>
                <img v-if='images[type]' :src='require(`@/assets/${images[type].src}`)' alt="profilePic">
                <img v-else src='@/assets/biscuit.png' >
            </Data>
            <Data label='Name'>{{ name }}</Data>
            <Data label='Type'>{{ capitalize(type) }}</Data>
            <Data label='Race'>{{ race }}</Data>
            <Data label='Age'>{{ age }}</Data>
            <router-link to='404'>Edit</router-link>
        </div>
    </Card>
</template>

<script>
import Data from '@/components/Data'
import Card from '@/components/Card'

const images = {
    dog: {src: 'doggy.png', alt:'pic'},
    cat: {src: 'cat.png', alt:'pic'},
    bird: {src: 'bird.png', alt:'pic'},
    fish: {src: 'fish.png', alt:'pic'}
}

export default {
    name: 'Pet',
    components: {
        Data,
        Card
    },
    props: ['name', 'type', 'race', 'age'],
    data: () => ({
        images
    }),
    methods: {
        capitalize: str => str.charAt(0).toUpperCase() + str.slice(1)
    }
}
</script>

<style scoped>

</style>