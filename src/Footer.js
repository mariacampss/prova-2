import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className='Menu2'>
            <div className='elementos'>  
             <div className='foto'>
                <img src={require('./SESI.png')} alt="LOGOSESI" width={100} />
            </div>
             </div>
               
            <p className='textinho'> 
            2024 Todos os direitos reservados ao povo do 3°/Informática para Internet. <br></br>
                 Contato: osmelhores@sesisenai.com </p> 
        </div>
        
    );

}



export default Footer;