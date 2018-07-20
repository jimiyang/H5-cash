class Validate{
	sw(obj,value){
		switch (obj){
			case "username":
				let nameArr= {regexp: /^[A-Za-z0-9_\u4E00-\u9FA5]+$/,msg: ["请输入姓名","仅支持中文、英文和数字"]};
				if(value=="" || value ==null){
					return pwdArr.msg[0];
				}else if(!pwdArr.regexp.test(value)){
					return pwdArr.msg[1];
				}
				break;
			case "pwd":
				let pwdArr= {regexp:/^(\d)\1+$/,msg:["请输入密码","密码过于简单"]};
				if(value=="" || value ==null){
					return pwdArr.msg[0];
				}else if(!pwdArr.regexp.test(value)){
					return pwdArr.msg[1];
				}
				break;
			case "checkpwd":
				return {msg:["请输入确认密码","密码输入不一致"]}
				break;
			case "number":
				return {regexp:/^(13|14|15|18)\d([\*]{5}|\d{5})\d{3}/,msg:["请输入手机号码","手机号码输入有误"]};
				break;
			case "email":
                obj = {regexp: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,msg: ["请输入手机邮箱","邮箱输入有误"]};
                break;
			default:
			break;
			
		}
	}
}
export {Validate}