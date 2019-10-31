import React from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'


export default (props) => {
    return (

        // import Background from '../../assets/images/bitmap-copy-3@2x.jpg'
        // for inline style: style={{backgroundImage:`url(${Background})`}}

        <div >
            <Header />
            {props.children}            
            <Footer />
        </div>
    );
}