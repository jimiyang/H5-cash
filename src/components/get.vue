<template>
	<div>
		<div class="header">
			<div class="backBtn">返回</div>
			<h1 class="headTitle">提现</h1>
		</div>
		<section class="pageCont putCash">
			<div class="bankCard">
				<div class="cardNo border">
					<h1 class="bankname" id="bankname">{{form.bankName}}</h1>
					<p>提现到账银行卡号<em>尾号{{form.endNo}}</em></p>
				</div>
				<div class="price">
					<h1 class="title">提现金额（元）</h1>
					<div class="number border">
						<i>￥</i><input type="number" class="ipt" ref="ipt"/>
						<em class="all" @click="all">全部提现</em>
					</div>
					<p class="border">可提现金额{{sum}}元</p>
				</div>
				<ul class="submitMsg">
					<li class="border">
						提现预留手机号
						<label>134 **** 1122</label>
					</li>
					<li  class="border">
						短信验证码
						<label><input type="number" class="ipt"  placeholder="请输入验证码"/></label>
						<span class="send">发送验证码</span>
					</li>
				</ul>
				<p class="notice">温馨提示：发起提现申请成功后2小时内到账</p>
			</div>
			<a href="javascript:" class="button mt30" id="submit" @click="submit">确认提现</a>
		</section>
		<layer :message="message" :hide.sync="hide"></layer>
	</div>
</template>
<script>
import layer from '../public/layer';
export default{
	data(){
		return {
			form:{
				cardNo:'313223007007',
				bankName:'',
				endNo:'',
				num:''
			},
			sum:'1',
			message:'',
			hide:true
		}
	},
	components:{layer},
	created:function(){
		const url = '../static/bankNormal.json';
		this.$axios.get(url).then((rs) => {
			for(let i=0;i<rs.data.length;i++){
				if(rs.data[i].code==this.form.cardNo){
					this.form.bankName=rs.data[i].name;
					let str = String(rs.data[i].code);
					this.form.endNo = str.substr(str.length-4,str.length);
				}
			}
		}).catch(function(error){
			console.log(error)
		})
	},
	methods:{
		all(){
			if(this.sum==0 || this.sum==0.00){
				this.message ="您的提现余额为0元";
				this.hide = false;
				return false;
			}
			if(this.$refs.ipt.value>this.sum){
				this.message ="您的提现金额已不足";
				this.hide = false;
				return false;
			}
			if(this.$refs.ipt.value < 0){
				this.message ="请您输入正确的提现金额";
				this.hide = false;
				return false;
			}
			this.$refs.ipt.value=this.sum;
		},
		submit(){
			if(this.$refs.ipt.value==0 || this.$refs.ipt.value==0.00){
				this.message ="请输入提现金额";
				this.hide = false;
				return false;
			}
			if(this.$refs.ipt.value>this.sum){
				this.message ="您的提现金额已不足";
				this.hide = false;
				return false;
			}
			this.form.num=this.$refs.ipt.value;
			this.$router.push({"path":"Success",query:this.form,abstract:true});
		}
	}
}
</script>
