<template>
	<div class="pagecont">
		<div class="pageLink"><a>商户总部</a></div>
		<div class="tableform">
			<div class="formlist chooseform">
    			<div class="fgroup">
    				<i>商户ID/名称：</i>
    				<input type="text" v-model="form.searchName" class="search" ref="searchContent" @keyup="search"/>
					<div class="searchList" :class={hide:ishide}>
						<ul>
							<li v-for="(item,i) in node" @click="select(item)">{{item.id}}/{{item.name}}</li>
						</ul>
					</div>
    			</div>
				<div class="fgroup">
    				<i>所属行业：</i>
    				<div class="select w100" data-cur="current">
    					<div class="txtSel" data-cur="current">
    						<a href="javascript:;" class="labTxt" data-cur="current">
    							<label class="jsBtLabel" data-cur="current" >全部</label>
    						</a>
    						<dl class="hide conList" data-cur="current"></dl>
    					</div>
    			    </div>
    			</div>
				<div class="fgroup">
    				<i>登录账号：</i>
    				<input type="text" class="search" tid="tid"  name="loginAccount">
    			</div>
    			<div class="fgroup">
    				<i>联系人：</i>
					<input type="text" name="contactName">
    			</div>
    			<div class="fgroup">
    				<i>联系人手机：</i>
					<input type="text" name="contactPhone">
    			</div>
    			<div class="fgroup">
    				<i>业务员：</i>
					<div class="select w100" data-cur="current">
    					<div class="txtSel" data-cur="current">
    						<a href="javascript:;" class="labTxt" data-cur="current">
    							<label class="jsBtLabel" data-cur="current" id="selectSalesman">全部</label>
    						</a>
    						<dl class="hide conList" data-cur="current"></dl>
    					</div>
    			    </div>
    			</div>
    			<div class="fgroup">
    				<i>所属地区：</i>
    				<div id="locality" data-cur="current">
    					<div id="ssqSelector11">
							<div class="select w100" data-cur="current">
								<div class="txtSel" data-cur="current">
									<a href="javascript:;" class="labTxt" data-cur="current">
									<label data-cur="current" class="jsBtLabel" title="省">省</label></a>
									<dl class="hide conList ssq_province" data-cur="current"></dl>
								</div>
						    </div>
							<div class="select w100" data-cur="current">
								<div class="txtSel" data-cur="current">
									<a href="javascript:;" class="labTxt" data-cur="current">
									<label class="jsBtLabel" data-cur="current" title="区/县">区/县</label></a>
									<dl class="hide conList ssq_country" data-cur="current"></dl>
								</div>
						    </div>
						</div>
    				</div>
    			</div>
				<div class="fgroup">
    				<i>商户状态：</i>
    				<div class="select w100" data-cur="current">
    					<div class="txtSel" data-cur="current">
    						<a href="javascript:;" class="labTxt" data-cur="current">
    							<label class="jsBtLabel" data-cur="current" id="selectMerchantStatus" title="启用" data-state="0" style="color: rgb(0, 0, 0);">启用</label>
    						</a>
    						<dl class="hide conList" data-cur="current"></dl>
    					</div>
    			    </div>
    			</div>
				<div class="fgroup singtime">
					<i class="name">提交起始时间：</i>
					<div class="timebox">
						<input id="startTime" type="text" readonly="readonly" class="singledate" name="startTime">
						<i class="ico-time"></i>
					</div>
				</div>	
    			<div class="formlistbar">
    				<a class="btn btn-b">查询</a>
    				<a class="btn">清空</a>
    			</div>
    		</div>
		</div>
	</div>
</template>
<script>
	import api from '../api/Adindex.js'
	export default{
		data(){
			return{
				ishide:true,
				node:'',
				form:{
					searchName:''
				}
			}
		},
		methods:{
			search(){
				this.ishide = false;
				let mvalue = this.$refs.searchContent.value;
				api.addForm({mvalue:mvalue}).then(rs=>{
					this.node = rs;
				})
			},
			select(item){
				this.form.searchName =`${item.id}/${item.name}`;
				this.ishide=true;
			}
		}
	}
</script>