<template>
    <div>
        <SecondHeader title='Pay'></SecondHeader>
        <div class='content'>
            <Card>
                <Credit value='50'></Credit>
                <router-link to='' id='payButton'>Pay</router-link>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Credit from '@/components/Credit'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Pay',
    components: {
        Card,
        Credit,
        SecondHeader
    }
}
</script>

<style>
#payButton{
    background-color: var(--maincolor);
    color: white;
    font-weight: 800;
    padding: 2px 40px;
    cursor: pointer;
}
#payButton:hover{
    filter: brightness(1.2);
}
</style>