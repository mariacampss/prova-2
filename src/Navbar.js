import React from 'react';
import './Nav.css';


function Navbar(){
    return(
        <nav className='Menu'>  
        
            <div className='logo'>
            <img src={require('./SENAI.png')} alt="LOGOSENAI" width={150}/>
          </div>  
       {  <div className='elementos-nav'>
            <ul>
                <a href='/' className='link'>Home</a>
            </ul>
            <ul>
                <a href='' className='link'>Contato</a> 
            </ul>
            <ul>
                <a href='b' className='link'>Quem Somos</a>
            </ul>
        </div>}

        </nav>

        
    );



}



export default Navbar;