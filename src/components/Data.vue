<template>
    <div class='dataWrap'>
        <h3>{{ label }}:</h3>
        <p><slot></slot></p>
    </div>
</template>

<script>
export default {
    name: 'Data',
    props: ['label']
}
</script>

<style scoped>
.datawrap{
    display: flex;
    align-items: center;
    justify-content: unset;
    width: 100%;
}
</style>