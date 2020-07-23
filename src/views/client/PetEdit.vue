<template>
    <div class='petEdit'>
        <SecondHeader title='Edit Pet'></SecondHeader>
        <div class='content'>
            <Card>
                <PetForm></PetForm>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import PetForm from '@/components/PetForm'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'PetEdit',
    components: {
        Card,
        PetForm,
        SecondHeader
    }
}
</script>

<style>

</style>