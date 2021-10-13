import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Layout = (props) => {
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, { index });
    });
    return (
        <>

            <Header />
            <div id="layoutSidenav">

            <Sidebar />
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                    {children}
                        </div>
                </main>
                </div>
            </div>
        

               
            {/* </div> */}

        </>
    );
};

export default Layout;