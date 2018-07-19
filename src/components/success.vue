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
				<li class="border">提现订单号<em>{{this.cardNo}}</em></li>
				<li class="border">提现时间<em>{{time}}</em></li>
				<li class="border">提现到账银行卡号<em>尾号{{this.endNo}}</em></li>
			</ul>
			<router-link to="/Get"  class="button mt30">完成</router-link>
		</section>
	</div>
</template>
<script>
export default{
	data(){
		return{
			cardNo:this.$route.query.cardNo,
			num:this.$route.query.num,
			endNo:this.$route.query.endNo,
			time:''
		}
	},
	created:function(){
		this.time = this.$store.state.date(new Date())
	}
}
</script>