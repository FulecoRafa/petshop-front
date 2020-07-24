<template>
    <div class='products'>
        <SecondHeader title='Shop'></SecondHeader>
        <div class='content'>
        <SearchBox></SearchBox>
        </div>
    </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Shop',
    components: {
        SearchBox,
        SecondHeader
    }
}
</script>

<style>

</style>