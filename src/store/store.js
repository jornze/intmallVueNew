import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
//import mutations from './mutations'
Vue.use(Vuex)

const state={
	count:1000,
	allmcoin:0,
}
const mutations={
	    INCREMENT(state) {
	        state.count++
	    },
	    DECREMENT(state) {
	        state.count--
	    },
	    GETALLM(state,res){
	    	state.allmcoin=res.data.allMcoin
	    }
 }
// 创建 store 实例
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state   
})
