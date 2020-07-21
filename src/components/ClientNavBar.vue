<!-- TODO colocar links -->

<template>
    <header id='header'>
        <router-link to='/' id='logo'>
                <h1>Le Furry</h1>
                <img src='@/assets/kennel.png' alt='kennel'>
        </router-link>
        
        <div class='dropdownWrapper'>
            <div id='login'>
                <h4>Fulano</h4>
                <img src='@/assets/profile.png' alt='profilePic' />
            </div>
            <div class='dropdown'>
                <ul>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/business-and-finance.png' alt='prof'>
                            <h4>Profile</h4>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/shopping.png' alt='shopping'>
                            <h4>Shop</h4>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/cart.png' alt='cart'>
                            <h4>Cart</h4>
                            <div class='pop'>3</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/collar.png' alt='collar'>
                            <h4>My Pets</h4>
                            <div class='pop'>2</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/tools-and-utensils.png' alt='scissors'>
                            <h4>Services</h4>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/'>
                            <img class='dropdownIcon' src='@/assets/sign.png' alt='exit'>
                            <h4>Log out</h4>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'ClientNavBar'
}
</script>

<style Scoped>
    #header{
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
</style>