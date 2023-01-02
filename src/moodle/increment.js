import React, { useState } from "react";

export function Increment(){
    const [Increment,setIncrement]=useState(0);
    var a=0;
    


    return(
        <div>
            <h1 className="ml-5">{Increment}</h1>
           <button className="btn btn-primary ml-5" onClick={()=>setIncrement(Increment+1)}>Increment</button>
           <button className="btn btn-danger ml-5" onClick={()=>setIncrement(Increment-1)}>Decrement</button>
           <button className="btn btn-warning ml-5" onClick={()=>setIncrement(0)}>Reset</button>

        </div>
    );
}