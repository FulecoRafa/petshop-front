<template>
   <form id='serviceForm' @submit='submitFunc'>
        <div class='inputwrap'>
            <span>Service name:</span>
            <input type='text' name='name' placeholder='Ex.: Shearing' v-model='service.title'/>
        </div>
        <div class='inputwrap'>
            <span>Slug:</span>
            <input type='text' name='name' placeholder='shearing' v-model='service.slug'/>
        </div>
        <div class='inputwrap'>
            <span>Description:</span>
            <input type='text' name='description' placeholder='Describe your service' v-model='service.description'/>
        </div>
        <div class='inputwrap'>
            <span>Partner:</span>
            <input type='text' name='Partner' placeholder='Peter' v-model='service.partner'/>
        </div>
        <div class='inputwrap'>
            <span>Price: $</span>
            <input type='number' step='0.01' name='price' placeholder='20.99' v-model='service.price'/>
        </div>
        <div class='inputwrap'>
            <span>Hours</span>
            <input type='text' name='hours' placeholder='[11, 12, 13]' v-model='service.hours'/>
        </div>
        <input type='submit' :value="id ? 'Edit' : 'Add'"/>
    </form>
</template>

<script>
export default {
    name: 'ServiceForm',
    data: () => ({
        service: {
            title: '',
            slug: '',
            description: '',
            partner: '',
            price: 0,
            hours: '',
        },
        id: false
    }),
    methods: {
        submitFunc(event) {
            if(this.id) this.submitEdit(event)
            else this.submitAdd(event)
        },
        submitAdd(event){
            event.preventDefault()

            // Make request
            const thisService = this.service
            thisService.image = 'img' // TODO image src
            thisService.hours = eval(thisService.hours)

            const headers = {
                headers: {
                    auth:    localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }

            this.$http.post('http://localhost:9000/services', thisService, headers)
                .then(res => {
                    console.log(res)
                    this.$router.push('services')
                })
                .catch(err => {
                    console.log(err.response.data)
                    alert(err.response.data)
                })
        },
        submitEdit(event){
            event.preventDefault()
            console.log(event)
            // TODO
        }
    },
    mounted() {
        // TODO
    }
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