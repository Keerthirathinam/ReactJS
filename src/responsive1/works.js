import React from "react";
import sheep from "../responsive1/sheep.jpg";
import "./work.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./menu";
import work2 from "../responsive1/work2.jpg";
import work3 from "../responsive1/work3.jpg";


export function Work(){
    return (
        <div>
            
        <div className="container-fluid workcontent">
            <div className="text-center container pt-5">
                <h1 className="text-white">How It Works?</h1>
                <p className="text-white">At Live Organic, we work with local farmers and producers to bring you peak-quality, high-integrity organic fruits and vegetables. Same DayAt Live Organic, we work with local farmers and producers to bring you peak-quality, high-integrity organic fruits and vegetables</p>
                

                <div className="container">
                    <div className="row pb-5">

                        <div className="col-lg-4 mt-4">
                            <div className="card">
                            <img className="sheep" src={sheep}/>
                            
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.et a impedit obcaecati consequatur modiet a impedit obcaecati consequatur modi Dolor ipsum neque</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 mt-4">
                        <div className="card"> 
                            <img className="sheep" src={work2}/>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.et a impedit obcaecati consequatur modiet a impedit obcaecati consequatur modi Dolor ipsum neque</p>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <img className="sheep" src={work3}/>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.et a impedit obcaecati consequatur modiet a impedit obcaecati consequatur modi Dolor ipsum neque </p>
                            </div>

                        </div>
                        

                    </div>
                    
                </div>
                
                </div>
                


               
            </div>
        </div>
    );
}