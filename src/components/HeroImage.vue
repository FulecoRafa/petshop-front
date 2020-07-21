<template>
  <div class='heroImage'>
        <div class='title'>
            <h1>Le Furry</h1>
            <h2>The pet shop that has everything you need for your furry friends</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroImage.vue'
}
</script>

<style>
.heroImage{
    position: relative;
    background-image: url('../assets/dog.jpg');
    background-position: 50% 40%;
    background-size: cover;
    width: 100vw;
    height: 60vh;
    color: white;
}
.title{
    position: absolute;
    top: 30%;
    left: 20%;
    width: 30%;
    text-align: left;
}
.title h1{
    font-size: 68px;
    color: blue;
}
.title h2{
    margin-top: 10px;
    font-size: 36px;
}
@media (max-width: 800px), (max-height: 800px){
    .title{
        left: 10%;
    }
    .title h1{
        font-size: 36px;
    }
    .title h2{
        font-size: 20px;
    }
}
</style>