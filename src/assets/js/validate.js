class Validate{
	sw(obj){
		switch (obj){
			case "password":
				return {regexp: /^[A-Za-z0-9_\u4E00-\u9FA5]+$/,msg: ["仅支持中文、英文和数字"]}
				break;
			case "number":
				return {regexp:/^(13|14|15|18)\d([\*]{5}|\d{5})\d{3}/,msg: ["手机号码输入有误"]};
				break;
			case "email":
                obj = {regexp: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,msg: ["邮箱输入有误"]};
                break;
			default:
			break;
			
		}
	}
	onValidater(objArray){
		let type,objMsg,msgArr=[];
		for(let i=0;i<objArray.length;i++){
			type = objArray[i].getAttribute("type")
			objMsg =this.sw(type);
			if(objArray[i].value==null || objArray[i].value==""){
			   msgArr.push(objArray[i].getAttribute("placeholder"));
			}
			if(type == "password"){
				if(!objMsg.regexp.test(objArray[i].value)){
					msgArr.push(objMsg.msg)
				}
			}
			
		}
		return msgArr;
	}
}
export {Validate}