<template>
<div id='profile'>
    <SecondHeader title='Profile'>
        <router-link to='/' class='button'>Edit profile</router-link>
        <router-link to='/' class='button' style='background-color: red;color: white;'>Delete profile</router-link>
    </SecondHeader>
    <div class='content'>
        <Card>
            <div id='profileContent'>
                <div class='datawrap' id='profilePic'>
                    <img src='@/assets/avatar2.png' alt='profilePic'>
                </div>
                <Data label='Name'>Fulano</Data>
                <Data label='Email address'>fulano@email.com</Data>
                <Data label='Address'>Florense Street, 23</Data>
                <Data label='Phone'>(01) 9 2345-6789</Data>
            </div>
        </Card>
    </div>
</div>
</template>

<script>
import Card from '@/components/Card'
import Data from '@/components/Data'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Profile',
    components: {
        Card,
        Data,
        SecondHeader
    }
}
</script>

<style scoped>
#profilePic{
    display: flex;
    flex-direction: column;
    justify-self: center;
}
#profilePic img{
    max-width: 200px;
    max-height: 200px;
}

#profileContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#profileContent *{
    margin: 10px;
    padding: 5px;
}

/* Reducing the space between the label and the data */
#profileContent .datawrap>h3{
    margin-right: 0px;
}
#profileContent .datawrap>p{
    margin-left: 0px;
}

#profileContent route-link{
    background: var(--secondarycolor);
    width: 100%;
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
}
#profileContent route-link:hover{
    filter: brightness(1.2);
}

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