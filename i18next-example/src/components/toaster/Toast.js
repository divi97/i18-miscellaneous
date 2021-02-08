import React from 'react';
import { toast, Slide, Zoom, Bounce, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Toast.module.scss'

toast.configure()

const CustomToast = () => {
    return (
        <div className='example1'>
            <h1 className='example2'>Custom scss applied!</h1>
            {/* <button onClick = {closeToast} > Close </button> */}
        </div>
    )
}
function Toast() {

    const notify = () => {
        toast('Notification Ayi Hai !!!', { position: toast.POSITION.TOP_CENTER, transition: Slide })
        toast.success('Notification Ayi Hai !!!', { position: toast.POSITION.TOP_CENTER, transition: Zoom, hideProgressBar: true })
        toast.warning('Notification Ayi Hai !!!', { position: toast.POSITION.TOP_CENTER, transition: Flip, hideProgressBar: true })
        toast.error('Notification Ayi Hai !!!', { position: toast.POSITION.TOP_CENTER, transition: Bounce, hideProgressBar: true })
        toast.info('Notification Ayi Hai !!!', { position: toast.POSITION.TOP_CENTER, transition: Slide })
        toast.dark(<CustomToast />, { position: toast.POSITION.TOP_CENTER, transition: Slide })
    }
    return (
        <div>
            <button onClick={notify} >Notification Du?</button>
        </div>
    )
}

export default Toast
