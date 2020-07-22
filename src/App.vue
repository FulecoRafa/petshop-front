<template>
    <div id='app'>
        <router-view/>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
    --headercolor: rgb(247, 247, 247);
    --maincolor: rgb(0, 39, 212);
    --secondarycolor: rgb(62, 91, 223);
    --cardcolor: white /*rgb(230, 230, 230)*/;
    --screen: linear-gradient(rgba(113, 103, 202, 0.3), rgba(113, 103, 202, 0.3));
    --gradient: linear-gradient(rgb(0, 39, 212), rgb(62, 91, 223));
    
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body{
    overflow-x: hidden;
    background: var(--cardcolor);
}
a{
    color: inherit;
    text-decoration: none;
}
a:visited{
    color: inherit;
    text-decoration: none;
}
.content{
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media (max-width: 500px){
    .content{
        padding-left: 0;
    }
}
</style>
