<!-- TODO Translate 'marca' -->

<template>
    <div class='productCard'>
        <div class='slot'><slot></slot></div>
        <h3>{{ name }}</h3>
        <h4>${{ parseFloat(price).toFixed(2) }}</h4>
        <h5>{{ marca }}</h5>
        <p>{{ desc }}</p>
        <router-link to='/'><img src='@/assets/cart.png' alt='cart' />Add to cart</router-link>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: [
        'name',
        'price',
        'marca',
        'desc'
    ]
}
</script>

<style scoped>
.productCard {
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
.productCard *{
    padding: 5px;
}
.productCard h5, .productCard a p{
    color: gray;
}
.productCard p{
    word-break: keep-all;
}
.productCard .slot img{
    height: 150px;
    object-fit: cover;
}
.productCard a{
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
.productCard a img{
    height: 24px;
    padding-right: 10px;
}
.productCard a:hover{
    filter: brightness(1.2);
}
</style>