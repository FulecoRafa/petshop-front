<template>
    <header id='secondHeader'>
        <h1>{{ a }}</h1>
        <slot></slot>
    </header>
</template>

<script>
</script>

<style scoped>
    #secondHeader {
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
    #secondHeader route-link{
        background-color: white;
        color: var(--maincolor);
        padding: 10px;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        margin-left: 15px;
    }
    #secondHeader route-link:hover{
        filter: brightness(1.2);
        box-shadow: 1px 1px 8px rgba(0,0,0,0.7);
    }
</style>