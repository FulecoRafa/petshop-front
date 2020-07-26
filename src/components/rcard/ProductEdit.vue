<!-- TODO Translate 'marca' -->

<template>
    <RecCard>
        <div class='slot'><slot></slot></div>
        <h3>{{ name }}</h3>
        <h4>${{ parseFloat(price).toFixed(2) }}</h4>
        <h5>{{ marca }}</h5>
        <p>{{ desc }}</p>
        <router-link :to="{path: '/admin/productedit', query: {id}}">Edit</router-link>
    </RecCard>
</template>

<script>
import RecCard from '@/components/rcard/RecCard'

export default {
    name: 'Product',
    props: [
        'id',
        'name',
        'price',
        'marca',
        'desc'
    ],
    components: {
        RecCard
    }
}
</script>