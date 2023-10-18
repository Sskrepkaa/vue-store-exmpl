<template>
  <div>
    <h3>maincard here</h3>
  </div>
  <div>
    <ul>
      <li>first</li>
      <li v-for="product in this.products" :key="product.id">title: {{ product.title }}, price: {{ product.price }}</li>
    </ul>
  </div>
</template>

<script>
  
  import { supabase } from '@/lib/supaclient.js'

  export default {
    
    data() {
      return {
        products: []
      }
    },
    methods: {
        async getProducts() {
          try {
            const dataP = await supabase.from('Product').select();
            console.log("f: ", dataP);
          this.products = dataP.data;
          console.log("p: ", this.products);

          }
          catch(e) {
            console.log("err ", e)
            
          }
          
        }
    },

    mounted(){
      this.getProducts();
    }
  }
</script>

<style lang="scss" scoped>

</style>