import React from 'react'
import Request from '../../utils/http'
import './styles.css'
import logo from '../../static/img/LOGOHORIZONTAL.png'
const request = new Request()
export default function index() {
    async function logout()
    {
    let response = await request.get('auth/logout')
    if (response && response.statusCode==200) {
        window.sessionStorage.removeItem('token')
        window.location.replace("/");
    }
    }
    
    return (
        <nav className="sb-topnav navbar navbar-expand bg-hanan-nav">
        <img src={logo} className='img-logo' title='logo' alt='logo' />
        <button className="btn btn-link btn-sm order-1 order-lg-0" title="Esconder" id="sidebarToggle" href="#"><i className="fas fa-bars fa-2x color-white"></i></button>
       
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
                
                <div className="input-group-append">

                </div>
            </div>
        </form>
       
        <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-white" title='open' id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw color-white"></i></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    
                    <span className="dropdown-item"onClick={logout} >Cerrar Sesión</span>
                </div>
            </li>
        </ul>
    </nav>
    )
}
