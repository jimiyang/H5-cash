class Dates{
	constructor(){}
	arrday=[31,28,31,30,31,30,31,31,30,31,30,31]
	init(){
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
	}
	days(yy,mm,d){
		let newD=new Date(yy,mm-1,1);
		let firstday=newD.getDay();
		firstday=firstday==0 ? 6 : firstday-1;
		let prevday=mm>0?this.arrday[mm-1]:31;
		let daylist=[],count=0,mydate;
		for(let x=1;x<firstday+2;x++){
			daylist.push(`{"day":null,"time":null}`);
			count++;
		}
		for(let i=1;i<=this.arrday[mm-1];i++){
			let day = i < 10 ?  "0"+i : i; 
			let isGreen = false;
			daylist.push(`{"day":${i},"time":"${yy}-${mm <10 ? "0"+mm : mm}-${i}"}`);
			count++;
		}
		let sum=count>35 ? 42 : 35 ;
		for(let j=0;j<sum-firstday-this.arrday[mm-1]-1;j++){
			daylist.push(`{"day":null,"time":null}`);
		}
		return daylist;
	}
	sel(timeArr){
		let myDate = new Date();
		myDate.setFullYear(timeArr[0].split("-")[0],timeArr[0].split("-")[1]-1,timeArr[0].split("-")[2]);
		let sDay =myDate.getDate();
		let sTime = myDate.getTime();
		if(timeArr.length<2) return false;
		myDate.setFullYear(timeArr[1].split("-")[0],timeArr[1].split("-")[1]-1,timeArr[1].split("-")[2]);
		let eTime = myDate.getTime();
		let diffTime =Math.floor((eTime-sTime)/(24*3600*1000));
		let begin,end,selTime=[];
		if(diffTime<0){
			begin = sDay + diffTime;
			end = sDay;
		}else{
			begin = sDay;
			end = sDay + diffTime;
			for(let i=begin;i<=end;i++){
				let mydate = new Date(sTime);
				mydate.setDate(i);
				let yy = mydate.getFullYear(),mm=mydate.getMonth()+1,dd=mydate.getDate();
				mm = mm < 10 ? "0"+mm : mm ;
				let daystr = yy+"-"+mm+"-"+dd;
				selTime.push(daystr)
			}
		}
		return selTime;
	}
	
}
export {Dates};
