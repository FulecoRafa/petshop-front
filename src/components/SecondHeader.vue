<template>
    <header id='secondHeader'>
        <h1>{{ title }}</h1>
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'SecondHeader',
    props: ['title']
}
</script>

<style scoped>
#secondHeader{
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--secondarycolor);
    padding: none;
    color: var(--headercolor);
    font-weight: bolder;
}

#secondHeader h1{
    padding: 10px 60px 10px 20px;
}
</style>