<template>
   <form id='serviceForm' @submit='submitFunc'>
        <Data class='profile-pic'>
            <img v-if='service.image' :src='require(`@/assets/${service.image}`)' alt='pet'>
            <img v-else src='@/assets/biscuit.png' >
        </Data>
        <div class='inputwrap'>
            <span>Image:</span>
            <select name='image' v-model='service.image'>
                <option value='doctor.png'>Doctor</option>
                <option value='hair.png'>Hairbrush</option>
                <option value='shampoo.png'>Shampoo</option>
            </select>
        </div>
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
            image: 'doctor.png',
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

            // Make request
            const thisService = this.service
            thisService.hours = eval(thisService.hours)

            const headers = {
                headers: {
                    auth: localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }

            this.$http.put('http://localhost:9000/services/' + this.id, thisService, headers)
                .then (res => {
                    console.log(res)
                    this.$router.push('services')
                })
                .catch (err => {
                    alert(err.response.data)
                })
        }
    },
    mounted() {
        if(this.$route.query.id){
            this.id = this.$route.query.id
            
            const headers = {
                headers: {
                    auth: localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }
            this.$http.get('http://localhost:9000/services/id/' + this.id, headers)
                .then(res => {
                    const {
                        image,
                        title,
                        slug,
                        description,
                        partner,
                        price,
                        hours
                    } = res.data

                    this.service.image = image
                    this.service.title = title
                    this.service.slug = slug
                    this.service.description = description
                    this.service.partner = partner
                    this.service.price = price
                    this.service.hours = `[${hours.toString()}]`
                })
                .catch(err =>{
                    alert(err.response.body)
                })
        }
    }
}
</script>

<style scoped>
#serviceForm img{
  max-width: 200px;
  max-height: 200px;
}

#serviceForm select{
    background-color: white;
    font-size: 16px;
    max-width: 40%;
    border: none;
    border-radius: 3px;
    border: 5px solid purple;
    transition: 0.2s ease;
}

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