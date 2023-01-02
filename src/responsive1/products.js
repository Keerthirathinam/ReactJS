import React from "react";
import fruits from "./fruits.jpg";
import vegatables from "./vegetables.jpg";
import salad from "./salad.jpg";
import "./products.css";
import { Menu } from "./menu";

export function Products(){
    return(
        <div>
            
        <div className=" productscontent p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4 mb-5">
                        <div className="card p-5">
                        <img className="rounded-circle fruits" src={fruits}/>
                        <h3 className="card-title">Fresh Fruits</h3>
                        <p className="card-text"> The Secret is using fresh seasonal produce in combination with good quality oils, vinegar or dairy. we choose the organic lifestyle</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5">
                        <div className="card p-5">
                        <img className="rounded-circle fruits" src={vegatables}/>
                        <h3 className="card-title">Vegetables</h3>
                        <p className="card-text"> The Secret is using fresh seasonal produce in combination with good quality oils, vinegar or dairy. we choose the organic lifestyle</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5">
                        <div className="card p-5">
                        <img className="rounded-circle fruits" src={salad}/>
                        <h3 className="card-title">Salad Leaves</h3>
                        <p className="card-text"> The Secret is using fresh seasonal produce in combination with good quality oils, vinegar or dairy. we choose the organic lifestyle</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    );
}