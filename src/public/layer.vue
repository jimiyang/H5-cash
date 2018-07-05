<template>
		<div id="layerMsg" class="layerMsg " :class="{hide:hide}">
			<div class="layer"></div>
			<div class="msgBox">
				<p class="border">{{message}}</p>
				<a href="javascript:" id="closeMsg" @click="close">确定</a>
			</div>
		</div>
</template>
<script>
	export default{
		data:function(){
			return{
				isHide:false,
				hide:true
			}
		},
		props:['message'],
		methods:{
			close(){
				this.hide=true;
			} 
		}
		
	}
</script>