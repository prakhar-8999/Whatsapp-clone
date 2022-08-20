import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <>
            <div class="loadclass">
                <div class="spinner">
                    <div class="set1">  
                        <div class="ball"></div>
                        <div class="ball"></div>
                    </div>
                    <div class="set2">
                        <div class="ball"></div>
                        <div class="ball"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader