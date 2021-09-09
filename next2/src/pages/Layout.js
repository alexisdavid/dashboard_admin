import React from 'react';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Layout = (props) => {
    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, { index});
      });
    return (
        <>
        <Sidebar />
            <Header />
           {children}
        </>
    );
};

export default Layout;