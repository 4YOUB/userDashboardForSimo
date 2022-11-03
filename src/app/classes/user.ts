export class User {
  
    username:string
    email:string
    address:{
        street:'',
        suite:'',
        city:''
    }
    constructor(data:any) {
        this.username = data.username
        this.email = data.email
        this.address = data.address
    }
    
}