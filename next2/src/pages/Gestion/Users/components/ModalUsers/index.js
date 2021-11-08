import React, { useState,useEffect } from 'react'
import Modal from 'react-modal'
import ToastComponent from '../../../../../components/toastComponent'
import Request from '../../../../../utils/http'
import { Consumer } from '../../../../../context'
const request = new Request()

Modal.setAppElement('body');
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
 function ModalUsers(props) {
  const { open = false, setOpen = () => { }, reload, editMode, dataEdit,setEditMode} = props
  const {getDepartments} = props.context

  const [close, setClose] = useState(false)
  const [departents, setDepartments] = useState([])
  const [groups, setGroups] = useState([])
  const [user, setUser] = useState({
    id: 0,
    name: '',
    superUser: false,
    codUser: '',
    department: 0,
    group: 0,
    email: '',
    password: ''
  })
  const [toast, setToast] = useState({
    showToast: false,
    mensaje: '',
    tipo: 'success'
  })
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    let data = {
      name: user.name,
      email: user.email,
      password: user.password,
      userCode: user.codUser,
      userName: user.name,
      userGroup: user.group,
      superUser: user.superUser == true ? 1 : 0,
      department: user.department,
      active: 0,
      image: ''
    }
  let response = ''
     response = editMode ? await request.post('users/update', data) : await request.post('users/store', data)
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
    setUser({
      name: '',
      superUser: false,
      codUser: '',
      department: 0,
      group: 0,
      email: '',
      password: ''
    })
    setEditMode(false)
    setOpen(false)
    setClose(false)

  }

  const getInfoDepartment=async()=>{
    let information
    information = await getDepartments()
  
    if (information) {
      setDepartments(information.data)
      
    }
  }
  //efects 
  useEffect(() => {
    if (open) {
      getInfoDepartment()
    }
    if (editMode) {
      setUser({...user,
          id:dataEdit.id,
          name: dataEdit.nombre,
          superUser: dataEdit.superUser,
          codUser: dataEdit.codigo,
          department: dataEdit.dpto,
          group: dataEdit.userGroup,
          email: dataEdit.email
      }) 
    }
  },[open])
  useEffect(() => {
      let grupos = departents.find(department => department.id == user.department)
      if(grupos) setGroups(grupos.groupsList)
  },[user.department])
 
  return (
    <>

      <ToastComponent showToast={toast.showToast} mensaje={toast.mensaje} tipo={toast.tipo} />
      <Modal isOpen={open} style={customStyles} overlayClassName="Overlay">
       
       
        <div className="row p-4">

          <div className="form-group col-md-7">
            <label for="nameUser">Nombre de Colaborador</label>
            <input type="text" className="form-control" value={user.name} onChange={handleChange} id="nameUser" name='name' />
            {user.name.length < 5 && <small className="form-text text-danger">Campo Requerido. Minimo 5 caracteres</small>}
          </div>
          <div className="custom-control custom-checkbox col-md-5 mt-4">
            <input type="checkbox" name='superUser' checked={user.superUser} onChange={e => setUser({ ...user, superUser: e.target.checked })} className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" for="customCheck1">Super Usuario</label>
          </div>
          <div className="form-group col-md-12">
            <label for="codUser">Codigo de Usuario</label>
            <input type="text" name='codUser' className="form-control" value={user.codUser} onChange={handleChange} id="codUser" />
            {user.codUser.length < 5 && <small className="form-text text-danger">Campo Requerido. Minimo 5 caracteres</small>}
          </div>
          <div className="form-group col-md-12">
            <label for="department">Departamento</label>

       
            <select className="form-control" value={user.department} onChange={handleChange} id="department" name='department'>
            <option value='0'>selecciona una opcion</option>
              {departents.map((dep,key)=> <option key={key} value={dep.id}>{dep.departmentName}</option> )}
            </select>
            {user.department == 0 && <small className="form-text text-danger">Campo Requerido.</small>}
          </div>
          <div className="form-group col-md-12">
            <label for="group">Grupo</label>
           
            <select className="form-control" value={user.group} onChange={handleChange} id="group" name='group' >
              <option value='0'> selecciona una opcion</option>
              {groups.map((group,key)=> <option key={key} value={group.id}>{group.descriptions}</option> )}
            </select>

            {user.group == 0 && <small className="form-text text-danger">Campo Requerido. </small>}
          </div>
          <div className="form-group col-md-12">
            <label for="email">Email</label>
            <input type="text" className="form-control" value={user.email} onChange={handleChange} id="email" name='email' />
            {user.email.length < 1 && <small className="form-text text-danger">Campo Requerido. </small>}
          </div>
         {!editMode && <div className="form-group col-md-12">
            <label for="password">Password</label>
            <input type="password" className="form-control" value={user.password} onChange={handleChange} id="password" name='password' />
            {user.password.length < 8 && <small className="form-text text-danger">Campo Requerido. Minimo 8 caracteres</small>}
          </div>}

        </div>
        
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
        
      </Modal>
    </>
  )
}
export default Consumer(ModalUsers)
