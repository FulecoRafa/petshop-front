<!-- TODO Translate 'marca' -->

<template>
    <div class='card'>
        <slot></slot>
        <h3>{{ name }}</h3>
        <h4> ${{ parseFloat(price).toFixed(2) }}</h4>
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
    .card {
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
    .card *{
        padding: 5px;
    }
    .card h5, .card p{
        color: gray;
    }
    .card p{
        word-break: keep-all;
    }
    .card slot{
        background:red;
        height: 150px;
        object-fit: cover;
    }
    .card router-link{
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
    .card router-link img{
        height: 24px;
        padding-right: 10px;
    }
    .card router-link:hover{
        filter: brightness(1.2);
    }

    SecondHeader router-link{
        background-color: white;
        color: var(--maincolor);
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        margin-left: 15px;
    }

    SecondHeader router-link:hover{
        filter: brightness(1.2);
        box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
    }
</style>