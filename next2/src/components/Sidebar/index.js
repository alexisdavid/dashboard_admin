import React from 'react';

const Sidebar = () => {
    return (
        <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
               <a href="index.html" class="b-brand">
                   <div class="b-bg">
                       <i class="feather icon-trending-up"></i>
                   </div>
                   <span class="b-title">Datta Able</span>
               </a>
               <a class="mobile-menu" id="mobile-collapse" href="#"><span></span></a>
           </div>
            <div class="navbar-content scroll-div">
                <ul class="nav pcoded-inner-navbar ">
                    <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" class="nav-item pcoded-hasmenu">
                        <a href="#" class="nav-link "><span class="pcoded-micon"><i class="feather icon-settings"></i></span><span class="pcoded-mtext">Gestión</span></a>
                        <ul class="pcoded-submenu" style={{display: 'block'}}>

                            <li class=""><a href="bc_button.html" class=""><i class="feather icon-users"></i> Usuarios</a></li>
                           
                        </ul>
                    </li>
                    <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" class="nav-item pcoded-hasmenu">
                        <a href="#" class="nav-link "><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Components</span></a>
                        <ul class="pcoded-submenu" style={{display: 'none'}}>

                            <li class=""><a href="bc_button.html" class="">Button</a></li>
                           
                        </ul>
                    </li>
                    <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" class="nav-item pcoded-hasmenu">
                        <a href="#" class="nav-link "><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Components</span></a>
                        <ul class="pcoded-submenu" style={{display: 'none'}}>

                            <li class=""><a href="bc_button.html" class="">Button</a></li>
                           
                        </ul>
                    </li>
                       </ul>
            </div>
        </div>
    </nav>
    );
};

export default Sidebar;