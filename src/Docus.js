import React from 'react'; 
import haftorah from './SS_Haftorah.pdf'; // Tell webpack this JS file uses this image
import torah from './SS_Torah.pdf'; // Tell webpack this JS file uses this image

export default function Docus ( ) {

    return (
        
        <div >
                <embed src={haftorah} type="application/pdf" loading="lazy" height="700px" width="700px"/>
                <embed src={torah} type="application/pdf" loading="lazy" height="700px" width="700px"/> 
        </div>
);
}