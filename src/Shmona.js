import React from 'react'
import shmonaaa from "./shmonaEs.pdf";



export default function Shmona( ) {

    return (        

        <div>
            <div style={{ color: 'white' }}> 
                <h1>Practice the Shemona Esrei / Amida / Silent Prayer!</h1>
            </div>                

            <embed src={shmonaaa} type="application/pdf" loading="lazy" height="700px" width="700px"/>

        </div>

    )
}
