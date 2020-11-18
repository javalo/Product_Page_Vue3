const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium1: true
        }
    }
,
    methods:{
        updateCart(id){
            this.cart.push(id)
        }
    }
})
