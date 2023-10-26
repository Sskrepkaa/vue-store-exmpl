<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">MyStore</h3>
        <div v-if="!isAuth" class="nav_btns">
            <button @click="dialogVisible=true">Sing in</button>
            <button style="margin-left: 15px;">Sing up</button>
        </div>
        <div v-else class="auth">
            <p>auth</p>
            <button style="margin-left: 15px;">backet: {{ backetCount }}</button>
            <button @click="logOut" style="margin-left: 15px;">Log out</button>
        </div>
    </div>
    <UiDialog v-model:show="dialogVisible">
      <AuthIn
      @logInCl="logInClick"
    />
    </UiDialog>
</template>

<script>
    import { supabase } from '@/lib/supaclient.js'
    import AuthIn from "@/components/AuthIn.vue"
    import UiDialog from "@/components/ui/uiDialog.vue"
    export default {
        components: {
            AuthIn, UiDialog,
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
        props: {
            isAuth: {
                type: Boolean,
                default: false
            },
            backetCount: {
                type: Number,
                default: 0
            }
        },
        methods: {
            async logOut() {
                const { error } = await supabase.auth.signOut();
                console.log("log out");
                this.$emit('logout');
            },
            logInClick() {
                this.dialogVisible = false;
            },
        }
    }
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 2rem;
        background-color: rgb(191, 248, 248);
    }
    .auth {
        display: flex;

    }
    .nav_btns {
        margin-left: 10px;
    }
</style>