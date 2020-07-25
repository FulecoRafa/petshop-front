<!-- A rectangular card -->

<template>
    <div class='recCard'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'RecCard'
}
</script>

<style>
.recCard {
    background: whitesmoke;
    padding: 20px;
    width: 240px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    margin-right: 60px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.recCard *{
    padding: 5px;
}
.recCard h5, .recCard a p{
    color: gray;
}
.recCard p{
    word-break: keep-all;
}
.recCard .slot img{
    height: 150px;
    object-fit: cover;
}
.recCard button {
    background: var(--secondarycolor);
    width: 100%;
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.recCard button img{
    height: 24px;
    padding-right: 10px;
}
.recCard button:hover{
    filter: brightness(1.2);
}
.recCard a {
    background: var(--secondarycolor);
    width: 100%;
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.recCard a img{
    height: 24px;
    padding-right: 10px;
}
.recCard a:hover{
    filter: brightness(1.2);
}
</style>