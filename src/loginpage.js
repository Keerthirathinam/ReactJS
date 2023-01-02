import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./loginpage.css";
import system from "./system.png";
import {Menuone} from "./Menu";


export function Login(){
    return(
        <div>
            <Menuone/>
            <div className="container-fluid background p-5">
                
                <div className= "bg-white whitebox">
                    <div className="row p-5">
                        <div className="col-lg-6 d-flex flex-row justify-content-center">
                        <div className="log">
                        <img className=" container" src={system}/>
                        </div>
                        </div>   
                            <div className="col-lg-6 text-center">
                                <h1 className="">Member Login</h1>
                                <input type="email" placeholder="Email" className="pl-5 p-3 one mt-4"/>
                                <input type="password" placeholder="******" className="pl-5 p-3 one mt-5"/>
                                <button className="btn btn-success button p-3 mt-5"> LOGIN</button>
                               <p className="mt-3 ">Forgot: <a href="" className="text-success">User name/Password ?</a></p>
                               <a href="" className="text-success">Create your Account</a>
                            </div>
                          
                        

                    </div>


                </div>


                </div>
            </div>
        
    );
}