<!-- TODO colocar links -->

<template>
    <header id='navBar'>
        <router-link to='/' id='logo'>
                <h1>Le Furry</h1>
                <img src='@/assets/kennel.png' alt='kennel'>
        </router-link>
        
        <div class='dropdownWrapper'>
            <router-link to='/client/profile'>
                <div id='login'>
                    <h4>Fulano</h4>
                    <img src='@/assets/profile.png' alt='profilePic' />
                </div>
            </router-link>
            <div class='dropdown'>
                <ul>
                    <MenuItem label='Profile' to='/client/profile'>
                        <img src='@/assets/business-and-finance.png' alt='profile'>
                    </MenuItem>
                    <MenuItem label='Shop' to='/client'>
                        <img src='@/assets/shopping.png' alt='shopping'>
                    </MenuItem>
                    <MenuItem label='Cart' to='/' val='3'>
                        <img src='@/assets/cart.png' alt='cart'>
                    </MenuItem>
                    <MenuItem label='My Pets' to='/' val='2'>
                        <img src='@/assets/collar.png' alt='collar'>
                    </MenuItem>
                    <MenuItem label='My Pets' to='/'>
                        <img src='@/assets/tools-and-utensils.png' alt='scissors'>
                    </MenuItem>
                    <MenuItem label='Log out' to='/'>
                        <img src='@/assets/sign.png' alt='exit'>
                    </MenuItem>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import MenuItem from './MenuItem'
console.log(MenuItem)

export default {
    name: 'ClientNavBar',
    components:{
        MenuItem
    }
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
#logo img{
    padding-left: 20px;
}

#header h1{
    padding: 10px 0 10px 20px;
}

#login{
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}
#login:hover{
    background-color: rgba(255,255,255,0.3);
}

#login img{
    height: 50px;
    padding-left: 25px;
} 

.dropdownWrapper:hover .dropdown{
    display: block;
}

.dropdown {
    position: absolute;
    top: 60px;
    background: var(--secondarycolor);
    z-index: 100000;
    display: none;
}

.dropdown ul{
    list-style: none;
}

.dropdown ul li{
    padding: 5px 20px;
    margin: 10px 0;
    background: var(--secondarycolor);
    cursor: pointer;
}
.dropdown ul li:hover{
    filter: brightness(1.2);
}
.dropdown ul li a{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pop{
    position: absolute;
    left: 2%;
    padding: 3px 7px;
    background: red;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    transform: translate(30%, -70%);
}
</style>