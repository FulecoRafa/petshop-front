<template>
    <div>
        <SecondHeader title='Shop'></SecondHeader>
        <SearchBox></SearchBox>
        <Card>
            <Product name='Dog food' price='20.99' marca='Crunchie bites' desc='Box food for dogs'>
                <img src='@/assets/dog-food.jpg' />
            </Product>
        </Card>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Product from '@/components/Product'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Shop',
    components: {
        Card,
        Product,
        SearchBox,
        SecondHeader
    }
}
</script>

<style scoped>
</style>