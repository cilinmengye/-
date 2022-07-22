import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            isSun:true,
        }
    },
    mutations: {
        CHANGEISSUN(state,value){
            state=value;
        }
    },
    actions:{

    }
})

export default store