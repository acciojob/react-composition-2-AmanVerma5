import React from "react";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const ShowModal=()=>{
    let [open,setOpen]=useState(false)
    
    
    return(
        <div className="show-modal">
            <button onClick={()=>setOpen(true)}>Show Modal</button>
            {open && <ModalContainer handleClick={setOpen} />}
        </div>
    )
}

export default ShowModal