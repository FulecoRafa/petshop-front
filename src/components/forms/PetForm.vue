<template>
    <form id='petForm' @submit='submitAdd'>
        <Data class='profile-pic'>
            <img v-if='images[pet.type]' :src='require(`@/assets/${images[pet.type]}`)' alt='pet'>
            <img v-else src='@/assets/biscuit.png' >
        </Data>
        <div class='inputwrap'>
            <span>Pet name:</span>
            <input type='text' name='name' placeholder='Ex.: Rex' v-model='pet.name'/>
        </div>
        <div class='inputwrap'>
            <span>Age:</span>
            <input type='number' name='age' placeholder='5' v-model='pet.age'/>
        </div>
        <div class='inputwrap'>
            <span>Type:</span>
            <select name='type' v-model='pet.type'>
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
            <input type='text' name='breed' v-model='pet.breed'/>
        </div>
        <input type='submit' :value="submit || 'Submit'"/>
    </form>
</template>

<script>
import Data from '@/components/Data'

const images = {
    Dog:     'doggy.png',
    Cat:     'cat.png',
    Bird:    'bird.png',
    Snake:   'snake.png',
    Fish:    'fish.png',
    Rabbit:  'rabbit.png',
    Hamster: 'hamster.png',
}
export default {
    name: 'PetForm',
    data: () => ({
        pet:{
            name: '',
            age: '',
            type: 'Others',
            breed: '',
            image: ''
        },
        images
    }),
    props: ['submit'],
    components: {
        Data
    },
    methods: {
        submitAdd(event){
            event.preventDefault();
            // Make request
            let thisPet = this.pet;

            const img = this.images[this.pet.type]
            if (img) thisPet.image = img
            else thisPet.image = 'biscuit.png'

            const auth = localStorage.getItem('auth')
            const refresh = localStorage.getItem('refresh')

            this.$http.post('http://localhost:9000/pets', thisPet, {headers: {auth, refresh}})
                .then(res => {
                    console.log(res);
                    this.$router.push('/pet');
                })
                .catch(err => {
                    alert(err.response.data);
                });
        },
        submitEdit(event){
            console.log(event)
            // TODO
        },
    },
    mounted() {
        console.log(this.$props)
    },
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