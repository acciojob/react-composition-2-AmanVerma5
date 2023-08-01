import React from "react";

const ModalContainer=({handleClick})=>{
    return(
        <div className="modal-overlay">
            <button className="modal-close" onClick={()=>handleClick(false)}>Close</button>
            <p className="modal-p">This is the content of the modal</p>
        </div>
    )
}

export default ModalContainer