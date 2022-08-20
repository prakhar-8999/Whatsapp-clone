import React, { useState } from 'react'
import Loader from '../static/Loader'
const Chats = () => {


    const[count,setcount] = useState(0);




    return count === 0 ? <Loader/>:<>qequ</>
        
}

export default Chats