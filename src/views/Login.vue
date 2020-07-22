<template>
  <div class='content'>
      <Card>
          <h1>Login</h1>
            <form id='login-form'>
                <div class='inputwrap'>
                    <i class='fas fa-user-alt'></i>
                    <input type='text' name='email' placeholder='example@example.com' autoFocus />
                </div>
                <div class='inputwrap'>
                    <i class='fas fa-lock'></i>
                    <input type='password' name='passwd' placeholder='password' />
                </div>
                <input type='submit' value='Log in' />
            </form>
            <router-link to='/register'>Register</router-link>
      </Card>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    name: 'Login',
    components:{
        Card
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
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid purple;
    transition: 0.2s ease;
}
#login-form input:not([type=submit]):focus{
    border-bottom: 5px solid greenyellow;
}

.inputwrap{
    display: flex;
    align-items: center;
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
</style>