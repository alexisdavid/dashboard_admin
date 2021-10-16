import React,{ useEffect, useState} from 'react'
export default function TableUsers(props) {
    const {data,header} = props
    const [columns,setColumns]= useState([])

    useEffect(() => {
        setColumns(header)
    },[header])
    return (
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
                    {data.map((data,d)=>(
                        <tr key={d}>
                            {columns.map((column,c)=>(
                                <td key={c}>{data[column.body]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
     
    )
}
