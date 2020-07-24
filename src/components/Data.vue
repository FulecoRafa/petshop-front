<template>
    <div class='dataWrap'>
        <h3 v-if='label'>{{ label }}:</h3>
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

/* Reducing the space between the label and the data */
.datawrap>h3{
    margin-right: 0px;
}
.datawrap>p{
    margin-left: 0px;
}

</style>