import React, { useState, useEffect } from 'react'
import Layout from '../../Layout'
import fetchNextData from '../../../Hooks/fetchNextData'
import PaginateTable from '../../../components/Tables/PaginateTable'
import PaginateButtons from '../../../components/Tables/PaginateButtons'
import ModalGroups from './components/ModalGroups'

const header = [{ body: 'codigo', label: 'Nombre de Departamento' },{ body: 'sd', label: '' }]
const DepartmentsAndGroups = () => {
    const [options, setOptions] = useState({ next: 'Siguiente', previous: 'Anterior', links: [] })
    const [data, setData] = useState([])
    const [isOpen, setOpen]= useState(false)
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
                <button className="btn btn-sm  hanan-success" onClick={(e) => setOpen(true)} ><i className="feather icon-plus-circle" ></i> Nuevo</button>
            </div>
            <PaginateTable data={data} header={header} />
            <PaginateButtons options={options} fetchData={fetchData} />
            <ModalGroups open={isOpen} setOpen={setOpen} reload={getDepartments} />
        </Layout>
    )
}
export default DepartmentsAndGroups