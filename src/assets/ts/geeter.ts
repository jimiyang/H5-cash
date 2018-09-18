class Parent{
	constructor(type){
		this.type=type;
	}
	getType(){
		return this.type;
	}
}
class Child extends Parent{
	constructor(type,username){
		super(type);
		this.username=username;
	}
	parent(){
		return this.getType();
	}
}
export {Child}



/*class Parent{
    constructor (type){
      this.type=type;
    }
    gettype(){
      return this.type;
    }
}
class Child extends Parent{
    constructor(type,username){
       super(type);
       this.username = username;
    }
    getinfo(){
       return this.username + this.type;
    }
}
new Parent("已审核");
new Child("管理员")
export {Child}*/
