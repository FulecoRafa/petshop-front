<template>
    <form id='profileForm'>
        <div class='inputwrap'>
            <h3>Name:</h3>
            <input type='text' name='name' placeholder='Full name' required autoFocus />
        </div>
        <div class='inputwrap'>
            <h3>Email address:</h3>
            <input type='email' name='email' placeholder='example@example.com' required />
        </div>
        <div class='inputwrap'>
            <h3>Address:</h3>
            <input type='text' name='address' placeholder='Florense Street, 23' required />
        </div>
        <div class='inputwrap'>
            <h3>Phone:</h3>
            <input type='text' name='phone' pattern='[0-9\(\)\- ]{16}' placeholder='(DD) 9 XXXX-XXXX' required />
        </div>
        <div class='inputwrap'>
            <h3>Password:</h3>
            <input type='password' name='passwd' min='6' required />
        </div>
        <div class='inputwrap'>
            <h3>Confirm Password:</h3>
            <input type='password' name='passwd2' :class='{passMismatch: mismatch}' required />
        </div>
        <input type='submit' :value="submit || 'Submit'">
    </form>
</template>

<script>
export default {
    name: 'ProfileForm',
    props: ['submit', 'mismatch']
}
</script>

<style scoped>
#profileForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#profileForm *{
    margin: 15px;
    padding: 10px;
}

#profileForm input:not([type=submit]){
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#profileForm input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

#profileForm input[name='phone']:invalid::after{
    content: 'Invalid phone number';
    color: red;
    font-size: 10px;
    
}

.inputwrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

#profileForm input[type=submit]{
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
#profileForm input[type=submit]:hover{
    background-color: var(--maincolor);
    color: var(--headercolor);
}

/* Style need the !important to appear */
.passMismatch{
    border: 3px solid red !important; 
}
.passMismatch:after{
    font-size: 10px !important;
    content: 'Passwords must match' !important;
}
</style>