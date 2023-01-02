import React from "react";
import '../moodle/feedback.css';
import sad from './sademoji.jpg';
import exhaust from './exhaustemoji.jpg';
import happy from './happyemoji.jpg';
import heart from './heartemoji.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export function Feedback()
{
    return( 
        <div className="container-fluid">
            <div className="row feedbackone">
        <div className="col-lg-3 ">
                                                            </div>
                    <div className="col-lg-5 row p-5 m-5 feedbacktwo">
                                <h3>How satisfied are you with our customer support performance?</h3>
                            <div className="column col-lg-4">
                                    <img src={sad} className='sad col-lg-12 m-3'/>
                                    <h6 className="ml-4">Sad</h6>
                            </div>
                                    <div className="column col-lg-4">
                                        <img src={exhaust} className=' col-lg-12 m-3'/>
                                        <h6 className="ml-4">exhaust</h6>
                                    </div>
                                        <div className="column col-lg-4">
                                            <img src={happy} className=' col-lg-12 m-3'/>
                                            <h6 className="ml-4">Happy</h6>
                                        </div>
                
                    </div>
                <div className="col-lg-3"></div>

            </div>
            <div className="row feedbackone">
                <div className="col-lg-3 ">
                    </div>
                    <div className="col-lg-5 row p-5 m-5 feedbacktwo">
                               <div className="column col-lg-12">
                                    <img src={heart} className='heart '/>
                                    <h3 className="mb-3">Thank You!</h3>
                                    <h6 className="m-3">We will use your feedback to improve our customer support performance</h6>
                               </div>
                    </div>
                
                <div className="col-lg-3"></div>

            </div>
        </div>
        
    );
}