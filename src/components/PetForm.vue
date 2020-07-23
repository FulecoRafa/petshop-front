<template>
    <form id='petForm'>
        <Data class='profile-pic'>
            <img v-if='images[type]' :src='require(`@/assets/${images[type].src}`)' alt='profilePic'>
            <img v-else src='@/assets/biscuit.png' >
        </Data>
        <div class='inputwrap'>
            <span>Pet name:</span>
            <input type='text' name='name' placeholder='Ex.: Rex'/>
        </div>
        <div class='inputwrap'>
            <span>Age:</span>
            <input type='number' name='age' placeholder='5'/>
        </div>
        <div class='inputwrap'>
            <span>Type:</span>
            <select v-model='type' name='type'>
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Bird'>Bird</option>
                <option value='Snake'>Snake</option>
                <option value='Fish'>Fish</option>
                <option value='Rabbit'>Rabbit</option>
                <option value='Hamster'>Hamster</option>
                <option value='other'>Other...</option>
            </select>
        </div>
        <div class='inputwrap'>
            <span>Breed:</span>
            <input type='text' name='breed'/>
        </div>
        <input type='submit' value='Add'/>
    </form>
</template>

<script>
import Data from '@/components/Data'

const images = {
    Dog: {src: 'doggy.png', alt:'pic'},
    Cat: {src: 'cat.png', alt:'pic'},
    Bird: {src: 'bird.png', alt:'pic'},
    Snake: {src: 'snake.png', alt:'pic'},
    Fish: {src: 'fish.png', alt:'pic'},
    Rabbit: {src: 'rabbit.png', alt:'pic'},
    Hamster: {src: 'hamster.png', alt:'pic'},
}
export default {
    name: 'PetForm',
    data: () => ({
        type: 'Others',
        images
    }),
    components: {
        Data
    }
}
</script>

<style scoped>
#petForm img{
  max-width: 200px;
  max-height: 200px;
}

#petForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#petForm *{
    margin: 15px;
    padding: 10px;
}

#petForm input:not([type=submit]){
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#petForm input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

#petForm select{
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border: 5px solid purple;
    transition: 0.2s ease;
}

.inputwrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

#petForm input[type=submit]{
    background: none;
    font-weight: bolder;
    font-size: 20px;
    color: var(--maincolor);
    border: 3px solid var(--maincolor);
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s;
}
#petForm input[type=submit]:hover{
    background-color: var(--maincolor);
    color: var(--headercolor);
}
</style>