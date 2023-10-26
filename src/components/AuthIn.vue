<script>
import { supabase } from '@/lib/supaclient.js'

export default {

    data() {
        return {
            loading: false,
            email: '',
            password: '',
        }
    },
    
    methods: {
         async onAuth() { 
            try {
                this.loading = true
                console.log("login1 ", this.email, this.password);
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: this.email,
                    password: this.password,
                })
                if (error) throw alert("Check your email for the login link!")
                
                if (data) {
                    console.log("auth ok: ", data);
                    this.$emit('logInCl');
                }
            } catch (error) {
                if (error instanceof Error) {
                console.log(error)
                }
            } finally {
                this.loading = false
            }
        }
    }

}
</script>

<template>
  <form class="form_auth" @submit.prevent="onAuth">
    <div >
      <input v-model="email" type="text" placeholder="email"/> 
      <input v-model="password" type="text" placeholder="password"/>
      <input
        type="submit"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>
  </form>
</template>

<style scoped>
    .form_auth {
        display: flex;
        align-items: center;
        border: 1px black;

    }
</style>