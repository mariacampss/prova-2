import React from 'react';
import './Body.css';

function Body(){
    return(
        <div className='bode'>
            <div className='titulo'>
                <h1>Bem-vindos à Página Inicial da nossa AV2</h1>
                <p>Conheça os melhores COSPLAYS do SESI/SENAI</p>
            </div>

            <div className='conteiner'>
                <div className='imagens'>
                    <div className='MONICAS'>
                    <img src={require('./FOTO3.jpg')} alt="turma" width={100}></img>
                     <h3>Povo da Turma da Monica</h3> 
                    </div>

                     <div className='imagens'>
                    <div className='Fov'>
                    <img src={require('./FOTO6.jpg')} alt="aaa" width={100}></img>
                     <h3>Foveiras e o Teacher Top</h3>
                    </div>

                    <div className='imagens'>
                    <div className='Fov'>
                    <img src={require('./FOTO7.jpg')} alt="B    " width={100}></img>
                     <h3>As operadoras TIM e Claro + Flanelinha</h3>
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        

    );
}



export default Body;