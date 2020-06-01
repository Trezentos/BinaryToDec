import React, {useState} from 'react'
import ReactDOM from 'react-dom';


import {
  FieldForm,
  BDText,
  Field,
  BinaryInput,
  StyledTitle,
  DecimalOutput,
  BotaoBonito
} from './components/layouts/styles'

function App(){
 const [binaryText, setBinaryText] = useState("")
 const [decimalText, setDecimalText] = useState("")
 const [errorText, setErrorText] = useState("")

  const converter = e =>{
    e.preventDefault()

    if( binaryText.match(/^[0-1]+$/g) === null){
      
      return
    }


    const valorInvertido = binaryText.split("").reverse().map(Number) 

    const somarBinarios = (acumulador, atual, index) =>{ 
         return acumulador + atual*Math.pow(2,index) 
    }
  
    const resultado = valorInvertido.reduce(somarBinarios)      
    setDecimalText(resultado)
  }


  return (
    <>
    <StyledTitle>Conversor de Binário para Decimal</StyledTitle>
    <FieldForm onSubmit = {converter} >


      <br/>

      <Field>

      <BDText> Binary Input </BDText>

      <div>
      <BinaryInput
      
      type="text"
      value = {binaryText}
      onChange = {e => setBinaryText(e.target.value)}
      placeholder="Insira 0 ou 1"
      
      /> 
      <BotaoBonito type="submit">Converter!</BotaoBonito>

      </div>
      
      </Field>
      

      <Field>
      <BDText> Decimal Output </BDText>
     
      <DecimalOutput 
      type="text"
      name="DecimalText"
      value = {decimalText}
      disabled= "off"

      />
      </Field>
      

    </FieldForm>
    </>
  )

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

