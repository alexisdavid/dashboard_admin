import React,{useEffect,useState} from 'react'
import Layout from '../../Layout'
import {useFetchNextData} from '../../../Hooks/useFetchNextData'
import PaginateTable from '../../../components/Tables/PaginateTable'
import PaginateButtons from '../../../components/Tables/PaginateButtons'
import Request from '../../../utils/http'
const request = new Request()

getNetxt
const header = [{body:'codigo',label:'Código de usuario'}, {body:'nombre',label:'Nombre'}, {body:'email',label:'Email'},  {body:'dpto',label:'Departamento'},  {body:'fecha',label:'Fecha de creación'}, {body:'acc',label: 'Acciones'}]
let options ={next:'Siguiente',previous:'Anterior',links:[]}



export default function PageUsers() {
    const[data,setData] = useState([])
    useEffect(() => {  getUsers() },[])
    async function getUsers(){
        let users = await fetchUsers()
        setData(users.data)
        options.links =users.links
    }

   
    return (

        <Layout>
            <div className='justify-end'>
                <button className="btn btn-sm  hanan-success">Nuevo</button>
            </div>
            <PaginateTable data={data } header={header }/>
            <PaginateButtons  options={options}/>

        </Layout>
    )
}
