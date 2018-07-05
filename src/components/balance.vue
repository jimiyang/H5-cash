<template>
	<div class="bgwhite">
		<div class="header">
			<div class="backBtn">返回</div>
			<h1 class="headTitle">账户余额</h1>
			<div class="main"><router-link to="/List">提现明细</router-link></div>
		</div>
		<section class="pageCont putCash">
			<div class="balance">
				<img src="@/assets/images/balance.png" />
				<h1 class="message">账户余额</h1>
				<p>￥{{price}}</p>
			</div>
			<a href="javascript:" class="button mt30" @click="get">提现</a>
		</section>
		<layer :message="message"></layer>
	</div>
</template>
<script>
import layer from '../public/layer';
import sum from '../data/price.json';
export default {
  data(){
    return {
		price:sum[0].count,
		message:'请求链接已过时...'
    }
  },
  components:{layer},
  methods:{
	get(){
		if(this.price == 0){
			this.message ="您的提现余额为0元";
			this.$children[0].hide = false;
		}else{
			this.$router.push({"path":"Get"});
		}
	}
  }
}
</script>
<style lang="less">
	body{background:#fff;}
</style>

