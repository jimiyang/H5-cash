function Dates(){}
Dates.prototype={
	init:function(){
		let mon = new Date().getMonth(),k=0,arr=[],year="",month="",str;	
		for(let i=mon-3;i<mon+3;i++){
			let myDate = new Date();
			myDate.setMonth(i);
			year = myDate.getFullYear();
			month = myDate.getMonth()+1;
			let Data = this.days(year,month,1);
			arr.push(JSON.parse(`{"year":${year},"month":${month},"daylist":[${Data}]}`));
		}
		return arr;
	},
	arrday:[31,28,31,30,31,30,31,31,30,31,30,31],
	days:function(yy,mm,d){
		let newD=new Date(yy,mm-1,1);
		let firstday=newD.getDay();
		firstday=firstday==0 ? 6 : firstday-1;
		let prevday=mm>0?this.arrday[mm-1]:31;
		let daylist=[],count=0,arr3=[],str="";
		let strmonth,strday,mydate;
		for(let x=1;x<firstday+2;x++){
			daylist.push(`{"day":null}`);
			str+='null,'
			count++;
		}
		for(let i=1;i<=this.arrday[mm-1];i++){
			let day = i < 10 ?  "0"+i : i; 
			let isGreen = false;
			daylist.push(`{"day":${i}}`);
			str+=i+","
			count++;
		}
		let sum=count>35 ? 42 : 35 ;
		for(let j=0;j<sum-firstday-this.arrday[mm-1]-1;j++){
			daylist.push(`{"day":null}`);
			str+='null,'
		}
		return daylist;
	}
}
export default Dates;
