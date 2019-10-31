import React from 'react'
import Img from '../../assets/images/chineselarki.jpg'
import Style from './Style'
import Button from 'react-bootstrap/Button';

export default ()=>{
    return(
    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 left-p">
                                <div class="middle-p col-md-4">
                                        <img class="" src={Img} width="100%" alt=""/>  
                                </div> 
                                <div class="head first col-md-4 second">
                                <h3 >SCTE•ISBE Standards</h3>
                                <p >DOCUMENTATION, FORMS, BULLETINS, AND MORE</p>
                                <p>The industry's only ANSI-accredited forum for the development  of technical specifications supporting cable telecommunications.</p>   
                                
                                <button type="button" className="btn head-button btn-secondary mt-3 align-item-center">VISITORS ACCESS</button>
                                </div> 
                      
                                <div class="middle-p col-md-4">
                                <img class="" src={Img} width="100%" alt=""/>  
                            </div>  
                        </div>
                    </div>
                <Style/>
                </div>
    );
}