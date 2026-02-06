import React, { useState } from 'react'
import './Imesada.css'

function Imesada() {
    const [saldo, setSaldo] = useState(0);
    const [inputValor, setInputValor] = useState('');

    function creditar(){
        setSaldo(saldo + Number(inputValor))
        setInputValor('')
    }
    function debitar(){
        setSaldo(saldo - Number(inputValor))
        setInputValor('')
    }


    function atualizarValor(e){
        setInputValor(e.target.value)
    }

    return (
        <div className={"container-imesada"}>
            <div className="form-imesada">
                <img src="./imgs/porco.png" alt="" className="imagem-porco"  />
                <h2>iMesada</h2>
                <p>Controlinho financeiro</p>
                <p>💰Saldo: R${saldo}💸</p>
                <input type="number"
                    value={inputValor}
                    onChange={atualizarValor}
                />
                {/* {inputValor} */}
                <div className="botoes">
                    <button onClick={creditar}>Creditar</button>
                    <button onClick={debitar}>Debitar</button>
                </div>
            </div>
        </div>
    )
}

export default Imesada
