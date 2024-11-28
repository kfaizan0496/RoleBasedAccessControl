<h1>ROle Based Access Controls</h1>

Functionalities
1.Register
2.Login
3.Authorization based on roles like Admin,User,Manager






1.Register User
 post request
  http://localhost:3200/api/auth/register
 
 attached data in body in json format
  body==> json
    {
    "username":"Humera",
    "password":"1234",
    "role":"admin" or "admin" or "user"
    }
 
  response of register user

  {
    "message": "User registered with username Humera1"
  }

2.Login User
  Post request
     http://localhost:3200/api/auth/login 
  body
     attached data in body in json format
  body==> json
    {
    "username":"Humera",
    "password":"1234",
    }
    
    
  response of login user

  
   {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDgwMmViOTVhN2I2YmMwYmU3ZDQ0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMjc3MjgyMCwiZXhwIjoxNzMyNzc2NDIwfQ.jinVmFKutQt0IUReADL2miRX42fUkmZBVMpPGGtxHns"
   }
}
copy token and keep it safe for rbac




RBAC 

All are GET request

Authorization access As a admin
1. if user role is admin 
  the routes  can access 

  http://localhost:3200/api/user/admin 
  http://localhost:3200/api/user/manager 
  http://localhost:3200/api/user/user 

Add Authorization in Header for rbac

Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDgwMmViOTVhN2I2YmMwYmU3ZDQ0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMjc3MjgyMCwiZXhwIjoxNzMyNzc2NDIwfQ.jinVmFKutQt0IUReADL2miRX42fUkmZBVMpPGGtxHns

response of this request is

{
    "message": "Welcome Admin"
}


Authorization access  As a manager

2. if user role is manager 
  the routes  can access 

  http://localhost:3200/api/user/manager 
  http://localhost:3200/api/user/user 

Add Authorization in Header for rbac

 Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDgwMmViOTVhN2I2YmMwYmU3ZDQ0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMjc3MjgyMCwiZXhwIjoxNzMyNzc2NDIwfQ.jinVmFKutQt0IUReADL2miRX42fUkmZBVMpPGGtxHns

 response of this request is

{
    "message": "Welcome Manager"
}



Authorization access As a user
3. if user role is user 
  the routes  can access 
  http://localhost:3200/api/user/user 

Add Authorization in Header for rbac

 Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDgwMmViOTVhN2I2YmMwYmU3ZDQ0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczMjc3MjgyMCwiZXhwIjoxNzMyNzc2NDIwfQ.jinVmFKutQt0IUReADL2miRX42fUkmZBVMpPGGtxHns

 response of this request is

 {
    "message": "Welcome User"
 }
