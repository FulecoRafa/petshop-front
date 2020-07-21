<template>
    <div>
        <SecondHeader title='Shop'></SecondHeader>
        <SearchBox></SearchBox>
        <Card>
            <Product name='Dog food' price='20.99' marca='Crunchie bites' desc='Box food for dogs'>
            </Product>
        </Card>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Product from '@/components/Product.vue'
import SearchBox from '@/components/SearchBox.vue'
import SecondHeader from '@/components/SecondHeader.vue'

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