<template>
    <div class='pets'>
        <SecondHeader title='Pets'>
            <router-link class='button' to='/client/petedit'>Add</router-link>
        </SecondHeader>
        <div class='content' style='flex-direction: row;'>
            <Pet v-for='(i, key) in this.pets' :key='key'
              :id='i._id' :name='i.name' :type='i.type' :breed='i.breed' :age='i.age'>
            </Pet>
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
    },
    props: ['user'],
    data: () => ({
        pets: []
    }),
    mounted() {
        const auth = localStorage.getItem('auth')
        const refresh = localStorage.getItem('refresh')
        this.$http.get('http://localhost:9000/pets/client', {headers: {auth, refresh}})
            .then(res => {
                console.log(res.data)
                if(res.data.newAuthToken) {
                    localStorage.setItem('auth', res.data.newAuthToken)
                    location.reload()
                } else {
                    this.pets = res.data
                }
            })
            .catch(err => {
                alert(err.response.data)
            })
    }
}
</script>

<style scoped>
.button {
    background-color: white;
    color: var(--maincolor);
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    margin-left: 15px;
}
.button:hover{
    filter: brightness(1.2);
    box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
}
</style>