<template>
    <div class='productEdit'>
        <SecondHeader title='Edit Product'></SecondHeader>
        <div class='content'>
            <Card>
                <ProductForm></ProductForm>
                <hr><br>
                <Data label='Sold'>12</Data>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Data from '@/components/Data'
import ProductForm from '@/components/ProductForm'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'ProductEdit',
    components: {
        Card,
        Data,
        ProductForm,
        SecondHeader
    }
}
</script>