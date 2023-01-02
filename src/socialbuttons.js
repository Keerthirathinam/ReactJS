import React from "react";
import './socialbuttons.css';
import {Menuone} from "./Menu";

export function Socialbuttons(){
    return(
        <div>
            <Menuone/>
    <div className="content2">
            <h1 className="text">Social Buttons</h1>
        

        
            <button className="like">Like</button>
            <button className="comment">Comment</button>
            <button className="share">Share</button>
            </div>
    </div>
    );
}