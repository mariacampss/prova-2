import React from 'react';
import './Nav.css';
/* import {Link} */


function Navbar(){
    return(
        <nav className='Menu'>  
        
            <div className='logo'>
            <img src={require('./SENAI.png')} alt="LOGOSENAI" width={150}/>
          </div>  
       {  <div className='elementos-nav'>
            <ul>
                Home     
            </ul>
            <ul>
                Contato   
            </ul>
            <ul>
                Quem Somos    
            </ul>
        </div>}

        </nav>

        
    );



}



export default Navbar;