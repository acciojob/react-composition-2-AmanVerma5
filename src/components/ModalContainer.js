import React from "react";

const ModalContainer=({handleClick})=>{

    window.addEventListener("click",function(event){
        if(event.target.classList.contains("model-overlay")){
            handleClick(false)
        }
    })
    return(
        <div className="model-overlay">
            <button className="model-close" onClick={()=>handleClick(false)}>Close</button>
            <p className="model p">This is the content of the modal</p>
        </div>
    )
}

export default ModalContainer