<template>
	<div class="dateArea" :class="{hide:hide,anihide:anihide,anishow:anishow}">
			<div class="header">
				<div class="backBtn goback">返回</div>
				<h1 class="headTitle">{{title}}</h1>
				<div class="main"><a href="javascript:" class="save" @click="save">保存</a></div>
			</div>
			<section class="calendar">
				<ul class="selectedDate border">
					<li>
						<i>至</i>
						<h1><em></em>起始时间</h1>
						<p class="start" id="startTime">12月13日<label class="year">2018年</label></p>
					</li>
					<li>
						<h1><em></em>结束时间</h1>
						<p class="end" id="EndTime">12月13日<label class="year">2018年</label></p>
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
								<li  v-for="(it,idx) in item.daylist" v-if="idx % 7==6" >
									<div class="orange" @click="seltime">{{it.day}}</div>
								</li>
								<li  v-else>
									<div class="gray" @click="seltime">{{it.day}}</div>
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
	import date from '../assets/js/date.js'
	import Bscroll from 'better-scroll';
	export default{
		data(){
			return{
				hide:true,
				anihide:false,
				anishow:false,
				title:'选择',
				node:[],
				tdlist:[]
			}
		},
		beforeCreate(){
			document.getElementsByTagName("body")[0].className="hidden";
		},
		created(){
			var dates = new date();
			this.node = dates.init();
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.datelist,{
					momentum:true,
					mouseWheel:true,
					click:true,
					taps: true
				})
				//this.scroll.refresh();
			})
		},
		methods:{//https://github.com/jimiyang/H5-cash.git
			save(){
				this.anihide = true;
				this.anishow = false;
				vm =this;
				setTimeout(function(){
					vm.hide=true;
				},500)
			},
			seltime(){
				console.log("aaa")
			}
		},
		beforeDestroy(){
			document.body.removeAttribute("class","hidden");
		}
	}
</script>