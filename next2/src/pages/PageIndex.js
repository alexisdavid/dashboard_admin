import React,{useState,useEffect} from 'react';
import Request from '../utils/http'
import imagen from '../static/logo.jpg'
var base64 = require('base-64');  
const request = new Request();




const PageIndex = (props) => {
    const {history}=props;
    const [credentials,setCredentials] = useState({user:'',password:''})
    useEffect(() => {
        const isAuth = window.sessionStorage.getItem("token");
        if (isAuth)  history.push('/home');
      });
    const handleChange=(e) =>   setCredentials({...credentials,[e.target.name]:e.target.value})

    const login =async (e)=>{
        e.preventDefault();
        let userInfo;
        const response = await request.post('auth/login',{userCode:credentials.user,password:credentials.password}) 
        if (response && response.statusCode==200 ) {
            let token = {
             user:response.result.user,
              token: response.result.access_token
            };
            let datos = JSON.stringify(token);
            userInfo = base64.encode(datos);
            window.sessionStorage.setItem("token", JSON.stringify(userInfo));
            window.location.replace('/home');
            // history.push('/home')
            
          }
    }
 
    return (
        
      <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
          <main>
              <div className="container     ">
                  <div className="row justify-content-center mt-5">
                      <div className="col-lg-5">
                          <div className="card shadow-lg border-0 rounded-lg mt-5 login">
                              <div className="card-header logotipo justify-content-center login">
                                  <img src={imagen} />
                              </div>
                              <div className="card-body">
                                  <form onSubmit={(e)=>login(e)}>
                                      <div className="form-group">
                                          <label className="small mb-1" htmlFor="inputEmailAddress">Usuario</label>
                                          <input className="form-control py-4" id="inputUser" name='user' onChange={handleChange} type="text" placeholder="Ingrese Usuario" />
                                      </div>
                                      <div className="form-group">
                                          <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                          <input className="form-control py-4" id="inputPassword" name='password'  onChange={handleChange} type="password" placeholder="Ingrese password" />
                                      </div>
                                     
                                      <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                          <label className="small" >Olvidaste tu password? Contacta a sistemas</label>
                                          <button className="btn btn-primary" type="submit">Entrar</button>
                                      </div>
                                  </form>
                              </div>
                             
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
      
  </div>
    );
};

export default PageIndex;