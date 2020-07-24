<template>
    <div class='Calendar'>
        <SecondHeader title='Calendar'></SecondHeader>
        <div class='content'>
            <Calendar></Calendar>
        </div>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
    name: 'Schedule',
    components: {
        Calendar
    }
}
</script>

<style>

</style>