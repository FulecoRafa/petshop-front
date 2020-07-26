<template>
    <form id='productForm' @submit='submitFunc'>
        <div class='inputwrap'>
            <span>Product name:</span>
            <input type='text' name='name' placeholder='Ex.: Dog food' v-model='product.title' required>
        </div>
        <div class='inputwrap'>
            <span>Slug:</span>
            <input type='text' name='name' placeholder='Ex.: dog-food' v-model='product.slug' required>
        </div>
        <div class='inputwrap'>
            <span>Description:</span>
            <input type='text' name='description' placeholder='Describe your product' v-model='product.description' required>
        </div>
        <div class='inputwrap'>
            <span>Price: $</span>
            <input type='number' step='0.01' name='price' placeholder='20.99' v-model='product.price' required>
        </div>
        <div class='inputwrap'>
            <span>Tags:</span>
            <input type='text' name='tags' placeholder="['tag','tag','tag']" v-model='product.tags' required>
        </div>
        <!--
        <div class='inputwrap'>
            <span>Brand:</span>
            <input type='text' name='brand' placeholder='Ex.: Pedigree'/>
        </div>
        -->
        <input type='submit' :value="id ? 'Edit' : 'Add'">
    </form>
</template>

<script>
export default {
    name: 'Product',
    data: () => ({
        product: {
            title: '',
            slug: '',
            description: '',
            price: 0,
            tags: '',
            
        },
        id: false
    }),
    methods: {
        submitFunc(event) {
            if(this.id) this.submitEdit(event)
            else this.submitAdd(event)
        },
        submitAdd(event) {
            event.preventDefault()

            const thisProduct = this.product
            thisProduct.tags = eval(thisProduct.tags)

            const headers = {
                headers: {
                    auth:    localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh') 
                }
            }
            this.$http.post('http://localhost:9000/products', thisProduct, headers)
                .then(res => {
                    console.log(res)
                    this.$router.push('shop')
                })
                .catch(err => {
                    alert(err.response.data)
                })

        },
        submitEdit(event) {
            event.preventDefault()
            console.log(event)

            const thisProduct = this.product
            thisProduct.tags = eval(thisProduct.tags)

            const headers = {
                headers: {
                    auth:    localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh') 
                }
            }

            this.$http.put('http://localhost:9000/products/' + this.id, thisProduct, headers)
                .then(res => {
                    console.log(res)
                    this.$router.push('shop')
                })
                .catch(err => {
                    alert(err.response.data)
                })
        },
        tagsToString(tags) {
            let str = '['
            for(let i in tags) {
                str += `'${i}', `
            }
            str = str.slice(0, -2)
            str += ']'
            return str
        }
    },
    mounted() {
        if(this.$route.query.id) {
            this.id = this.$route.query.id

            const headers = {
                headers: {
                    auth: localStorage.getItem('auth'),
                    refresh: localStorage.getItem('refresh')
                }
            }
            this.$http.get('http://localhost:9000/products/id/' + this.id, headers)
                .then(res => {
                    const {
                        title,
                        slug,
                        description,
                        price,
                        tags
                    } = res.data
                    console.log(res.data)

                    this.product.title = title
                    this.product.slug = slug
                    this.product.description = description
                    this.product.price = price
                    
                    this.product.tags = this.tagsToString(tags)
                })
                .catch(err => {
                    alert(err.response.body)
                })
        }
    }
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