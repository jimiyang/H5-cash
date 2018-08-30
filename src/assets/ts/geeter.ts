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