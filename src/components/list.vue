<template>
	<div class="list">
			<div class="header">
			<div class="backBtn">返回</div>
			<h1 class="headTitle">提现列表</h1>
			<div class="main"><img src="../assets/images/date.png" /></div>
		</div>
		<section class="pageCont putCash">
				<h1 class="selDate" id="sel" @click="selDate"><em class="sdate">2018-04-21</em>至<em class="edate">2018-04-27</em></h1>
				<div  class="list wrapper" ref="wrapper">
					<ul class="orderInfo content" id="thelist" >
						<li  v-for="(item,index) in data">
						   <h1 class="time">提现时间 {{item.time}}</label>
						   <em>{{item.price}}</em></h1>
						   <h2 class="orderNo">提现订单号{{item.cardNO}}
								<label class="state wait" v-if="item.status=='01'">处理中</label>
								<label class="state right" v-else-if="item.status=='02'">成功</label>
								<label class="state wrong" v-else="item.status=='03'">失败</label>
						   </h2>
						</li>
					</ul>
					<!--<div id="pullUp">
						<span class="pullUpLabel"><img src="http://static.liantuobank.com/cash/images/loading.gif" /></span>
					</div>-->
			   </div>
		</section>
		<canlander ref="date"></canlander>
	</div>
</template>
<script>
import Bscroll from 'better-scroll';
import canlander from '../public/date'; 
export default{
	data(){
		return{
			data:[]
		}
	},
	components:{
		canlander
	},
	created(){
		var url = '../static/data.json'
		this.$axios.get(url).then(rs=>{
			this.data = rs.data;
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.wrapper,{
					momentum:true
				})
			})
		})

	},
	methods:{
		selDate(){
			let obj = this.$children[0];
			obj.anihide=false;
			obj.anishow=true;
			obj.hide=false;
		}
	}
}
</script>