<template>
	<div class="template">
		<div class="title">
			<a href="">字体</a>
			<a href="">字号</a>
		</div>
		<div class="section clearfix">
			<div class="left" :class="{hide:ishide==false}">	
				<div :is="item.component"  v-for="item in items"></div>
			</div>
			<div class="left" ref="html" :class="{hide:ishide==true}">
				fdsafdas
			</div>
			<div class="right">
				<input type="button" value="输入框" @click="txtEvent('a-text')"/>
				<input type="button" value="输入区" @click="txtEvent('a-area')"/>
				<input type="button" value="复选按钮" @click="txtEvent('a-checkbox')"/>
				<input type="button" value="单选按钮" @click="txtEvent('a-radio')"/>
				<input type="button" value="下拉列表" @click="txtEvent('a-select')"/>
			</div>
		</div>
		<div class="footer">
			<a href="javascript:" :class="{active:iscur==0}" @click="change(0)">视图</a>
			<a href="javascript:" :class="{active:iscur==1}" @click="change(1)">代码</a>
		</div>
	</div>
</template>
<script>
	import txt from '../temp/text.vue'
	import area from '../temp/area.vue'
	import checkbox from '../temp/checkbox.vue'
	import radio from '../temp/radio.vue'
	import select from '../temp/select.vue'
	export default{
		data(){
			return{
				items:[],
				iscur:0,
				ishide:true
			}
		},
		components:{
			'a-text':txt,
			'a-area':area,
			'a-checkbox':checkbox,
			'a-radio':radio,
			'a-select':select
		},
		created(){
			console.log(this.iscur)
		},
		methods:{
			txtEvent(temp){
				this.items.push({
					'component': temp
				})
			},
			change(index){
				this.iscur = index;
				if(index==1){
					this.ishide=false;
					this.$refs.html.innerText="";
					this.$refs.html.innerText = document.body.innerHTML;
				}else{
					this.ishide=true;
				}
			}
		}
	}
</script>