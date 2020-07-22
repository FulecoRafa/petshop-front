<template>
    <div class='content' style='flex-direction: row;'>
        <Pet name='Rex' type='dog' race='Shi Tzu' age='4'></Pet>
        <Pet name='Milicuco' type='cat' race='Show shoes' age='10'></Pet>
    </div>
</template>

<script>
import Pet from '@/components/Pet'

export default {
    name: 'Pets',
    components: {
        Pet
    }
}
</script>

<style>

</style>