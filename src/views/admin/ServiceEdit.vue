<template>
    <div class='serviceEdit'>
        <SecondHeader title='Edit Service'></SecondHeader>
        <div class='content'>
            <Card>
                <ServiceForm></ServiceForm>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import ServiceForm from '@/components/forms/ServiceForm'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'ServiceEdit',
    components: {
        Card,
        ServiceForm,
        SecondHeader
    }
}
</script>

<style scoped>

</style>