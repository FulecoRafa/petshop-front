<template>
    <Card class='searchBox'>
        <h3>Search</h3>
        <form>
            <input type='text' name='searchPrompt' placeholder='Ex.: Dog food' />
            <input type='submit' value='🔎' />
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
.searchBox{
    text-align: left;
    width: 100%;
}

.searchBox input[type=text]{
    width: 70%;
}

.searchBox input[type=submit]{
    background: none;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>