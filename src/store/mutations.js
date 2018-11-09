/*import {
	INCREMENT,
	DECREMENT
} from './types.js'*/
// 定义所需的 mutations
 export const mutations={
	    INCREMENT(state) {
	        state.count++
	    },
	    DECREMENT(state) {
	        state.count--
	    }
 }