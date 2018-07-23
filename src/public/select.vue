<template>
	<section class="showChose">
      <section class="address">
        <section class="title">
          居住地址<span>取消</span>
        </section>
        <section class="title">
          <div class="area">{{}}</div>
          <div class="area">{{}}</div>
          <div class="area">{{}}</div>
        </section>
        <ul>
          <li class="addList" pid="item.id" v-for="(item,index) in proviceArr">{{item.name}}</li>
        </ul>
      </section>
    </section>
</template>
<script>
	export default{
		data(){
			return{
				proviceArr:[],
				cityArr:[],
				areaArr:[]
			}
		},
		created(){
			let url = '../static/area.json';
			this.$axios.get(url).then((rs)=>{
				this.proviceArr = rs.data[0].provice;
				//this.cityArr = rs.data[1].city;
				//this.areaArr = rs.data[2].area;
			})
		}
	}
</script>
