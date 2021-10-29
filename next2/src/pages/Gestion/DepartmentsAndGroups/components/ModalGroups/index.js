import React, { useState,useEffect } from 'react'
import Modal from 'react-modal'
import ToastComponent from '../../../../../components/toastComponent'
import Request from '../../../../../utils/http'
import Refill from '../../../../../components/Tables/Refill'
const request = new Request()

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px'
  },
};
export default function ModalGroups(props) {
  Modal.setAppElement('body');
  const { open = false, setOpen = () => { }, reload, dataToEdit,edit=false,handleEdit=()=>{} } = props

  const [close, setClose] = useState(false)
  const [deparment, setDepartment] = useState({ id: 0, name: '' })
  const [groups, setGroups] = useState([{  department_id: 0, descriptions: '', active: 0 }])
  const [toast, setToast] = useState({
    showToast: false,
    mensaje: '',
    tipo: 'success'
  })
  useEffect(() => {
    if (edit) {
      setDepartment({ id: dataToEdit.id, name: dataToEdit.departmentName })
      setGroups(dataToEdit.groupsList)
    }
  },[edit])
  const handleChange = (e) => setDepartment({ ...deparment, [e.target.name]: e.target.value })
  const addLine = () => {
    let copia = JSON.parse(JSON.stringify(groups))
    copia.push({  departments_id: 0, descriptions: '', active: 0 })
    setGroups(copia)
    
  }
  const handleChangeLines = (e,key) => {
    let copia = JSON.parse(JSON.stringify(groups))
    if (e.target.name === 'nombre') {
      copia[key].descriptions = e.target.value
    }else{
      copia[key].active = e.target.checked==false?0:1
    }
    setGroups(copia)
  }
  const handleclose = () => {
    setDepartment({ id: 0, name: '' })
    setGroups([{  departments_id: 0, descriptions: '', active: 0 }])
    setOpen(false)
    setClose(false)
    handleEdit(false)

 }
  const validate=()=>{
    let error = 0
    for (let i = 0; i < groups.length; i++) {
     if (groups[i].descriptions == '') error++
    }
    if (deparment.name =='' || error>0) {
      setToast({ showToast: true, mensaje: 'Favor de completar los campos marcados en rojo', tipo: 'error' })
    }else{
      handleSubmit()
    }
    setTimeout(() => {
      setToast({ showToast: false, mensaje: '', tipo: '' })
    }, 3000);
  }
  const handleSubmit = async () => {
    let data = {
      id:deparment.id,
      departmentName: deparment.name,
      groups: groups
    }
    let response 
    if (edit) {
      console.log(data);
      response = await request.post('departments/update', data)
    }else{
      response = await request.post('departments/save', data)

    }
    if (response && response.statusCode == 201) {
      setToast({ showToast: true, mensaje: 'Guardado con exito', tipo: 'success' })
      reload()
      setClose(true)
    } else {
      setToast({ showToast: true, mensaje: 'Error al guardar', tipo: 'error' })

      if (response.result?.error) console.log("🚀 ~ ", response.result.error)

    }
    setTimeout(() => {
      setToast({ showToast: false, mensaje: '', tipo: '' })
    }, 3000);

  }
  
  
  return (
    <>

      <ToastComponent showToast={toast.showToast} mensaje={toast.mensaje} tipo={toast.tipo} />
      <Modal isOpen={open} style={customStyles} overlayClassName="Overlay">
        <div className="col-md-6">
          <h5>Departamentos y grupos</h5>
        </div>
      
        <div className="row p-4">

          <div className="form-group col-md-12">
            <label for="nameUser">Nombre de Departamento</label>
            <input type="text" className={`form-control ${deparment.name.length< 5?'border-danger':''} `} value={deparment.name} onChange={handleChange} id="nameUser" name='name' />
            {deparment.name.length < 5 && <small className="form-text text-danger">Campo Requerido. Minimo 5 caracteres</small>}
          </div>
          <div className="form-group col-md-12 justify-end">
            <button className="btn btn-outline-warning " onClick={addLine} > <i className="feather icon-plus-circle" ></i> Nuevo Grupo </button>
          </div>
          <div className="form-group col-md-12">
            <table className="table table-hanan table-striped ">
              <thead>
                <tr>
                  <th>Nombre de Grupo</th>
                  <th>Activo</th>
                </tr>
              </thead>
              <div style={{ height: '330px', width: '122%', overflowY: 'scroll' }}>
                <table className="table table-hanan table-striped ">

                  <tbody>
                    {groups.map((group, i) => (
                      <tr key={i}>
                        <td>
                          <input type='text' className={`form-control ${group.descriptions.length< 1?'border-danger':''} `} name='nombre' value={group.descriptions} onChange={e=>handleChangeLines(e,i)} />
                        </td>
                        <td>
                          <div className="custom-control custom-checkbox ">
                            <input type="checkbox" className="custom-control-input" id={`customCheck${i}`} name='activo' checked={group.active==0?false:true} onChange={e=>handleChangeLines(e,i)} />
                            <label className="custom-control-label" for={`customCheck${i}`}></label>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <Refill numColumns={5 - groups.length} rows={2} />
                  </tbody>
                </table>
              </div>

            </table>
          </div>


        </div>
        
          <div className="row p-4">
            <div className='col-md-6 col-lg-6'>
              {!close ? <button type="submit" onClick={validate } className="btn hanan-success" title="Guardar Cambios" data-toggle="tooltip">
              <i className="feather icon-save" ></i>  {edit?'Guardar Cambios':'Guardar'}
              </button> : null}
            </div>
            <div className='col-md-6 col-lg-6 justify-end'>
              <button onClick={handleclose} type="button" className="btn btn-outline-danger" title="btn btn-outline-danger" data-toggle="tooltip">
              <i className="feather icon-x" ></i> {close ? 'Cerrar' : 'Cancelar'}
              </button>
            </div>
          </div>
        
      </Modal>
    </>
  )
}
