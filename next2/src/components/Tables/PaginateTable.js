import React,{ useEffect, useState} from 'react'
import Refill from './Refill'
export default function PaginateTable(props) {
    const {data,header,handleEdit=()=>{}} = props
    const [columns,setColumns]= useState([])

    useEffect(() => {
        setColumns(header)
    },[header])
    return (
        <>
        <div className="justify-center">
            <table className='table table-hanan table-responsive-md table-responsive-sm table-responsive-lg table-striped'>
                <thead>
                    <tr>
                    {columns.map((column,i)=>(
                        <th key={i}>{column.label}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((datos,d)=>(
                        <tr key={d} onClick={()=>handleEdit(datos)}>
                            {columns.map((column,c)=>(
                                <td style={{height:'25px'}} key={c}>{datos[column.body]}</td>
                            ))}
                        </tr>
                    ))}
                    <Refill numColumns={10-data.length} rows={columns.length}/>
                </tbody>

            </table>
        </div>
     </>
    )
}