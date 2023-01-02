import React, { useState } from "react";
import "../moodle/fruits.css";
import fruits from "../moodle/mango.png";
import banana from "../moodle/banana.png";
export function Fruits(){
    const[mangoincre,setmangoincre]=useState(0);
    const[bananaincre,setbananaincre]=useState(0);

    return(
       
        <div>
            <div className="row ml-0 mr-0 col-lg-12 container-fluid bg-warning p-5">
                <div className=" column bg-white rounded p-2">
                    <h1 className="col-lg-12 text-center">Bob ate {mangoincre} mangoes {bananaincre} bananas</h1>
                    <div className="row  col-lg-12">
                    <div className="col-lg-6 pl-5 pt-5">
                        <img className="col-lg-12 mango" src={fruits} /><br/>
                        <button className="ml-5 btn bg-primary text-white" onClick={()=>setmangoincre(mangoincre+1)}>Eat Mango</button>
                    </div>
                    <div className="col-lg-6 pb-5">
                    <img className="col-lg-12 banana" src={banana}/><br/>
                    <button className="ml-5 btn bg-primary text-white" onClick={()=>setbananaincre(bananaincre+1)}>Eat Banana</button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}