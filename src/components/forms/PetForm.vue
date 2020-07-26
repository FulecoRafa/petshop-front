<template>
    <form id='petForm' @submit='submitFunc'>
        <Data class='profile-pic'>
            <img v-if='images[pet.type]' :src='require(`@/assets/${images[pet.type]}`)' alt='pet'>
            <img v-else src='@/assets/biscuit.png' >
        </Data>
        <div class='inputwrap'>
            <span>Pet name:</span>
            <input type='text' name='name' placeholder='Ex.: Rex' v-model='pet.name' required>
        </div>
        <div class='inputwrap'>
            <span>Age:</span>
            <input type='number' name='age' placeholder='5' v-model='pet.age' required>
        </div>
        <div class='inputwrap'>
            <span>Type:</span>
            <select name='type' v-model='pet.type' required>
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Bird'>Bird</option>
                <option value='Snake'>Snake</option>
                <option value='Fish'>Fish</option>
                <option value='Rabbit'>Rabbit</option>
                <option value='Hamster'>Hamster</option>
            </select>
        </div>
        <div class='inputwrap'>
            <span>Breed:</span>
            <input type='text' name='breed' v-model='pet.breed' required>
        </div>
        <input type='submit' :value="id ? 'Edit': 'Add'"/>
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
            age: 0,
            type: 'Others',
            breed: '',
            image: ''
        },
        id: false,
        images
    }),
    props: ['user'],
    components: {
        Data
    },
    methods: {
        submitFunc(event){
            if(this.id) this.submitEdit(event)
            else this.submitAdd(event)
        },

        submitAdd(event){
            event.preventDefault();

            // Make request
            const thisPet = this.pet;
            thisPet.client = this.user._id

            const img = this.images[this.pet.type]
            if (img) thisPet.image = img
            else thisPet.image = 'biscuit.png'

            const headers = {
                headers: {
                    auth: localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }

            this.$http.post('http://localhost:9000/pets', thisPet, headers)
                .then(res => {
                    console.log(res)
                    this.$router.push('pets')
                })
                .catch(err => {
                    alert(err.response.data)
                })
        },
        submitEdit(event){
            event.preventDefault()

            // Make request
            const thisPet = this.pet

            const img = this.images[this.pet.type]
            if (img) thisPet.image = img
            else thisPet.image = 'biscuit.png'

            const headers = { 
                headers: {
                    auth: localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }

            this.$http.put('http://localhost:9000/pets/' + this.id, thisPet, headers)
                .then(res => {
                    console.log(res)
                    this.$router.push('pets')
                })
                .catch (err=> {
                    alert(err.response.data)
                })
        },
    },
    mounted() {
        if(this.$route.query.id){
            const {id, name, age, type, breed} = this.$route.query
            this.id = id
            this.pet.name = name ? name : this.pet.name
            this.pet.age = age ? age : this.pet.age
            this.pet.type = type ? type : this.pet.type
            this.pet.breed = breed ? breed : this.pet.breed
        }
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