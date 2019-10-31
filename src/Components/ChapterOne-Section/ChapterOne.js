import React from 'react'
import Style from './style'

export default () =>{
    return(
            <div className="Container-fluid body">
                   <div className="Column">
                        
                        {/* heading section */}
                        <div className="header">
                               <h1>70 CHAPTERS. ONE WORLD.</h1> 
                        </div>
                          {/* paragraph   */}
                        <div className="paragraph">
                            <p>SCTE•ISBE Chapters provide local networking, professional development, and SCTE•ISBE certification opportunities to current and prospective members in 70 locations across the globe.</p>
                        </div>
                   </div>  
                   <Style/> 
            </div>
    );
}