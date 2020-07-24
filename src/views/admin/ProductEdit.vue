<template>
    <div class='productEdit'>
        <SecondHeader title='Edit Product'></SecondHeader>
        <div class='content'>
            <Card>
                <ProductForm></ProductForm>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import ProductForm from '@/components/ProductForm'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'ProductEdit',
    components: {
        Card,
        ProductForm,
        SecondHeader
    }
}
</script>

<style>

</style>