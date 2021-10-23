import React,{ useEffect, useState} from 'react'

export default function Refill(props) {
   const {numColumns=5,rows=1}  = props
   const [columns,setColumns] = useState([])
   const [rowsR,setRows] = useState([])

   
   useEffect(() => {
       let nc = []
       let rs=[]
    for (let i = 0; i < numColumns; i++) {
        nc.push(i)
    }
    for (let j = 0; j < rows; j++) {
        rs.push(j)
    }
    setColumns(nc)
    setRows(rs)
   },[numColumns,rows])
    return (
        
            columns.map(()=>(
                <tr style={{height:'55px'}}>
                    {rowsR.map(()=>(
                        <>
                        <td ></td>
                        
                        </>
                    ))}
                </tr>
            ))
        
    )
}
