<template>
    <form id='profileForm' @submit="submitFunc">
        <div class='inputwrap'>
            <h3>Name:</h3>
            <input type='text' name='name' placeholder='Full name' required autoFocus v-model="user.name" />
        </div>
        <div class='inputwrap'>
            <h3>Email address:</h3>
            <input type='email' name='email' placeholder='example@example.com' required v-model="user.email" />
        </div>
        <div class='inputwrap'>
            <h3>Address:</h3>
            <input type='text' name='address' placeholder='Florense Street, 23' required v-model="user.address" />
        </div>
        <div class='inputwrap'>
            <h3>Phone:</h3>
            <input type='text' name='phone' pattern='[0-9\(\)\- ]{16}' placeholder='(DD) 9 XXXX-XXXX' required v-model="user.phone" />
        </div>
        <div class='inputwrap'>
            <h3>Password:</h3>
            <input type='password' name='passwd' min='6' required v-model="user.passwd" />
        </div>
        <div class='inputwrap'>
            <h3>Confirm Password:</h3>
            <input type='password' name='passwd2' :class="{passMismatch: !ok}" required v-model="passwd2" />
        </div>
        <input type='submit' :value="submit || 'Submit'">
    </form>
</template>

<script>
export default {
    name: 'ProfileForm',
    props: ['submit'],
    data:()=>({
      user:{
        name:'',
        email:'',
        address:'',
        phone:'',
        passwd:''
      },
      passwd2:'',
      ok: false
    }),
    methods:{
      submitFunc(event){
        event.preventDefault();
        if(!this.ok) return alert("Passwords must match");
        // Make request
        if(this.submit == 'Register'){
          let thisUser = this.user;
          thisUser.image = "@/assets/profile.png"
          thisUser.permission = 'user';
          this.$http.post("http://localhost:9000/client", thisUser)
            .then(res=>{
              console.log(res);
              this.$router.push('/login');
            })
            .catch(err=>{
              alert(err.response.data);
            });
        }else if(this.submit == 'Edit'){
          console.log('Edit');
        }
      }
    },
    watch:{
      passwd2: function(){
        this.ok = (this.user.passwd == this.passwd2);
      },
      'user.phone': function (){
        this.user.phone = this.user.phone.replace(/(\D|\s)/g, '');
        this.user.phone = this.user.phone.replace(/(\d{1,2})?(\d)?(\d{1,4})?(\d{1,4})?/mi, '($1) $2 $3-$4');
        this.user.phone = this.user.phone.replace(/[^\d]+$/mi, '')
      }
    }
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
</style>