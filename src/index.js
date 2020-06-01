import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

function App(){
const [entrada, setEntrada] = useState("")
const [saida, setSaida] = useState("")
const [erro, setErroM] = useState("")

const botarSobrenome = e =>{
  e.preventDefault()

  const nome = entrada.concat(" de Adrade Fagundes é muito gato")
  setSaida(nome)

  if (entrada.match(/^[0-1]+$/g) === null) {
    setErroM('Enter either 0 or 1')
    return
  }

}


return(
  <>
  <form onSubmit = {botarSobrenome}>
    <input 
      name="Entrada"
      className="inputDoG"
      value={entrada}
      placeholder="Nome para completar com sobrenome do Gustavo"
      onChange={ e => setEntrada(e.target.value) }
    />
    <br/>
    <input
      name="saida"
      className="saida"
      value = {saida}
      placeholder = "Nome completo!"
    
    />
    <br/>
    <button type="submit">Adicionar!</button>
  </form>

  </>
)

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

