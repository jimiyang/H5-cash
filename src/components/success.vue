<template>
	<div class="success">
		<div class="header">
			<h1 class="headTitle">提现结果</h1>
		</div>
		<section class="pageCont putCash">
			<div class="border cashSate">
				<img src="../assets/images/right.png" />
				<h1 class="message right">提现成功</h1>
				<p>发起提现申请成功后2小时内到账，请注意查收</p>
			</div>
			<ul class="cardInfo">
				<li class="border">提现金额<em>{{num}}元</em></li>
				<li class="border">提现订单号<em>201822525544444444</em></li>
				<li class="border">提现时间<em>{{time}}</em></li>
				<li class="border">提现到账银行卡号<em>尾号{{this.endNo}}</em></li>
			</ul>
			<a href="javascript:" class="button mt30">完成</a>
		</section>
	</div>
</template>
<script>
export default{
	data(){
		return{
			num:this.$route.query.num,
			endNo:this.$route.query.endNo,
			time:new Date()
		}
	},
	created:function(){
				/*Date.prototype.Format = function (fmt) {
					var o = {
						"M+": this.getMonth() + 1, //月份 
						"d+": this.getDate(), //日 
						"h+": this.getHours(), //小时 
						"m+": this.getMinutes(), //分 
						"s+": this.getSeconds(), //秒 
						"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
						"S": this.getMilliseconds() //毫秒 
					};
					if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
					for (var k in o)
					if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
					return fmt;
			   }*/
	}
}
</script>