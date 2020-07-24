<template>
    <div class='services'>
        <SecondHeader title='services'>
             <router-link to='/client/edit' class='button'>Add service</router-link>
        </SecondHeader>
        <div class='content'>
            <SearchBox></SearchBox>
            <Card flex='true'>
                <Service v-for='(i, key) in services' :key='key'
                  :name='i.name' :price='i.price' :desc='i.desc'>
                    <img :src='require(`@/assets/${i.src}`)' alt='service'>
                </Service>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Service from '@/components/rcard/Service'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

const cs = (name, price, desc, src)=> ({name, price, desc, src}) // createService

export default {
    name: 'Services',
    data: () => ({
        services:[
            cs('Shearing', 29.99, 'Get your little boy or girl into cool haircuts', 'hair.png'),
            cs('Bath', 29.99, 'SPA day for your best friend!', 'shampoo.png'),
            cs('Vet checkup', 29.99, 'A healthy boy is a happy boy', 'doctor.png'),
        ]
    }),
    components: {
        Card,
        Service,
        SearchBox,
        SecondHeader
    }
}
</script>

<style scoped>
.button {
    background-color: white;
    color: var(--maincolor);
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    margin-left: 15px;
}
.button:hover{
    filter: brightness(1.2);
    box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
}
</style>