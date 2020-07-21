<template>
    <Card class='searchBox'>
        <h3>Search</h3>
        <form>
            <input type="text" name="searchPrompt" placeholder="Ex.: Dog food" />
            <input type="submit" value="🔎" />
        </form>
    </Card>
</template>

<script>
import Card from '@/components/Card'

export default {
    name: 'SearchBox',
    components: {
        Card
    }
}
</script>

<style scoped>
    /* TODO */ 
</style>