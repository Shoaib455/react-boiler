import React from 'react'
import Style from './style'
import Img from '../../assets/images/tialopez-1561137805727.jpeg'

export default () =>{
    return(    
       
       <div className="container-fluid mt-4">
        <div className="row col-md-12 d-flex">
            
            <div className="left col-md-4 d-flex">
                <div className="left d-flex flex-column girl-man-img">
                    <div>
                        <img src={Img} width="250px" alt=""/>
                    </div>
                    <div class="img-below-head justify-content-around ml-5">
                        <h5 class="ml-5">Tia Lopez</h5>
                    </div>
                    <div class="below-head-img ml-5">
                        <p>Recipient of the 2019 SCTE Foundation's Catherine Oakes Scholarship</p>
                    </div>
                    <div>
                        <p class="ml-1"><b> Member Since 2014</b></p>
                    </div>
                    
                    <div class="p-last">
                        <p><b>Chapter:</b> South And Central Americas Chapter</p> 
                    </div>
    
                    </div>


                    <div className="left col-md-4 amedia ml-4">
                                <div className="left d-flex flex-column girl-man-img ">
                                    <div>
                                        <img src={Img} width="250px;" alt=""/>
                                    </div>
                                    <div className="keith-h5">
                                        <h5 className="">Keith Weilert, Comcast</h5>
                                    </div>
                                    <div className="golden ml-4">
                                        <p>Golden State Chapter Technician of the Year</p>
                                    </div>
                                    <div className="ml-5">
                                        <p className=""><b> Member Since 2013</b></p>
                                    </div>
                                    
                                    <div className="p-last mt-2">
                                        <p><b>Chapter:</b> Chapter: Golden Gate Chapter</p> 
                                    </div>
                                </div>
                            </div>
                        
                        <div class="col-md-4">
    
                        </div>

                


            </div>
        </div>
        <Style/>
    </div>      

    );
}