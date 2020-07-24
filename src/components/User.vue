<!-- TODO Translate 'marca' -->

<template>
    <div class='userCard'>
        <div class='slot'><slot></slot></div>
        <h3>{{ name }}</h3>
        <h4>{{ admin ? 'Admin' : 'Client' }}</h4>
        <router-link to='/'>Edit</router-link>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: [
        'name',
        'admin'
    ]
}
</script>

<style scoped>
.userCard {
    background: whitesmoke;
    padding: 20px;
    width: 240px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    margin-right: 60px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.userCard *{
    padding: 5px;
}
.userCard h5, .userCard a p{
    color: gray;
}
.userCard p{
    word-break: keep-all;
}
.userCard .slot img{
    height: 150px;
    object-fit: cover;
}
.userCard a{
    background: var(--secondarycolor);
    width: 100%;
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.userCard a img{
    height: 24px;
    padding-right: 10px;
}
.userCard a:hover{
    filter: brightness(1.2);
}
</style>