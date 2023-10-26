import { supabase } from '@/lib/supaclient.js'


export const loadTodos = async () => {
    const {data, error} = await supabase.from('todos').select();
 
    if(error){
     return console.error(error);
    }
    todos.set(data);
 }

 export const addItemPush = async (product_id, user_id) => {
    console.log("add data 1: ", product_id, " ", user_id);
    const { error } = await supabase
    .from('Order')
    .insert({product_id, user_id})
    console.log("add data 2: ", error);
 }

