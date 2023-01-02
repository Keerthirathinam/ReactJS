import React from "react";

import profile from './profile.png';
import watch from './watch.png';
import './card.css';
import {Menuone} from "./Menu";
export function Congratscard(){
    return(
        <div className="content1">
            <Menuone/>
            <h1 className="center">Congratulations</h1>
            <div className="blue">
                <img className="profile" src={profile}/>
                <h1 className="name">Kiran V</h1>
                <p className="para">Vishnu Institute of Computer Education and Technology,Bhirmavaram</p>
                <br/>
                <img className="watch" src={watch}/>
            </div>
            
            
        </div>
    );
}
