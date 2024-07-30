import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/Frases';
import Calculadora from './components/Calculadora';
function Saudacao(){
  return <h1>HelloWorld 3</h1>;
}

function App() {


  return (
    <>
      <Saudacao/>
      <Mensagem texto={"Meu texto"}/>
      <Frase/>
      <Calculadora/>
    
    </>
  )
}

export default App
