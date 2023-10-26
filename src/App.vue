

<template>
  <header>
    <NavBar
      :isAuth="isAuth"
      :backetCount="backet.length"
      @logout="logOut"
    ></NavBar>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/ui/NavBar.vue"
import { supabase } from '@/lib/supaclient.js'
import {addItemPush} from "./lib/supaMethods.js"

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isAuth: false,
      session: [],
      backet: [],
    }
  },
  methods: {
    logOut() {
      this.isAuth= false;
    },
    addItem(item) {
      addItemPush(item.detail.id, this.session.user.id);
      console.log("added mfk!! ", item);
      this.loadBacket();
      //this.backet.push(item.detail);
    },
    async loadBacket() {
          const dataP = await supabase.from('Orders').select();
          if (dataP) {this.backet = dataP.data;
          console.log("back:", this.backet.length)}
    }
  },

  mounted() {
      supabase.auth.getSession().then(({ data }) => {
        console.log("data 1 ", data);
        this.session = data.session
        if (this.session) {this.isAuth=true;}
      })

      supabase.auth.onAuthStateChange(  (_, _session) => {
        console.log("data 2 ", _session);
        //const user = _session?.user;
        if (_session?.user) {
          this.isAuth=true;
          this.loadBacket();
        }
      })


      document.addEventListener('addItemEvent', this.addItem);
      

  }
}


</script>

<style scoped>

</style>
