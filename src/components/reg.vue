<template>
	<div class="regList">
		<ul>
			<li>
				<label>姓名：</label>
				<input type="text" class="ipttxt"  v-model="form.username" placeholder="请输入姓名"/>
			</li>
			<li>
				<label>密码：</label>
				<input type="password"  class="ipttxt" v-model="form.pwd" placeholder="请输入密码"/>
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
				validate:new Validate(),
				pwd:'',
				hide:false,
				errorMsg:'',
				form:{
					username:'',
					pwd:''
				}
				
			}
		},
		component:[layer],
		created(){
			vm = this;
		},
		watch:{
			'form.username':'name',
			'form.pwd':'password',
			deep:true
		},
		methods:{
			name:lodash.debounce(function(){
				vm.errorMsg = this.validate.sw("username",this.form.username);
			},1000),
			password:lodash.debounce(function(){
				vm.errorMsg = this.validate.sw("pwd",this.form.pwd);
			},1000)
		}
	}
</script>