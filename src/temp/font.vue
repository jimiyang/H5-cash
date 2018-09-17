<template>
	<div class="font-box" :class="{hide:ishide}">
		<h1>请选择字号大小</h1>
		<label :class="{seled:issel==item}" v-for="(item,index) in fontlist" v-if="item >11" @click="selFont(item)">{{item}}号</label>
		<div class="btn-box">
			<a href="javascript:" @click="get">确定</a>
			<a href="javascript:">重置</a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				fontlist:50,
				ishide:true,
				issel:0
			}
		},
		props:['hide'],
		methods:{
			selFont(item){
				this.issel = item;
			},
			get(){
				this.$emit('size',this.issel);
				this.$emit('update:hide',true);
			}
		},
		watch:{
			hide(value){
				this.ishide = value;
			}
		}
	}
</script>