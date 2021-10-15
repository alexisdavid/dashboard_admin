import React, { useEffect, useState } from 'react'
import { Consumer } from '../../context/index'
import { Link } from 'react-router-dom'
import './styles.css'
function Sidebar(props) {
    const { getMenus } = props.context;
    const [menus, setMenus] = useState([])
    useEffect(() => {
        getInitialData()
    }, [getMenus])

    const getInitialData = async () => {
        let info = await getMenus()


        setMenus(info.menus)
    }
    return (

        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-Hanan" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {menus.map((menu, key) => (
                            <div key={key} >
                                <a className="nav-link collapsed color-white" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className={menu.icon}></i></div>
                                        {menu.module}
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        {menu.submenusList.map((submenu, keysub) => <Link className="nav-link color-white" key={keysub} to={submenu.url} ><i className={submenu.icon}></i>&nbsp;{submenu.submodule}</Link>
                                        )}
                                    </nav>
                                </div>
                            </div>
                        ))}

                        {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                        Pages
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </a> */}
                        {/* <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Authentication
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="login.html">Login</a>
                                    <a className="nav-link" href="register.html">Register</a>
                                    <a className="nav-link" href="password.html">Forgot Password</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="401.html">401 Page</a>
                                    <a className="nav-link" href="404.html">404 Page</a>
                                    <a className="nav-link" href="500.html">500 Page</a>
                                </nav>
                            </div>
                        </nav>
                    </div> */}
                        {/* <div className="sb-sidenav-menu-heading">Addons</div>
                    <a className="nav-link" href="charts.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                        Charts
                    </a>
                    <a className="nav-link" href="tables.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                        Tables
                    </a> */}
                    </div>
                </div>
                {/* <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
            </div> */}
            </nav>
        </div>

    )
}
export default Consumer(Sidebar)
