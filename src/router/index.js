import Vue from 'vue'
import Router from 'vue-router'
import center from '@/center'
import Balance from '@/components/balance'
import Get from '@/components/get'
import Success from '@/components/success'
import Error from '@/components/error'
import Wait from '@/components/wait'
import List from '@/components/list'
import Reg from  '@/components/reg'
import Select from '@/public/select'
Vue.use(Router)
export default new Router({
	mode:'history',
	routes: [
		{
		  path: '/',
		  name: 'Balance',
		  component: Balance
		},
		{
		  path:'/',
		  name:'center',
		  component:center,
		  children:[
			  {
				  path:'get',
				  name:'Get',
				  component:Get
			  },
			  {
				  path:'success',
				  name:'Success',
				  component:Success
			  },
			  {
				  path:'error',
				  name:'Error',
				  component:Error
			  },
			  {
				  path:'wait',
				  name:'Wait',
				  component:Wait
			  },
			  {
				  path:'list',
				  name:'List',
				  component:List
			  },
			  {
				  path:'reg',
				  name:'reg',
				  component:Reg
			  }
		  ]
		}
	]
})
