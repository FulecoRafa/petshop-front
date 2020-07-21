<template>
<div id='asdasfd'>
    <header id='secondHeader'>
        <h1>Profile</h1>
        <route-link to='/'>Edit profile</route-link>
        <route-link to='' style='background-color: red;color: white;'>Delete profile</route-link>
    </header>
    <div class='content'>
        <div class='card'>
            <div id='profileContent'>
                <div class='datawrap' id='profile-pic'>
                    <img src='@/assets/avatar2.png' alt='profilePic'>
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
    #profile-pic{
    display: flex;
    flex-direction: column;
    justify-self: center;
    }
    #profile-pic img{
    max-width: 200px;
    max-height: 200px;
    }

    #profile-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    }

    #profile-content *{
    margin: 10px;
    padding: 5px;
    }

    /* Reducing the space between the label and the data */
    #profile-content .datawrap>h3{
        margin-right: 0px;
    }
    #profile-content .datawrap>p{
        margin-left: 0px;
    }

    #profile-content a{
    background: var(--secondarycolor);
    width: 100%;
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    }
    #profile-content a:hover{
    filter: brightness(1.2);
    }

    .datawrap{
    display: flex;
    align-items: center;
    justify-content: unset;
    width: 100%;
    }

    #secondHeader{
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
        background-color: var(--secondarycolor);
        padding: none;
        color: var(--headercolor);
        font-weight: bolder;
    }
    #secondHeader h1{
        padding: 10px 60px 10px 20px;
    }
    #secondHeader route-link{
        background-color: white;
        color: var(--maincolor);
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        margin-left: 15px;
    }
    #secondHeader a:hover{
        filter: brightness(1.2);
        box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
    }
</style>