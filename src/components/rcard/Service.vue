<template>
    <RecCard class='service'>
        <slot></slot>
        <h3>{{ name }}</h3>
        <h4>${{ parseFloat(price).toFixed(2) }}</h4>
        <p>{{ desc }}</p>
        <p>Partner: {{ partner }}</p>
        <p>Hours: 
            <span v-for='(i, key) in hours' :key='key'>{{ i }}</span>
        </p>
        <router-link :to="{path: '/admin/serviceedit', query: {id, name, price, desc}}">Edit</router-link>
    </RecCard>
</template>

<script>
import RecCard from '@/components/rcard/RecCard'

export default {
    name: 'Service',
    props: ['name', 'slug', 'price', 'desc', 'partner', 'hours', 'id'],
    components: {
        RecCard
    }
}
</script>