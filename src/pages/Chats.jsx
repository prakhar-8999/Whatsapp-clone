import React, { useState } from 'react'
import './chats.css'
// import Loader from '../static/Loader'
import color from '../static/color';
const Chats = () => {


    // const[count,setcount] = useState(0);




    return (
        // count === 0 ? <Loader/>:
        <>
            <div style={{height:'5cm',backgroundColor:color.gray}}></div>
            <div class='frontview flex'>
                <div class='w-1/3' style={{backgroundColor:'#BBF7D0'}}>
                    <div class='flex'>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="default" class='prfileimg ml-4 mt-4' />
                        <div style={{marginTop:'25px',marginLeft:'280px'}}>
                            <button >
                                <i class="fa-solid fa-arrows-spin fa-2xl"></i>
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>
                                <i class="fa-solid fa-message fa-2xl"></i>
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>
                                <i class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class='w-2/3' style={{backgroundColor:'aliceblue'}}>

                </div>
            </div>
        </>
    )        
}

export default Chats