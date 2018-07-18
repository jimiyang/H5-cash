<template>
	<div class="dateArea" :class="{hide:hide,anihide:anihide,anishow:anishow}">
			<div class="head">
				<div class="backBtn goback">返回</div>
				<h1 class="headTitle">{{title}}</h1>
				<div class="main"><a href="javascript:" class="save" @click="save">保存</a></div>
			</div>
			<section class="calendar">
				<ul class="selectedDate border">
					<li>
						<i>至</i>
						<h1><em></em>起始时间</h1>
						<p class="start" id="startTime">{{startMon}}月{{startDay}}日<label class="year">{{startYear}}年</label></p>
					</li>
					<li>
						<h1><em></em>结束时间</h1>
						<p class="end" id="EndTime">{{endMon}}月{{endDay}}日<label class="year">{{endYear}}年</label></p>
					</li>
				</ul>
				<table class="weekend" cellpadding="1" cellspacing="1">
					<tr>
						<td class="orange"><div>日</div></td>
						<td><div>一</div></td>
						<td><div>二</div></td>
						<td><div>三</div></td>
						<td><div>四</div></td>
						<td><div>五</div></td>
						<td class="orange"><div>六</div></td>
					</tr>
				</table>
				<div id="dateList" class="datelist" ref="datelist">	
					<div id="dateCenter" class="content">
						<div class='month' :year="item.year" :month="item.month" v-for="(item,index) in node">
							<h1 class='title'>{{item.year}}年{{item.month}}月</h1>
							<ul class="days">
								<li class="item" :day="it.time"  v-for="(it,idx) in item.daylist" v-if="idx % 7==6" >
									<div class="orange" :class="{cur:cur}"  @click="seltime($event)">{{it.day}}</div>
								</li>
								<li class="item" :day="it.time" v-else-if="idx % 7==0">
									<div class="orange" :class="{cur:cur}" @click="seltime($event)">{{it.day}}</div>
								</li>
								<li class="item" :day="it.time" v-else>
									<div class="gray" :class="{cur:cur}"  @click="seltime($event)">{{it.day}}</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
</template>
<script>
	let vm ;
	import Time from '../assets/js/date.js'
	import Bscroll from 'better-scroll';
	import {Dates} from '../assets/js/date'
	export default{
		data(){
			return{
				hide:false,
				anihide:false,
				anishow:false,
				title:'选择时间',
				node:[],
				tdlist:[],
				cur:false,
				obj:new Dates(),
				arr:[],
				startYear:new Date().getFullYear(),
				startMon:new Date().getMonth()+1,
				startDay:new Date().getDate(),
				endYear:new Date().getFullYear(),
				endMon:new Date().getMonth()+1,
				endDay:new Date().getDate(),
				height:''
			}
		},
		beforeCreate(){
			document.getElementsByTagName("body")[0].className="hidden";
		},
		created(){
			this.node = this.obj.init();
			this.$nextTick(() => {
				//this.height=(document.getElementsByClassName('month')[0].offsetHeight)*3-80
				this.scroll = new Bscroll(this.$refs.datelist,{
					momentum:true,
					click:true,
					taps: true,
					//startY:`-${this.height}`
				})
				//this.scroll.refresh();
			})
		},
		methods:{
			save(){
				this.anihide = true;
				this.anishow = false;
				vm =this;
				vm.$emit("start",`${this.startYear}-${this.startMon}-${this.startDay}`)
				vm.$emit("end",`${this.endYear}-${this.endMon}-${this.endDay}`)
				setTimeout(function(){
					vm.hide=true;
				},500)
			},
			seltime(e){
				let item = document.querySelectorAll("li[class='cur']");
				item.forEach((item)=>{
					document.querySelector("li[class='cur']").className="";
				})
				e.target.parentNode.className="cur";
				this.arr.push(e.target.parentNode.getAttribute("day"));
				let dayList=[];
				dayList= this.obj.sel(this.arr);
				let parent=document.getElementById("dateCenter");
				let start = this.arr[0].split("-");
				this.startYear=start[0];
				this.startMon=start[1];
				this.startDay=start[2];
				if (dayList.length>1){
					let end = this.arr[1].split("-");
					this.endYear=end[0];
					this.endMon=end[1];
					this.endDay=end[2];
					dayList.forEach((index,dayList)=>{
						parent.querySelector("li[day='"+index+"']").className="cur";
					})
					this.arr=[];
				}
			}
		},
		beforeDestroy(){
			document.body.removeAttribute("class","hidden");
		}
	}
</script>