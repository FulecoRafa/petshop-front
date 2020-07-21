<template>
<div id='asdasfd'>
    <header id='secondHeader'>
        <h1>Profile</h1>
        <a href='./profileForm.html'>Edit profile</a>
        <a href='' style='background-color: red;color: white;'>Delete profile</a>
    </header>
    <div class='content'>
        <div class='card'>
            <div id='profile-content'>
                <div class='datawrap' id='profile-pic'>
                    <img src='../resources/avatar2.png' alt='profilePic'>
                </div>
                <div class='datawrap'>
                    <h3>Name:</h3>
                    <p>Fulano</p>
                </div>
                <div class='datawrap'>
                    <h3>Email address:</h3>
                    <p>fulano@email.com</p>
                </div>
                <div class='datawrap'>
                    <h3>Address:</h3>
                    <p>Florense Street, 23</p>
                </div>
                <div class='datawrap'>
                    <h3>Phone:</h3>
                    <p>(01) 9 2345-6789</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Test',
    components:{
    }
}
</script>

<style scoped>

</style>