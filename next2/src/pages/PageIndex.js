import React,{useEffect, useState} from 'react';
import Request from '../utils/http'
var base64 = require('base-64');  
const request = new Request();





const PageIndex = (props) => {
    const {history} = props;
    const [user,setUser]= useState('')
    const [password,setPassword]= useState('')
    useEffect(() => {
        const isAuth = window.sessionStorage.getItem("token");
        if (isAuth) {
          
          history.push('/home');
          // window.location('/dashboard');
        }
      });
      const handleSubmit = async () => {
        let userInfo;
        let data = {
            userCode: user,
            password: password,
        };
    
        const response = await request.post("auth/login", data);
        console.log("🚀 ~ file: PageIndex.js ~ line 30 ~ handleSubmit ~ response", response)
          if (response && response.statusCode==200 ) {
            let token = {
             user:response.result.user,
              token: response.result.access_token
            };
            let datos = JSON.stringify(token);
            userInfo = base64.encode(datos);
            window.sessionStorage.setItem("token", JSON.stringify(userInfo));
            window.location.replace('/home');
            
          } 
      };
    return (
        
      <div class="auth-wrapper">
      <div class="auth-content">
          <div class="auth-bg">
              <span class="r"></span>
              <span class="r s"></span>
              <span class="r s"></span>
              <span class="r"></span>
          </div>
          <div class="card">
              <div class="card-body text-center">
                  <div class="mb-4">
                      <i class="feather icon-user-plus auth-icon"></i>
                  </div>
                  <h3 class="mb-4">Iniciar Sesion</h3>
                  <div class="input-group mb-3">
                      <input type="text" class="form-control" value={user} onChange={e=>setUser(e.target.value)} placeholder="Username"/>
                  </div>
                  
                  <div class="input-group mb-4">
                      <input type="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password"/>
                  </div>
                  
                 
                  <button class="btn btn-primary shadow-2 mb-4" onClick={handleSubmit}>Login</button>
                 
              </div>
          </div>
      </div>
  </div>
    );
};

export default PageIndex;