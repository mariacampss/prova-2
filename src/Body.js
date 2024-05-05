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
                    <img src={require('./FOTO3.jpg')} className='monica' alt="turma da monica" width={170}/>
                    <h3 className='titulos'>Povo da Turma <br></br>
                    da Monica</h3>  
                </div>

                <div className='imagens'>
                    <img src={require('./FOTO6.jpg')} className='foveiras' alt="foveiras" width={200}/>
                    <h3 className='titulos'>Foveiras e o <br></br>
                    Teacher TOP!!!</h3>  
                </div>

                <div className='imagens'>
                    <img src={require('./FOTO7.jpg')} alt="operadoras" width={150}/>
                    <h3 className='titulos'>As Operadoras <br></br> TIM e Claro + <br></br> Flanelinha</h3>  
                </div>
        
                <div className='imagens'>
                    <img src={require('./FOTO5.jpg')} alt="tigre" width={150}/>
                    <h3 className='titulos'>Tigrinho Man</h3>  
                </div>

                <div className='imagens'>
                    <img src={require('./FOTO4.jpg')} alt="dolly" width={150}/>
                    <h3 className='titulos'>Dollynho e não <br></br>sei as outras <br></br> duas</h3>  
                </div>

                <div className='imagens'>
                    <img src={require('./HOME.jpg')} className='turma' alt="todo mundo" width={150}/>
                    <h3 className='titulos'>A Turma Mais <br></br>F$#% do <br></br> SESI/SENAI </h3>  
                </div>

            </div>
        </div>
        

    );
}



export default Body;