<template>
    <div class='pets'>
        <SecondHeader title='Pets'></SecondHeader>
        <div class='content' style='flex-direction: row;'>
            <Pet :v-for='(i, key) in this.pets' :ket='key'
              :name='i.name' :type='i.type' :race='i.race' age='i.race'>
            </Pet>
            <button>add</button>
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
    data: () => ({
        pets: []
    }),
    mounted() {
        const auth = localStorage.getItem('auth')
        const refresh = localStorage.getItem('refresh')
        this.$http.get('http//localhost:900/pets', {headers: {auth, refresh}})
            .then(res => {
                console.log(res.data)
                if(res.data.newAuthToken) {
                    localStorage.setItem('auth', res.data.newAuthToken)
                    location.reload()
                } else {
                    this.pets = res.data
                }
            })
            .catch()
    }
}
</script>

<style>

</style>