import React from 'react';
import '../../assets/style/style.css'
import Button from 'react-bootstrap/Button';
import Style from './sectionOnestyle'
import ImageBelow from '../../assets/images/orangearrowdown.png'

export default () => {
    return (
        <div className="container-fluid bg">
            <div className="column button-center">
                <div className="buttons d-flex justify-content-center">
                <Button variant="primary ">JOIN A CHAPTER</Button>
                <Button variant="primary ml-4">JOIN FIND MY COMPANY</Button>
                <Button variant="primary ml-4">JOIN SCTE_ISBE</Button>
                <Button variant="primary ml-4">MEMBERSHIP BENEFITS</Button>
                </div> 

                <div className="img d-flex justify-content-center">
                    <img src={ImageBelow}/>
                </div>
            </div>
            <Style/>
        </div>

    
    );
}