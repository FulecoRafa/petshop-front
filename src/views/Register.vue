<template>
  <div class='content'>
      <Card>
          <h1>Register</h1>
            <ProfileForm submit='Register'></ProfileForm>
            <router-link to='/login'>Login</router-link>
      </Card>
  </div>
</template>

<script>
import Card from '../components/Card'
import ProfileForm from '../components/forms/ProfileForm'

export default {
    name: 'Content',
    components: {
        Card,
        ProfileForm
    }
}
</script>

<style scoped>
#login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

#login-form *{
    margin: 15px;
    padding: 10px;
}

#login-form input:not([type=submit]){
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#login-form input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

#login-form input[type=file]{
    border: unset;
    background: unset;
}

#login-form input[name='phone']:invalid::after{
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

#login-form input[type=submit]{
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
#login-form input[type=submit]:hover{
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