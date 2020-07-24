<template>
    <div class='users'>
        <SecondHeader title='Users'></SecondHeader>
        <div class='content'>
            <SearchBox></SearchBox>
            <Card flex='true'>
                <User v-for='(i, key) in users' :key='key'
                  :name='i.name' :admin='i.admin'>
                    <img :src='require(`@/assets/${i.avatar}`)'>
                </User>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import User from '@/components/User'
import SearchBox from '@/components/SearchBox'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Users',
    components: {
        Card,
        User,
        SearchBox,
        SecondHeader
    },
    data: () => ({
        users: [
            {name: 'Fulano', admin: false, avatar:'avatar2.png'},
            {name: 'Sicrano', admin: false, avatar:'avatar1.png'},
            {name: 'Beltrano', admin: true, avatar:'avatar3.png'}
        ]
    })
}
</script>