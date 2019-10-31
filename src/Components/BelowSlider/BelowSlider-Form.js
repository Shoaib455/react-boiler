import React from 'react'
import Style from  './style'
import Form from 'react-bootstrap/Form';


export default()=>{
    return(
        <div className="container-fluid belowSlider">
            <div className="column mt-5 padd d-flex flex-column justify-content-center">
                 <div className="h3 mt-5 flex-column justify-content-center">
                    <h1>GET CONNECTED. JOIN US!</h1>
                
                    <p className="mt-5">Members get exclusive access to apps, tools and content resources unavailable anywhere else. Automatically receive the benefits of SCTE•ISBE membership when you join.</p>
    
                 </div>   
                
                                    
                 <div class="input-three cc d-flex justify-content-center">
                              <form class="form-inline">
                                 <input type="text" placeholder="Name"/>
                                 <input type="text" placeholder="Contact Number"/>
                                 <input type="text"placeholder="Email"/>
                              </form>
                 </div>

                {/* <div className="inputs d-flex justify-content-center">
                <Form.Control size="lg" type="text"   placeholder="Large text" />
                <Form.Control size="lg" type="text"   placeholder="Large text" />
                <Form.Control size="lg" type="text"   placeholder="Large text" />
                </div>     */}

            </div>
        <Style/>
        </div>

    );
}