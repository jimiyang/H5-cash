<template>
	<div class="template">
		<div class="title">
			<a href="javascript:" class="font" @click="font"><字号></a>
		</div>
		<div class="section clearfix">
			<div class="left" ref="view"  :style="{fontSize:fontSize+ 'px'}" :class="[{hide:ishide==false},fon]">	
				<div :style="{fontSize:fontSize+ 'px' }" :is="item.component"  v-for="item in items"></div>
			</div>
			<div class="left" :class="{hide:ishide==true}">
				{{content}}
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
		<a-font :hide.sync="hide" @size="getSize"></a-font>
	</div>
</template>
<script>
	import txt from '../temp/text.vue'
	import area from '../temp/area.vue'
	import checkbox from '../temp/checkbox.vue'
	import radio from '../temp/radio.vue'
	import select from '../temp/select.vue'
	import font from '../temp/font.vue'
	export default{
		data(){
			return{
				items:[],
				iscur:0,
				ishide:true,
				content:'',
				hide:true,
				fon:'',
				fontSize:''
			}
		},
		components:{
			'a-text':txt,
			'a-area':area,
			'a-checkbox':checkbox,
			'a-radio':radio,
			'a-select':select,
			'a-font':font
		},
		created(){
			//console.log(this.iscur)
		},
		methods:{
			getSize(value){
				this.fontSize=value;
				console.log(this.fontSize)
			},
			txtEvent(temp){
				this.items.push({
					'component': temp
				})
			},
			change(index){
				this.iscur = index;
				if(index==1){
					this.ishide = false;
					this.content = "";
					if(this.$refs.view.innerHTML!=""){
						this.content = this.$refs.view.innerHTML;
					}
				}else{
					this.ishide=true;
				}
			},
			font(){
				this.hide=false;
			}
		}
	}
</script>