<template>
	<div class="maskForm"  :class="{hide:isHide}">
		<section class="showChose"></section>
		 <section class="address">
			<section class="title">
			  居住地址<span @click="close">取消</span>
			</section>
			<section class="title">
			  <div class="area">{{defaultProvice}}</div>
			  <div class="area">{{defaultCity}}</div>
			  <div class="area">{{defaultArea}}</div>
			</section>
			<div  ref="citynameList" class="citynameList">
				<ul class="content">
				   <li class="addList" :id="item.id" :p_id="item.p_id" v-for="(item,index) in proviceArr" @click="selCity(item)">{{item.name}}</li>
				</ul>
			</div>
		  </section>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll';
	export default{
		data(){
			return{
				defaultProvice:'',
				defaultCity:'',
				defaultArea:'',
				proviceArr:[],
				Data:[],
				isHide:true
			}
		},
		props:['hide'],
		watch:{
			hide(val){
				this.isHide=val;
				console.log(this.isHide)
			}
		},
		created(){
			let url = '../static/area.json';
			this.$axios.get(url).then((rs)=>{
				this.Data = rs.data;
				this.proviceArr = rs.data[0].provice;
				this.defaultProvice=this.proviceArr[0].name;
				this.defaultCity=rs.data[1].city[0].name;
				this.defaultArea=rs.data[2].area[0].name;
				this.$nextTick(() => {
					this.scroll = new Bscroll(this.$refs.citynameList,{
						momentum:true,
						click:true,
						taps:true
					})
				})
			})
		},
		methods:{
			close(){
				this.hide=true;
			},
			selCity(item){	
				this.proviceArr=[];
				if(item.p_id ==undefined && item.c_id==undefined){
					this.defaultProvice = item.name;
					for(var i=0;i<this.Data[1].city.length;i++){
						if(item.id==this.Data[1].city[i].p_id){
							this.proviceArr.push(this.Data[1].city[i]);
						}
					}
				}
				if(item.p_id!=undefined){
					this.defaultCity=item.name;
					for(var x=0;x<this.Data[2].area.length;x++){
						if(item.id==this.Data[2].area[x].c_id){
							this.proviceArr.push(this.Data[2].area[x])
						}
					}
				}
				if(item.c_id!=undefined){
					this.defaultArea =item.name;
				}
			}
		}
	}
</script>
