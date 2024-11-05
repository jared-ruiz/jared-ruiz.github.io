import React from "react";
import SketchArray from '../../Assets/JPG_Resrouces/sketchbook';

function Drawings() {
    return(
        <div className="sketchbook">
            <div className="grid">
                {SketchArray.map((image) => (
                   <img src={image.src} key={image.index} className="grid-items"></img>
                ))}
            </div>
        </div>


    )
}

export default Drawings;