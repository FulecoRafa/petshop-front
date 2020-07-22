<template>
    <Card lefty>
        <div class='petAvatar'>
            <Data class='profile-pic'>
                <img v-if='images[type]' :src='require(`@/assets/${images[type].src}`)' alt="profilePic">
                <img v-else src='@/assets/biscuit.png' >
            </Data>
            <Data class='data' label='Name'>{{ name }}</Data>
            <Data class='data' label='Type'>{{ capitalize(type) }}</Data>
            <Data class='data' label='Race'>{{ race }}</Data>
            <Data class='data' label='Age'>{{ age }}</Data>
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
.petAvatar{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.petAvatar *{
  margin: 10px;
  padding: 5px;
}

/* Reducing the space between the label and the data */
.petAvatar .data ::v-deep h3{
    margin-right: 0px;
}
.petAvatar .data ::v-deep p{
    margin-left: 0px;
}

.petAvatar a{
  background: var(--secondarycolor);
  width: 100%;
  border: none;
  border-radius: 1px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}
.petAvatar a:hover{
  filter: brightness(1.2);
}
</style>