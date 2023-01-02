import React from "react";
import "./organic.css";
import organic from "./organic.jpg";
import { Menu } from "./menu";
export function Organic(){
    return(
        <div>
            
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-lg-6 col-12  organiccontent">
                <h4 className="happy1">Happy Farming</h4>
                    <h3 className="happy">Organic Foods</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <button className="btn btn-warning text-white">Learn More</button>
                    

                </div>
                <div className="col-lg-6 col-12 text-center pr-0 pl-0 mt-2">
                <img src={organic} className="testi"/>
                </div>

            </div>
        </div>

        </div>
    );
}