import React from 'react';
import './Contato.css';

function Forms(){
        
        const handleSubmit = () => { alert('FORMULÁRIO ENVIADO COM SUCESSO!'); 
    }
        return (
            <div className="formulario-container">
            <form onSubmit={handleSubmit} className="formulario">
            <legend className="tituloforms">Quem você deseja contactar?</legend>
            <br></br>

            <div className="input-group">
            <input type="text" name="nome" placeholder="Digite o seu nome" className="escrever"/>
            </div>
            <div className="input-group">
            <input type="number" name="numPessoas" placeholder="Quantidade de pessoas" className="escrever" />
            </div>
            <div className="input-group">
            <input type="email" name="email" placeholder="Digite o seu email" className="escrever" />
            </div>
            <div className="input-group">
            <label htmlFor="dtaNascimento" className="data">Data que você quer ver a pessoa</label>
            <br></br>
            <br></br>
            <input type="date" id="dtaNascimento" name="dtaNascimento" className="escrever"/>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <legend className="tituloforms2">Complete a frase: "Filho de cabaço, cabaço ___"</legend>
            <br></br>
            <div className="paicheck">
            <div className="checkbox-group">
            <input type="checkbox" id="fixacao" name="frase" value="é" />
            <label htmlFor="fixacao">é</label>
            </div>
            <div className="checkbox-group2">
            <input type="checkbox" id="projecao" name="frase" value="tem"/>
            <label htmlFor="projecao">Jamais será cabaço</label>
            </div>
            
            <div className="checkbox-group3">
            <input type="checkbox" id="cheiro" name="frase" value="verde"/>
            <label htmlFor="cheiro">Alienígena</label>
            </div>
            <div className="checkbox-group4">
            <input type="checkbox" id="cor" name="frase" value="bonito"/>
            <label htmlFor="cor">Bonito</label>
            </div>
            </div>
            <br></br>
            <br></br>

            <legend className="tituloforms3">Dê uma nota para seu professor:</legend>
            <br></br>
            <div className="input-range">
            <label>O professor é top?</label>
            <br></br>
            <input type="range" min="1" max="100" defaultValue="50" className="SatisfacaoGeral" id="SatisfacaoGeral" />
            </div>
            <br></br>
            <button type="submit" className="botao-enviar">Enviar</button>
            </form>
        
            </div>
        );
     }
export default Forms;