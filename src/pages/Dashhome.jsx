import React from 'react'
import './chats.css'
import dashhomeimage from '../images/dashhomeimage.png'
const Dashhome = () => {





    return(
      <>
              <div class="flex justify-center items-center" style={{height:'100%'}}>
                <div class='text-center'>
                    <img src={dashhomeimage} alt="dashhomeimage" style={{width:'30rem',margin:'auto'}} />
                    <h1 class='text-3xl font-extrabold'>FrameUp Web</h1><br />
                    <p class='text-xm'>Send and receive messages without keeping your phone online</p>
                    <p class='text-xm'>Use FrameUp on up to 4 linked devices and 1 phone at the same time</p>
                </div>
              </div>
      </>
    )
}

export default Dashhome