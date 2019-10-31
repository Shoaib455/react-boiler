import React from 'react'
import Style from './style'

export default () =>{
    return(

        <div className="container-fluid  sss">
            
                <div className="column  d-flex flex-column">
                    
               
                    <div className="d-flex h3 mt-5 justify-content-around">
                    <h3 className="mt-4">Register for your company-sponsored training</h3>     


                         <div className="mt-4">   
                         <select className="select">
                            <option value="">Select your Country</option>
                            <option value="">Cox Communication</option>
                            <option value="">Charter Communication</option>
                            <option value="">Test EL Company</option>
                         </select>        
                        <button  type="button" className="btn btn-green ml-2 mb-2 ">GO</button>
                        </div>    
                    </div>

                </div>
                <Style/>
        </div>

    );
}