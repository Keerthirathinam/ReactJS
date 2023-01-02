import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck,faCircleExclamation,faBell} from '@fortawesome/free-solid-svg-icons';
import {Menuone} from "./Menu";

export function Notification(){
    return(
        <div>
            <Menuone/>
            <div className="container col-lg-6">
            <h1 className="text-center m-5"><b>Notifications</b></h1>
            <div className="bg-primary container rounded-lg text-white text-left p-3 m-3 ">  
                <h2><FontAwesomeIcon icon={faCircleCheck}/> Information Message</h2>
            </div>
           
            <div className="bg-success container rounded-lg text-white text-left p-3 m-3 ">  
                <h2><FontAwesomeIcon icon={faCircleCheck}/> Success Message</h2>
            </div>
          
            <div className="bg-warning container rounded-lg text-white text-left p-3 m-3">  
                <h2><FontAwesomeIcon icon={faBell}/> Warning Message</h2>
            </div>
            
            <div className="bg-danger container rounded-lg text-white text-left p-3 m-3">  
                <h2><FontAwesomeIcon icon={faCircleExclamation}/> Error Message</h2>
            </div>
            </div>
        </div>
    );
}