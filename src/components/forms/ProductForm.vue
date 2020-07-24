<template>
    <form id='productForm'>
        <div class='inputwrap'>
            <span>Product name:</span>
            <input type='text' name='name' placeholder='Ex.: Dog food'/>
        </div>
        <div class='inputwrap'>
            <span>Price: $</span>
            <input type='number' step='0.01' name='price' placeholder='20.99'/>
        </div>
        <div class='inputwrap'>
            <span>Description:</span>
            <input type='text' name='description' placeholder='Describe your product'/>
        </div>
        <div class='inputwrap'>
            <span>Tags:</span>
            <input type='text' name='tags' placeholder='[tag,tag,tag]'/>
        </div>
        <div class='inputwrap'>
            <span>In stock:</span>
            <input type='number' name='stock'/>
        </div>
        <div class='inputwrap'>
            <span>Brand:</span>
            <input type='text' name='brand' placeholder='Ex.: Pedigree'/>
        </div>
        <input type='submit' value='Edit'>
    </form>
</template>

<script>
export default {
    name: 'Product'
}
</script>

<style scoped>
#productForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#productForm *{
    margin: 15px;
    padding: 10px;
}

#productForm input:not([type=submit]){
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#productForm input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

.inputwrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

#productForm input[type=submit]{
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
#productForm input[type=submit]:hover{
    background-color: var(--maincolor);
    color: var(--headercolor);
}
</style>