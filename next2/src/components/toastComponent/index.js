import React,{ useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ToastComponent=(props)=> {

  const {showToast=false,mensaje='',tipo='success',theme='colored'} = props;

  const [show,setShow]= useState(false)

useEffect(() => {
  if (showToast) {
    setShow(true)
  }
},[showToast])

useEffect(() => {
  if (show) {
    handleToast()
  }
},[show])

const handleToast=() => {
  toast(`${mensaje}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type:tipo,
    theme: theme
    });
    setShow(false)

}
    return (
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}  draggable    />
    )
}
export default ToastComponent
