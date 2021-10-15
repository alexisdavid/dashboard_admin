import React from 'react'
import Layout from '../../Layout'
import TableUsers from './components/TableUsers'
export default function PageUsers() {
    return (
        <Layout>
         
            <button className="btn  btn-primary">nuevo</button>
           <TableUsers />
             
        </Layout>
    )
}
