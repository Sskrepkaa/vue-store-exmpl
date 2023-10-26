<template>
    <div class="item" >
        <img :src="image" alt="image"/>
        <h4>{{ item.title }}</h4>
        <p>{{ item.price }}</p>
        <button @click="clickItem"> Add in backet</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                image: "",
            }
        },
        props: {
            item: {
                type: Object,
                default: null
            }
        },

        methods: {
            clickItem() {
                
                const customEvent = new CustomEvent('addItemEvent', { detail: this.item });
                document.dispatchEvent(customEvent); // --> App.vue
                
                console.log("add item: ", this.item.title);     //   logs 
            }
        },

        mounted(){
            this.image = "../src/img/" + this.item.img + ".png";
        }
    }
</script>

<style  scoped>
    .item{
        margin: 10px;
        padding: 15px;
        display: grid;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>