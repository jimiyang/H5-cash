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
			<ul class="add">
				<li><router-link to="/Reg">注册会员({{$store.state.ver}})</router-link></li>
			</ul>
			<a href="javascript:" class="button mt30" @click="get">提现</a>
		</section>
		<layer :message="message" :hide.sync="hide"></layer>
	</div>
</template>
<script>
import layer from '../public/layer'
import {mapMutations} from 'vuex'
export default {
  data(){
    return {
		price:1050.2,
		message:'请求链接已过时...',
		hide:true,
		version:''
    }
  },
  components:{layer},
  created(){
		this.updateVersion("银行版")
		
  },
  methods:{
    ...mapMutations([
		"updateVersion"
	]),
	get(){
		if(this.price == 0){
			this.message ="您的提现余额为0元";
			this.hide=false;
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

