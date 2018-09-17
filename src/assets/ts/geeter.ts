<<<<<<< HEAD
﻿class Parent{
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
=======
class Parent{
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
export {Child}
>>>>>>> 3eb04128051396c0e639ce669526acd73e44aae1
