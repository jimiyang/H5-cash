import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
	count:0,
	date:function(time){
		let date = new Date(time);  
		let y = date.getFullYear();    
		let m = date.getMonth() + 1;    
		m = m < 10 ? ('0' + m) : m;    
		let d = date.getDate();    
		d = d < 10 ? ('0' + d) : d;    
		let h = date.getHours();  
		h = h < 10 ? ('0' + h) : h;  
		let minute = date.getMinutes();  
		let second = date.getSeconds();  
		minute = minute < 10 ? ('0' + minute) : minute;    
		second = second < 10 ? ('0' + second) : second;   
		return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
	},
	lock:function(obj){ //防止重复提交
		//if(time==undefined){time=3000}
		let nowTime = new Date().getTime();
		let clickTime = obj.attr("ctime");
		if( clickTime != 'undefined' && (nowTime - clickTime < 3000)){
			return false;
		}else{
			obj.attr("ctime",nowTime);
			return true;
		}			
	}
}
const mutations={
	cremt(state){
		console.log(state.count+1);
	}
}
export default new Vuex.Store({
	state,
	mutations
});