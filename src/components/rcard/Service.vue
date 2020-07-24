<template>
    <RecCard>
        <slot></slot>
        <h3>{{ name }}</h3>
        <h4>${{ parseFloat(price).toFixed(2) }}</h4>
        <p>{{ desc }}</p>
        <router-link to='/admin/serviceedit'>Edit</router-link>
    </RecCard>
</template>

<script>
import RecCard from '@/components/rcard/RecCard'

export default {
    name: 'Service',
    props: ['name', 'price', 'desc'],
    components: {
        RecCard
    }
}
</script>