<template>
		<div id="layerMsg" class="layerMsg" :class="{hide:isHide}">
			<div class="layer"></div>
			<div class="msgBox">
				<p class="border">{{message}}</p>
				<a href="javascript:" id="closeMsg" @click.stop="close">确定</a>
			</div>
		</div>
</template>
<script>
	let status;
	export default{
		props:['message','hide'],
		data(){
			return{
				isHide:true
			}
		},
		methods:{
			close(){
				this.$emit('update:hide',true);
			} 
		},
		watch:{
			hide(val){
				this.isHide = val;
			}
		}
	}
</script>