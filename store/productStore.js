import { defineStore } from "pinia";

export const UseProductStore = defineStore('ProductStore', ()=>{
    const products = 
    [
        {
        id:"1",
        name:"",
        description:"",
        detail:"",
        img:"",
        category:""  
        }
]
    const services = [


    ]

    const asignar_p_selected = (product)=> {
          product_selected.value = product
          navigateTo('/producto')
    }

    const product_selected = ref({})
})