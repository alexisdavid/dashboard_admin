import React, { useState, useEffect } from 'react'
import Layout from '../../Layout'
import fetchNextData from '../../../Hooks/fetchNextData'
import PaginateTable from '../../../components/Tables/PaginateTable'
import PaginateButtons from '../../../components/Tables/PaginateButtons'

const header = [{ body: 'codigo', label: 'Nombre de Grupo' }]
const DepartmentsAndGroups = () => {
    const [options, setOptions] = useState({ next: 'Siguiente', previous: 'Anterior', links: [] })
    const [data, setData] = useState([])
    useEffect(() => { getDepartments() }, [])
    async function getDepartments() {
        let users = await fetchNextData('departments/getDepartments?page=1', {})
        setData(users.data)
        setOptions({ ...options, links: users.links })
    }
    const fetchData = async (url, options) => {
        let d = url.lastIndexOf('/')
        let users = await fetchNextData(`departments/${url.substr(d + 1)}`, options)
        setData(users.data)
        setOptions({ next: 'Siguiente', previous: 'Anterior', links: users.links })
    }

    return (
        <Layout>
            <div className='justify-end'>
                <button className="btn btn-sm  hanan-success" >Nuevo</button>
            </div>
            <PaginateTable data={data} header={header} />
            <PaginateButtons options={options} fetchData={fetchData} />
        </Layout>
    )
}
export default DepartmentsAndGroups