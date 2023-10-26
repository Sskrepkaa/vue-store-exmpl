<template>
  
  <div>
    <h3>maincard here</h3>
  </div>
  <div>
    <ul>
      <li v-for="product in this.products" :key="product.id">title: {{ product.title }}, price: {{ product.price }}</li>
    </ul>
  </div>
  <listItems
    :items="products"
  />
  
</template>

<script>
  
  import { supabase } from '@/lib/supaclient.js'
  import AuthIn from "@/components/AuthIn.vue"
  import listItems from "@/components/ListItems.vue"

  export default {

    components: {
      AuthIn, listItems
    },
    
    data() {
      return {
        products: [],
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
            console.log("err ", e);
          }
        },
        
    },

    mounted(){
      this.getProducts();
    }
  }
</script>

<style lang="scss" scoped>

</style>