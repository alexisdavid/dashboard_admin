import React, { useState } from 'react'
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
  const { open = false, setOpen = () => { }, reload, data } = props

  const [close, setClose] = useState(false)
  const [deparment, setDepartment] = useState({ id: 0, name: '' })
  const [groups, setGroups] = useState([{  departments_id: 0, nombre: '', activo: 0 }])
  const [toast, setToast] = useState({
    showToast: false,
    mensaje: '',
    tipo: 'success'
  })
  const [edit, setEdit] = useState(true)
  const handleChange = (e) => setDepartment({ ...deparment, [e.target.name]: e.target.value })
  const addLine = () => {
    let copia = JSON.parse(JSON.stringify(groups))
    copia.push({  departments_id: 0, nombre: '', activo: 0 })
    setGroups(copia)
    
  }
  const handleChangeLines = (e,key) => {
    let copia = JSON.parse(JSON.stringify(groups))
    if (e.target.name === 'nombre') {
      copia[key].nombre = e.target.value
    }else{
      copia[key].activo = e.target.checked==false?0:1
    }
    setGroups(copia)
  }
  const handleSubmit = async () => {
    let data = {
      // name: user.name,
      // email: user.email,
      // password: user.password,
      // userCode: user.codUser,
      // userName: user.name,
      // userGroup: user.group,
      // superUser: user.superUser == true ? 1 : 0,
      // department: user.department,
      // active: 0,
      // image: '',
    }
    const response = await request.post('users/store', data)
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
  const handleclose = () => {
     setDepartment({ id: 0, name: '' })
     setGroups([{  departments_id: 0, nombre: '', activo: 0 }])
    setOpen(false)
    setClose(false)

  }
  return (
    <>

      <ToastComponent showToast={toast.showToast} mensaje={toast.mensaje} tipo={toast.tipo} />
      <Modal isOpen={open} style={customStyles} overlayClassName="Overlay">
        <div className="col-md-6">
          <h5>Departamentos y grupos</h5>
        </div>
        {!edit && <div className='col-md-6 justify-end mt-3'>
          <button onClick={e => setOpen(false)} type="button" className="btn btn-outline-danger" title="btn btn-outline-danger" data-toggle="tooltip">
            Cerrar
          </button>
        </div>}
        <div className="row p-4">

          <div className="form-group col-md-12">
            <label for="nameUser">Nombre de Departamento</label>
            <input type="text" className="form-control" value={deparment.name} onChange={handleChange} id="nameUser" name='name' />
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
                          <input type='text' className='form-control' name='nombre' value={group.nombre} onChange={e=>handleChangeLines(e,i)} />
                        </td>
                        <td>
                          <div className="custom-control custom-checkbox ">
                            <input type="checkbox" className="custom-control-input" id={`customCheck${i}`} name='activo' checked={group.activo==0?false:true} onChange={e=>handleChangeLines(e,i)} />
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
        {edit &&
          <div className="row p-4">
            <div className='col-md-6 col-lg-6'>
              {!close ? <button type="submit" onClick={handleSubmit} className="btn hanan-success" title="Guardar Cambios" data-toggle="tooltip">
                Guardar
              </button> : null}
            </div>
            <div className='col-md-6 col-lg-6 justify-end'>
              <button onClick={handleclose} type="button" className="btn btn-outline-danger" title="btn btn-outline-danger" data-toggle="tooltip">
                {close ? 'Cerrar' : 'Cancelar'}
              </button>
            </div>
          </div>
        }
      </Modal>
    </>
  )
}
