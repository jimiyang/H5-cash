class Child extends Parent{
    constructor(type,username){
       super(type);
       this.username = username;
    }
    getinfo(){
       return this.username + this.type;
    }
}
export {Child}
