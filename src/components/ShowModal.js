import React from "react";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const ShowModal=()=>{
    let [open,setOpen]=useState(false)
    
    
    return(
        <div className="show-modal">
            <button onClick={()=>setOpen(true)}>Show Modal</button>
            {open && <ModalContainer handleClick={setOpen} />}
            <p className="model-p">This is the content of the modal</p>
        </div>
    )
}

export default ShowModal