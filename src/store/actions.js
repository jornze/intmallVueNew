import axios from 'axios'
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
export const allMcoin=({commit,state})=>{
	axios.get('../static/data.json').then((res)=>{
		commit('GETALLM',res)
	}).catch((err)=>{
		console.log(err)
	})
}
