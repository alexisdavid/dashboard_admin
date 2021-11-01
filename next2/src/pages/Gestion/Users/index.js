import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import fetchNextData from '../../../Hooks/fetchNextData'
import PaginateTable from '../../../components/Tables/PaginateTable'
import PaginateButtons from '../../../components/Tables/PaginateButtons'
import ModalUsers from './components/ModalUsers/ModalUsers'

const header = [{ body: 'codigo', label: 'Código de usuario' }, { body: 'nombre', label: 'Nombre' }, { body: 'email', label: 'Email' }, { body: 'dpto', label: 'Departamento' }, { body: 'fecha', label: 'Fecha de creación' }, { body: 'acc', label: 'Acciones' }]

export default function PageUsers() {
    const [data, setData] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [options, setOptions] = useState({ next: 'Siguiente', previous: 'Anterior', links: [] })
    useEffect(() => { getUsers() }, [])
    async function getUsers() {
        let users = await fetchNextData('users/usersList?page=1', {})
        setData(users.data)
        setOptions({ ...options, links: users.links })
    }

    const fetchData = async (url, options) => {
        let d = url.lastIndexOf('/')
        let users = await fetchNextData(`users/${url.substr(d + 1)}`, options)
        setData(users.data)
        setOptions({ next: 'Siguiente', previous: 'Anterior', links: users.links })
    }


    return (

        <Layout>
            <div className='justify-end'>
                <button className="btn btn-sm  hanan-success" onClick={(e) => setOpen(true)}><i className='feather icon-user-plus'></i> Nuevo</button>
            </div>
            <PaginateTable data={data} header={header} handleEdit={[]} editMode={[]} editStatus={[]} />
            <PaginateButtons options={options} fetchData={fetchData} />
            <ModalUsers open={isOpen} setOpen={setOpen} reload={getUsers} />
        </Layout>
    )
}
