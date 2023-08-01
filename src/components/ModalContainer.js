import React from "react";

const ModalContainer=({handleClick})=>{
    return(
        <div className="model-overlay">
            <button className="model-close" onClick={()=>handleClick(false)}>Close</button>
            <p className="model-p">This is the content of the modal</p>
        </div>
    )
}

export default ModalContainer