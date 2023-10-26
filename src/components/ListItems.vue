<template>
    
    <div class="itemlist" v-for="item in items">
        <Item
            :item="item"
        />
    </div>
</template>

<script>
import Item from "./Item.vue"
import UiDialog from "@/components/ui/uiDialog.vue"
    export default {
        components: {
            Item, UiDialog,
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
        props:{
            items: {
                type: Array,
                default: [] 
            }
        }
    }
</script>

<style scoped>
    .itemlist {
        display:flex;
    }
</style>