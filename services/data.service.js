
const jwt = require('jsonwebtoken')

users ={
   "anna@gmail.com":{email:"anna@gmail.com",uname:"anna",password:"anna1234",place:"kakkanad",products:[]},
   "anu@gmail.com":{email:"anu@gmail.com",uname:"anu",password:"anus1234",place:"kalady",products:[]},
   "aju@gmail.com":{email:"aju@gmail.com",uname:"arjun",password:"arju1234",place:"angamaly",products:[]}
}

const register = (email,password,uname,place)=>{
  
    let db = users

    if(email in db){
        return {
            statusCode:401,
            status:false,
            message:"Account is already exist .. please login !!"
        }
       
      }
      else{
        db[email]={
          email,
          password,
          uname,
          place
        }
        return{
          statusCode:200,
         status:true,
         message:"account is successfully created ..."
        }
      }
}

const login =(email,password)=>{
    let db = users
    if(email in db){
        if(password==db[email]["password"]){

            currentEmail=email,
            currentUsername=db[email]["uname"]

      
          const token = jwt.sign({
              currentEmail:email
          }, 'supersecretkey123' )

           return{
               statusCode:200,
               status:true,
               message:"successfully login",
               currentEmail,
               currentUsername,
               token
           }
        }
        else{
            return{
                statusCode:401,
                status:false,
                message:"incorrect password"
            }
        }
    }
    else{
        return{
            statusCode:401,
            status:false,
            message:"invalid user"
        }
    }

}
const products = (email,productname,productprice,productquantity,productcategory)=>{
     let db= users
     if(email in db){
         db[email]["products"] ={
             productname,
             productprice,
             productquantity,
             productcategory
         }
         return{
             statusCode:200,
             status:true,
             message:"product adding successfully"
         }
     }
     else{
         return{
             statusCode:401,
             status:false,
             message:"invalid user"
         }
     }
}

const getproducts = ()=>{
       
}



module.exports ={
    register,
    login,
    products,
    getproducts
}