<template>
    <div class='services'>
        <SecondHeader title='Services'></SecondHeader>
        <div class='content'>
            <Card>
                <Calendar>
                </Calendar>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import Calendar from '@/components/Calendar'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'Services',
    components: {
        Card,
        Calendar,
        SecondHeader
    }
}
</script>

<style>

</style>