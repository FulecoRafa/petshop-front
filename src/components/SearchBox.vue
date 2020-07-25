<template>
    <Card class='searchBox'>
        <h3>Search</h3>
        <form @submit="emit">
            <span>
            <input type='text' name='searchPrompt' placeholder='Ex.: Dog food' v-model="prompt"/>
            <input type='submit' value='🔎'  />
            </span>
        </form>
    </Card>
</template>

<script>
import Card from '@/components/Card'

export default {
    name: 'SearchBox',
    components: {
        Card
    },
    data: ()=>({
      prompt:''
    }),
    methods:{
      emit(event){
        event.preventDefault();
        this.$emit('search', this.prompt);
      }
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
    background-color: white;
    font-size: 18px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#profileForm input[type=text]:focus{
    border-bottom: 5px solid greenyellow;
}

.searchBox input[type=submit]{
    background: none;
    border: none;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>