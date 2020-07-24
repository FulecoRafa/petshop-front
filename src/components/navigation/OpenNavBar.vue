<template>
    <header id='navBar'>
        <router-link to='/' id='logo'>
            <h1>Le Furry</h1>
            <img src='@/assets/kennel.png' alt='kennel'>
        </router-link>
        <router-link to='/login'>
            <div id='login'>
                <h4>Login</h4>
                <img src='@/assets/profile.png' alt='profilePic' />
            </div>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'OpenNavBar'
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
</style>