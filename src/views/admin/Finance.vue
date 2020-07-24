<template>
    <div class='finace'>
        <SecondHeader title='Finances'></SecondHeader>
        <div class='content'>
            <Card>
                <h1>Selling</h1>
                <div class='lineWrap'>
                    <div class='wrap'>
                        <h2>This month:</h2>
                        <h1>${{ parseFloat(selling).toFixed(2) }}</h1>
                    </div>
                    <div class='wrap'>
                        <img src='@/assets/graph-1.png' alt='gains'>
                    </div>
                </div>
            </Card>
            <Card>
                <h1>Services rendered</h1>
                <div class='lineWrap'>
                    <div class='wrap'>
                        <h2>This month:</h2>
                        <h1>{{ serviceRendered }}</h1>
                    </div>
                    <div class='wrap'>
                        <img src='@/assets/graph-2.png' alt='services'>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Finance',
    components:{
        Card,
        SecondHeader
    },
    data: ()=>({
        selling: 302.95,
        serviceRendered: 19
    })
}
</script>

<style>
/*
.lineWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.lineWrap .wrap {
    padding: 50px;
}
*/
</style>