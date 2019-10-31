import React from 'react';
import Style from './style';
import Logo from '../../assets/images/scteisbe-logo-full-2017-reverse-copy.png'
import Cart from '../../assets/images/cart.png'
import Search from '../../assets/images/page-1-copy.png'
import Carousel from 'react-bootstrap/Carousel'

export default () => {
    return (   
                <div>
                <header className="container-fluid">
                
                <div className="row">
                   
                <div className="col-md-12">
                   
            <div className="logo">
                <img src={Logo}></img>
            </div>
        <div className="col-md-7">
        <div className="container">
        <nav>
          <ul className="container ul-reset">
            <li><a href='#'>WHAT WE DO</a></li>
            <li className='droppable'>
              <a href='#'>Category One</a>
              <div className='mega-menu'>
                  <div className="container cf">
                  <ul className="ul-reset">
                    <h3>Heading 1</h3>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 2</h3>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 3</h3>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                    <li><a href='#'>Category One Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 4</h3>
                    <li>Heading 5</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className='droppable'>
              <a href='#'>Category Two</a>
              <div className='mega-menu'>
                <div className="container cf">
                  <ul className="ul-reset">
                    <h3>Heading 1</h3>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 2</h3>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 3</h3>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                  </ul>
                  <ul className="ul-reset">
                    <h3>Heading 4</h3>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                    <li><a href='#'>Category Two Sublink</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href='#'>Category Three</a></li>
            <li><a href='#'>Category Four</a></li>
            <li><a href='#'>Category Five</a></li>
            <li><a href='#'>Category Six</a></li>
          </ul>
        </nav>
            </div>
            </div>
            <div className=" header-div1">
            <ul>
                                <li><button type="button" class="btn btn-outline-warning btn-back header-text">JOIN US</button></li>
                                <li><button type="button" class="btn btn-warning  header-text">login</button></li>
                                <li><img src={Cart}/></li>
                                <li><img src={Search}/></li>
                            </ul>
            </div>
        
            </div>
        
        
        
            
        
        
                </div>
                <Style/>

                  {/* -------------------------------------------------------------- */}
          

                </header>

        <div>
        <Carousel>
           <Carousel.Item>
             <img 
               className="d-block w-100"
               src={require('../../assets/images/b7.jpg') }
               alt="First slide" height={800}
               
         />
             <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img 
               className="d-block w-100"
               src={require('../../assets/images/b6.jpg')} 
               alt="Third slide" height={800}
             />

             <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img 
               className="d-block w-100"
               src={require('../../assets/images/b5.JPG')}  
               alt="Third slide" height={800}
             />

             <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel> 


     </div>            
                
  

                </div>

  );
}