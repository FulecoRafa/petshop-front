<template>
    <li class='menuItem'>
        <router-link :to='to'>
            <slot></slot>
            <h4>{{ label }}</h4>
            <div v-if='val && val > 0' class='pop'>{{ val }}</div>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['label', 'to', 'val']
}
</script>

<style scoped>
.menuItem {
    padding: 5px 20px;
    margin: 10px 0;
    background: var(--secondarycolor);
    cursor: pointer;
}
.menuItem:hover {
    filter: brightness(1.2);
}
.menuItem a {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.menuItem img {
    height: 50px;
    padding-left: 25px;
}
.pop {
    position: absolute;
    left: 2%;
    padding: 3px 7px;
    background: red;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    transform: translate(30%, -70%);
}
</style>