<!-- TODO Translate 'marca' -->

<template>
    <RecCard>
        <div class='slot'><slot></slot></div>
        <h3>{{ name }}</h3>
        <h4>{{ admin }}</h4>
    </RecCard>
</template>

<script>
import RecCard from '@/components/rcard/RecCard'

export default {
    name: 'User',
    props: [
        'name',
        'admin'
    ],
    components: {
        RecCard
    }
}
</script>