<template>
    <div class='pets'>
        <SecondHeader title='Pets'></SecondHeader>
        <div class='content' style='flex-direction: row;'>
            <Pet name='Rex' type='dog' race='Shi Tzu' age='4'></Pet>
            <Pet name='Milicuco' type='cat' race='Show shoes' age='10'></Pet>
        </div>
    </div>
</template>

<script>
import Pet from '@/components/Pet'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Pets',
    components: {
        Pet,
        SecondHeader
    }
}
</script>

<style>

</style>