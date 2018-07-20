<template>
	<div class="regList">
		<ul>
			<li>
				<label>姓名：</label>
				<input type="text" class="ipttxt"  v-model="username" placeholder="请输入姓名"/>
			</li>
			<li>
				<label>密码：</label>
				<input type="password"  class="ipttxt"  placeholder="请输入密码"/>
			</li>
			<li>
				<label>确认密码：</label>
				<input type="text" class="ipttxt" placeholder="请确认密码"/>
			</li>
			<li>
				<label>性别：</label>
				<input type="text" class="ipttxt" placeholder="请选择"/>
			</li>
			<li>
				<label>手机号码：</label>
				<input type="text" class="ipttxt" placeholder="请输入手机号"/>
			</li>
			<li>
				<label>邮箱：</label>
				<input type="text" class="ipttxt" placeholder="请输入邮箱"/>
			</li>
		</ul>
		<div class="error" :class="{hide:hide}">错误：{{errorMsg}}</div>
		<a href="javascript:" class="button mt30">注册会员</a>
	</div>
</template>
<script>
	import layer from '../public/layer.vue'
	import {Validate} from  '../assets/js/validate.js'
	let lodash = require('lodash')
	let vm;
	export default{
		data(){
			return{
				validate:new Validate,
				value:"",
				pwd:'',
				hide:true,
				errorMsg:'',
				username:''
			}
		},
		component:[layer],
		created(){
			vm = this;
			//this.debouncedGetAnswer = lodash.debounce(this.name,3000)
		},
		watch:{
			'username':'name',
			deep:true
		},
		methods:{
			name:lodash.debounce(function(){
				let obj = {regexp: /^[A-Za-z0-9_\u4E00-\u9FA5]+$/,msg:"仅支持中文、英文和数字"};
				if(!obj.regexp.test(this.username)){
					vm.errorMsg = obj.msg;
					vm.hide=false;
				}else{
					vm.errorMsg = "输入正确";
					vm.hide=false;
				}
			},3000,"loading")
		}
	}
</script>