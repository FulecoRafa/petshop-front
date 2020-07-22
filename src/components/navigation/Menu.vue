<template>
    <div class='menu'>
        <router-link :to='to'>
            <div id='user'>
                <h4>{{ username }}</h4>
                <slot name='userImage'></slot>
            </div>
        </router-link>
        
        <div class='dropdown'>   
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Menu',
    props:['username', 'to']
}
</script>

<style scoped>
#user{
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}
#user:hover{
    background-color: rgba(255,255,255,0.3);
}

#user img{
    height: 50px;
    padding-left: 25px;
} 

.menu:hover .dropdown{
    display: block;
}


.dropdown {
    position: absolute;
    top: 60px;
    background: var(--secondarycolor);
    z-index: 100000;
    display: none;
}

.dropdown ul{
    list-style: none;
}
</style>