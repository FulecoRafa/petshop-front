<template>
    <header id='navBar'>
        <router-link to='/' id='logo'>
                <h1>Le Furry</h1>
                <img src='@/assets/kennel.png' alt='kennel'>
        </router-link>
        
        <Menu :username='name' to='/client/profile'>
            <template v-slot:userImage>
                <img src='@/assets/profile.png' alt='profilePic' />
            </template>
            
            <MenuItem label='Profile' to='/client/profile'>
                <img src='@/assets/business-and-finance.png' alt='profile'>
            </MenuItem>
            <MenuItem label='Shop' to='/client'>
                <img src='@/assets/shopping.png' alt='shopping'>
            </MenuItem>
            <MenuItem label='Cart' to='/client/cart' val='3'>
                <img src='@/assets/cart.png' alt='cart'>
            </MenuItem>
            <MenuItem label='My Pets' to='/client/pets' val='2'>
                <img src='@/assets/collar.png' alt='collar'>
            </MenuItem>
            <MenuItem label='Services' to='/client/services'>
                <img src='@/assets/tools-and-utensils.png' alt='scissors'>
            </MenuItem>
            <MenuItem label='Log out' to='/'>
                <img src='@/assets/sign.png' alt='exit'>
            </MenuItem>            
        </Menu>
    </header>
</template>

<script>
import MenuItem from './MenuItem'
import Menu from './Menu'

export default {
    name: 'ClientNavBar',
    components:{
        Menu,
        MenuItem
    },
    props:['name']
}
</script>

<style scoped>
#navBar{
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--maincolor);
    padding: none;
    color: var(--headercolor);
    font-weight: bolder;
}

#logo{
    display: flex;
    align-items: center;
}
</style>