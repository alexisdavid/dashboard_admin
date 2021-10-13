import React from 'react'
import Layout from '../Layout'
import Request from '../../utils/http'
const request = new Request()

export default function HomeComponent() {
   
    async function logout()
    {
    let response = await request.get('auth/logout')
    if (response && response.statusCode==200) {
        window.sessionStorage.removeItem('token')
        window.location.replace("/");
    }
    }
    return (
       
            <Layout>
           <button className="btn btn-primary" onClick={logout}>Logout</button>
            </Layout>
      
    )
}

