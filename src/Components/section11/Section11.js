import React from 'react'
import Style from './style'

export default () =>{

    return(

        <div class="three-colomuns d-flex justify-content-around ">
        
        <div class="left-part mt-5 ">
            <h6 class="ml-3" >SERVING THE CABLE INDUSTRY SINCE 1969</h6>

            <p class="col-sm-9 ">SCTE-ISBE is a proud to serve as the technical and applied science leader for the cable telecommunication industry, providing meaningful resources and programs for members and the industry.</p>
                    
            <p>© 2019 SCTE-ISBE ALL RIGHTS RESERVED.</p>
        </div>
    

        <div class="middle-part mt-5 col-sm-3  ml-0">
            <h6 class="ml-4">QUICK LINKS</h6>
            
            <ul>
                    <li>Standards</li>
                    <li>Education</li>
                    <li>Certification</li>
                    <li>Terms of Use</li>
                    <li>GDPR/Privacy</li>	
                    </ul>	
        </div>

        
        <div class="right-part mt-5 ">
            <h6>GET STARTED</h6>
            
            <p>Get started on your membership journey today for FREE. 
               Acess exclusive content and member benefits right away.</p>
            
            <button type="button" class="btn  btn-warning  three-columns-btn">TAKE A TEST DRIVE</button>

             <button type="button" class="btn btn-secondary three-columns-btn-se">CONTACT US</button>
        </div>

        <Style/>

    </div>


    );

}