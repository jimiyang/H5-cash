import {ajax as axios} from './api'
const url = '../static/'
function addForm(params){
	return axios.get(url+'getMerchantsFuzzy.json',{params:params})
		.then((rs) =>{
		   return rs
	})
}
export default{
	addForm
}