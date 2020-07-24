<template>
   <form id='serviceForm'>
        <div class='inputwrap'>
            <span>Service name:</span>
            <input type='text' name='name' placeholder='Ex.: Shearing'/>
        </div>
        <div class='inputwrap'>
            <span>Price: $</span>
            <input type='number' step='0.01' name='price' placeholder='20.99'/>
        </div>
        <div class='inputwrap'>
            <span>Description:</span>
            <input type='text' name='description' placeholder='Describe your service'/>
        </div>
        <div class='inputwrap'>
            <span>Tags:</span>
            <input type='text' name='tags' placeholder='[tag,tag,tag]'/>
        </div>
        <input type='submit' value='Add'/>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
#serviceForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#serviceForm *{
    margin: 15px;
    padding: 10px;
}

#serviceForm input:not([type=submit]){
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#serviceForm input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

.inputwrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

#serviceForm input[type=submit]{
    background: none;
    font-weight: bolder;
    font-size: 20px;
    color: var(--maincolor);
    border: 3px solid var(--maincolor);
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s;
}
#serviceForm input[type=submit]:hover{
    background-color: var(--maincolor);
    color: var(--headercolor);
}
</style>