import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Datetask(){

    function enddate(){
        var currentdate=document.getElementById("date").value;
        var newDate1=new Date(currentdate);
        newDate1.setDate(newDate1.getDate(currentdate)+90)
        document.getElementById("val").innerHTML=newDate1.getDate()+"/"+(newDate1.getMonth()+1)+"/"+newDate1.getFullYear();

    }

    return(
            <div>
                <input type="date" id="date"/>
                <button className="btn bg-primary text-white" onClick={enddate}>END DATE</button>
                <h2 id="val"> </h2>
            </div>
    );
}
