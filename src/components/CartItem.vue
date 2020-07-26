<template>
    <div class='cartItem'>
        <button class='remove' @click='remove'>
            <img src='@/assets/delete.png' alt='delete'>
        </button>

        <p class='name'>{{ name }}</p>

        <div class='unitPrice'>
            <p>Unit price</p>
            <p>${{ parseFloat(price).toFixed(2) }}</p>
        </div>

        <div class='quantity'>
            <button class='plus'>
                <img src='@/assets/plus.png' alt='plus' @click='increment'>
            </button>
            <input type='number' :value='value' @change='update($event)'>
            <button class='minus'>
                <img src='@/assets/minus.png' alt='minus' @click='decrement'>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['value', 'name', 'price'],
    methods: {
        remove() {
            this.$emit('remove')
        },
        increment() {
            this.$emit('increment')
        },
        decrement() {
            this.$emit('decrement')
        },
        update(event) {
            this.$emit('update', event.target.value)
        }
    }
}
</script>

<style scoped>
.cartItem {
    padding: 20px 30px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    flex-direction: row;
}

.cartItem img {
    height: 100px;
    width: 100px;
    margin-right: 50px;
}

.remove {
    background: none;
    border: none;
    cursor: pointer;
}

.plus, .minus {
    width: 30px;
    height: 30px;
    background-color: rgb(196, 196, 196);
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.plus img, .minus img {
    width: 15px;
    height: 15px;
    margin: 0px;
}
.remove img {
    width: 18px;
    height: 17px;
    cursor: pointer;
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
}

.cartItem button:focus,
input:focus {
    outline: 0;
}

.description {
    padding-top: 20px;
    margin-right: 20px;
    width: 115px;
}
.description p {
    display: block;
    text-align: left;
    font-size: 14px;
    color: #43484d;
    font-weight: 400;
}
.name {
    align-self: center;
    margin-top: 20px;
    width: 170px;
    font-size: 14pt;
    text-align: start;
    font-weight: bold;
}

.unitPrice {
    width: 80px;
    padding-top: 20px;
    text-align: center;
    margin-right: 70px;
    font-size: 16px;
    color: #43484d;
    font-weight: 300;
}

.quantity {
    margin-right: 60px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
}

.quantity input {
    width: 30px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    background-color: rgb(230, 230, 230);
}

@media (max-width: 1007px){
    .cartItem:nth-child(1) {
        border:none;
    }
    .cartItem:nth-child(n) {
        border:none;
    }
    .cartItem{
        margin-bottom: 100px;
    }
}

@media (max-width: 549px){
    .cartItem{
        margin-bottom: 150px;
    }
}

@media (max-width: 429px){
    .cartItem{
        margin-bottom: 200px;
    }
}


@media (max-width: 359px){
    .remove img {
        margin-left: 30px;
        margin-bottom: 10px; 
    }

    .cartItem{
        margin-bottom: 300px;
    }
}
</style>