import React from 'react'
import Style from './style'
import Img from '../../assets/images/larki.jpg'

export default () =>{
    return(

        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 left-p">
                        <div className=" col-md-4  first first-media">
                            <h3>SCTE•ISBE Standards</h3>
                            <p>DOCUMENTATION, FORMS, BULLETINS, AND MORE</p>
                            <p>The industry's only ANSI-accredited forum for the development  of technical specifications supporting cable telecommunications.</p>   
                            
                            
                            <button type="button" class="btn btn-secondary mt-3  btn-first-one">VISIT STANDARDS</button>
                            
                        </div> 
                        <div class="middle-p col-md-4">
                                <img className="f-row-image" src={Img} width="100%" alt=""/>  
                        </div> 
                        <div className="right-p col-md-4 first">
                                <h3>SCTE•ISBE Standards</h3>
                                <p>DOCUMENTATION, FORMS, BULLETINS, AND MORE</p>
                                <p className="first-p">The industry's only ANSI-accredited forum for the development  of technical specifications supporting cable telecommunications.</p>   
                                <button type="button" className="btn btn-secondary mt-3  btn-second-two">GET CERTIFIED</button>
                        </div> 
                    </div>
                </div>
            </div>
            <Style/>
        </div>

    );
}