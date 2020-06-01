import styled from 'styled-components'

export const StyledTitle = styled.h1`

font-family:'Gill Sans', 'Gill Sans MT';

`

export const FieldForm = styled.form`

border: 2px solid gray;
border-radius:4px;
background-color: deepskyblue;
height: 200px;
width:60%;
max-width:500px;

`

export const BDText = styled.span`
font-family:'Gill Sans', 'Gill Sans MT';
font-size: 1.2em;
margin-bottom: 7px;

`
export const Field = styled.div`

margin-top:10px;
display:flex;
flex-direction:column;
margin-left: 5%;


`

export const BinaryInput = styled.input`
    width:45%;
    height: 35px;
    background: #e0f0f0;
    border: gray solid 2px;
    border-radius: 5px;
    padding: 4px;
    font-size:1.2em;
    color:black;


`

export const DecimalOutput = styled.input`
    width:45%;
    height: 35px;
    background-color: #e0f0e0;
    border-radius: 5px;
    margin-bottom:15px;
    border: gray solid 2px;
    padding: 4px;
    font-size: 1.2em;
    color:black;

`
export const BotaoBonito = styled.button`
width:30%;
height: 40px;
margin-left: 5px;
border: black solid 1px;
border-radius: 3px;
padding: 5px;
font-size:18px;

cursor: pointer;

&&:hover{
    border: blueviolet 1px solid;
    color: blueviolet;
    transition: 0.5s;
}

`