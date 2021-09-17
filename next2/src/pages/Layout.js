import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Layout = (props) => {
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, { index });
    });
    return (
        <>
            <Sidebar />
            <Header />
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                           
                                    <div class="row">
                                        <div class="col-sm-12">

                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Layout;