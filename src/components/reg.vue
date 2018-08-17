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
				<input type="text" class="ipttxt" v-model="form.spwd" placeholder="请确认密码"/>
			</li>
			<li>
				<label>性别：</label>
				<input type="text" class="ipttxt" placeholder="请选择"/>
			</li>
			<li>
				<label>手机号码：</label>
				<input type="text" class="ipttxt" v-model="form.number" placeholder="请输入手机号"/>
			</li>
			<li>
				<label>邮箱：</label>
				<input type="text" class="ipttxt" v-model="form.email" placeholder="请输入邮箱"/>
			</li>
			<li>
				<label>地点：</label>
				<span @click="selAddress">{{address}}</span>
			</li>
		</ul>
		<div>{{message}}</div>
		<div class="error" :class="{hide:hide}">错误：{{errorMsg}}</div>
		<a href="javascript:" class="button mt30" @click="addVip">注册会员</a>
		<selCity :hide.sync="hide" @area="area"></selCity>
	</div>
</template>
<script>
	import layer from '../public/layer.vue'
	import selCity from '../public/select.vue'
	import {Validate} from  '../assets/js/validate.js'
	import {Child} from '../assets/ts/geeter.js'
	console.log(Child)
	let lodash = require('lodash');
	let vm;
	export default{
		data(){
			return{
				validate:new Validate(),
				pwd:'',
				hide:false,
				errorMsg:'',
				address:'请选择省市区',
				hide:true,
				form:{
					username:'',
					pwd:'',
					spwd:'',
					number:'',
					email:''
				},
				message:''
			}
		},
		components:{layer,selCity},
		created(){
			vm = this;
			//var parent = new Parent("已审核");
			//var child=new Child(this.form.username);
		//	this.message = child.getinfo()
		},
		watch:{
			'form.username':'name',
			'form.pwd':'password',
			'form.spwd':'checkpwd',
			'form.number':'telphone',
			'form.email':'emailEvent',
			deep:true
		},
		methods:{
			area(val){
				this.address=val;
				this.hide=true;
			},
			name:lodash.debounce(function(){
				vm.errorMsg = this.validate.sw("username",this.form.username);
			},1000),
			password:lodash.debounce(function(){
				vm.errorMsg = this.validate.sw("pwd",this.form.pwd);
			},1000),
			checkpwd:lodash.debounce(function(){
				if(this.form.spwd!=this.form.pwd){
					vm.errorMsg=this.validate.sw("spwd",this.form.spwd);
				}
			},1000),
			telphone:lodash.debounce(function(){
				vm.errorMsg=this.validate.sw("number",this.form.number);
			},1000),
			emailEvent:lodash.debounce(function(){
				vm.errorMsg=this.validate.sw("email",this.form.email);
			},1000),
			addVip:function(){
				this.$axios.get(url,{params:this.form}).then((rs)=>{
					console.log(rs)
				})
			},
			selAddress(){
				this.hide=false;
			}
		}
	}
</script>
