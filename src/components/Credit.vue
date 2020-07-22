<template>
    <div class='credit'>
        <div id='cardFront'>
            <div class='paying'>
                <h3>Paying: <span>${{ parseFloat(value).toFixed(2) }}</span></h3>
            </div>
            <img src='@/assets/commerce.png' alt='card' class='cardImage'>
            <h5 class='label'>Card number:</h5>
            <input type='text' id='name' placeholder='XXXX XXXX XXXX XXXX'>
            <h5 class='holderLabel'>Card holder:</h5>
            <h5 class='expirationLabel'>Expiration:</h5>
            <input type='text' class='holder' placeholder='FULL NAME'>
            <input type='text' class='month' placeholder='MM'>
            <input type='text' class='year' placeholder='YY'>
            <div class='cvv'>
                <h5>CVV:</h5>
                <input type='text' placeholder='XXX'>
            </div>
        </div>
        <div id='cardBack'>
            <div class='tarjeta'></div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Credit',
    props: ['value']
}
</script>

<style scoped>
.credit{
    position: relative;
    background: inherit;
    width: 30vw;
    height: 20vw;
}

#cardFront{
    background: rgb(107, 120, 238);
    width: 75%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    color: white;
    display: grid;
    grid-template-columns: repeat(5,18%);
    grid-gap: 2%;
    justify-items: start;
    padding: 20px 10px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
    z-index: 3;
}

#cardFront input{
    background: none;
    border: none;
    color: white;
}

.paying{
    display: inline;
    font-size: 15px;
    grid-column: 1 /3;
}
.paying span{
    font-weight: normal;
}

.cardImage{
    height: 60px !important;
    grid-column: 5/6;
}

.label{
    grid-column: 1/6;
}

#name{
    font-size: 15px;
    height: 20px;
    grid-column: 1/6;
}

.holderLabel{
    grid-column: 1/3;
    white-space: nowrap;
}

.expirationLabel{
    grid-column: 3/6;
}

.holder{
    grid-column: 1/4;
}

.month{
    grid-column: 4/5;
}

.year{
    grid-column: 5/6;
}

#cardBack{
    background: rgb(107, 120, 238);
    width: 75%;
    height: 50%;
    position: absolute;
    top: 60%;
    left: 60%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    color: white;
    display: grid;
    grid-template-columns: repeat(5,18%);
    grid-gap: 2%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
    justify-items: start;
    padding: 20px 10px;
    z-index: 2;
}

.tarjeta{
    position: absolute;
    background: silver;
    width: 100%;
    height: 23%;
    margin-top: 5%;
}

.cvv{
    width: 20%;
    position: absolute;
    top: 95%;
    left: 103%;
    font-size: 15px;
    text-align: left;
}
.cvv input{
    width: 50%;
    background: none;
    border: none;
    color: white;
}

@media (max-width: 1200px){
    .expirationLabel{
        grid-row: 6/7;
        grid-column: 1/7;
    }
    .month{
        grid-column: 1/2;
        grid-row: 7/8;
    }
    .year{
        grid-column: 2/3;
        grid-row: 7/8;
    }
    .credit{
        width: 40vw;
        height: 35vw;
    }
    .cardImage{
        height: 50px !important;
    }
    
}

@media (max-width: 1000px){
    .credit{
        width: 50vw;
        height: 40vw;
    }
}

@media (max-width: 900px){
    .credit{
        width: 60vw;
        height: 50vw;
    }
}

@media (max-width: 700px){
    .credit{
        width: 80vw;
        height: 75vw;
    }
    /* .cvv{
        position: absolute;
        top: 70%;
        left: 70%;
    } */
}
</style>