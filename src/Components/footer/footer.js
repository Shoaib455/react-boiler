import React from 'react';
import Style from  './style'
import Img from '../../assets/images/search.png'
import Imgfacebook from '../../assets/images/facebook@3x.png'
import '../../assets/style/style.css'

export default () => {
    return (
        <div className="container-fluid footer-image">
        <div className="footer d-flex flex-column">
                
                <div className="mt-5 d-flex flex-row justify-content-around">
                <div className="mt-5 icon-parts">
                    <img src={Imgfacebook} width="20px;"/>    
                    <img className=" ml-4"src={Imgfacebook} width="20px;"/>
                    <img className=" ml-4" src={Img} width="20px;"/>

                </div>

                <div className="mt-5 p ml-5">
                    <p >You are welcome to call upon any staff member for support and assistance.</p> 
                     <p>   You are welcome to call upon any staff member for support and assistance</p>
                            
                        <p ><b>140 philps Rd,Exton,PA 19341    Local Phone:610363,6888</b></p>
                </div>

                <div className="">

                </div>
                <div className="set2 mt-5"> <img src={Img}  alt=""/>
                <a className="ml-3 search mt-5" href="">SEARCH</a>
                </div>

            </div>
        </div>
        <Style/>
        </div>
    );
}