<template>
    <Card lefty='true'>
        <div class='petData'>
            <Data class='profile-pic'>
                <img v-if='images[type]' :src='require(`@/assets/${images[type].src}`)' alt="profilePic">
                <img v-else src='@/assets/biscuit.png' >
            </Data>
            <Data class='data' label='Name'>{{ name }}</Data>
            <Data class='data' label='Type'>{{ type }}</Data>
            <Data class='data' label='Race'>{{ race }}</Data>
            <Data class='data' label='Age'>{{ age }}</Data>
            <router-link to='/client/petedit'>Edit</router-link>
        </div>
    </Card>
</template>

<script>
import Data from '@/components/Data'
import Card from '@/components/Card'

const images = {
    Dog: {src: 'doggy.png', alt:'pic'},
    Cat: {src: 'cat.png', alt:'pic'},
    Bird: {src: 'bird.png', alt:'pic'},
    Snake: {src: 'snake.png', alt:'pic'},
    Fish: {src: 'fish.png', alt:'pic'},
    Rabbit: {src: 'rabbit.png', alt:'pic'},
    Hamster: {src: 'hamster.png', alt:'pic'},
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
}
</script>

<style scoped>
.petData{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.petData *{
  margin: 10px;
  padding: 5px;
}
.petData img{
  max-width: 200px;
  max-height: 200px;
}


/* Reducing the space between the label and the data */
.petData .data ::v-deep h3{
    margin-right: 0px;
}
.petData .data ::v-deep p{
    margin-left: 0px;
}

.petData a{
  background: var(--secondarycolor);
  width: 100%;
  border: none;
  border-radius: 1px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}
.petData a:hover{
  filter: brightness(1.2);
}
</style>