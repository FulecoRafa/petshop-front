<template>
    <header id='navBar'>
        <router-link to='/' id='logo'>
                <h1>Le Furry</h1>
                <img src='@/assets/kennel.png' alt='kennel'>
        </router-link>
        
        <Menu :username='user.name' to='/admin/profile'>
            <template v-slot:userImage>
                <img src='@/assets/profile.png' alt='profilePic'>
                <img src='@/assets/shield.png' alt='shield' id='shield'>
            </template>
            
            <MenuItem label='Profile' to='/admin/profile'>
                <img src='@/assets/business-and-finance.png' alt='profile'>
            </MenuItem>
            <MenuItem label='Shop' to='/admin/shop'>
                <img src='@/assets/shopping.png' alt='shopping'>
            </MenuItem>
            <MenuItem label='Users' to='/admin/users'>
                <img src='@/assets/gear.png' alt='gear'>
            </MenuItem>
            <MenuItem label='Services' to='/admin/services'>
                <img src='@/assets/tools-and-utensils.png' alt='scissors'>
            </MenuItem>
            <MenuItem label='Finance' to='/admin/'>
                <img src='@/assets/bars.png' alt='bars'>
            </MenuItem>
            <MenuItem label='Schedule' to='/admin/schedule'>
                <img src='@/assets/time.png' alt='calendar'>
            </MenuItem>
            <MenuItem label='Log out' to='/logout'>
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
    props: ['user']
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

#shield{
    position: absolute;
    left: 100%;
    transform: translate(-125%, 50%);
    height: 25px !important;
}
</style>