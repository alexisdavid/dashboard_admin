import React from 'react'

import Layout from '../Layout'
import Request from '../../utils/http'
const request = new Request()

 function HomeComponent(props) {
   
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
                <div className='justify-end'>
                    <button className="btn btn-success " onClick={logout}>Logout</button>
                </div>
            </Layout>
      
    )
}
export default HomeComponent

