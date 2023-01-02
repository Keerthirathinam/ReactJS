import React from "react";
import './league.css';
import logo1 from './rcb.png';
import logo2 from './csk.png';
import {Menuone} from "./Menu";

export function League(){
    return(
        <div><Menuone/>
            <div className="bg">
                
                <div className="content">
                <h1>Super Over League</h1>
                <div className="logos">
                    <img className="image" src={logo1}/>
                    <img className="image" src={logo2}/>
                </div>
                </div>
            </div>
            </div>
        
    );
}