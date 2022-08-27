import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
const Alert = (aldata) => {


    console.log(aldata)
    const givealert = () => {
        if(aldata.status === 200 && aldata.data.msg === 'Success'){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfull !!!!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        if(aldata.status === 200 && aldata.data.msg === 'Account created'){
            Swal.fire({
                icon: 'success',
                title: aldata.data.msg,
            })
        }
        if(aldata === 'no profile pic'){
            Swal.fire({
                icon:'info',
                title:'PLEASE SELECT A FILE ....'
            })
        }
    }
    givealert();

    return (
        <div>Alert</div>
    )
}

export default Alert