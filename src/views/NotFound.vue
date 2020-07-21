<template>
    <div class='content'>
        <Card>
        <div class='imaged'>
            <div class='message'>
                <h1>Error 404</h1>
                <h2>We couldn't find the page you're looking for. <br> Why don't we go back to <router-link to='/' class='link'>The Home Page</router-link> and then we can help you?</h2>
            </div>
            <img src='../assets/confused.jpg' alt='confused-dog'>
        </div>
    </Card>
    </div>
</template>

<script>
import Card from '@/components/Card';

export default {
    name:'NotFound',
    components:{
        Card
    } 
}
</script>

<style scoped>

.imaged{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.message{
    text-align: left;
}
.message h2{
    margin: 10px 15px 10px 0;
}
.message a{
    color: var(--maincolor);
}

</style>