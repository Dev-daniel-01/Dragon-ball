import logo from "./assets/images/dragon-ball-super-logo.png"

import { useState } from 'react'

import style from './App.module.css'

import {Menu} from './components/menu.jsx'

function App() {
  const [aparecerVideo, setAparecerVideo] = useState(false)
  const [aparecerBotao, setAparecerBotao] = useState(false)

  return (
    <>
     {/* {first ? <nav>batata</nav>: <nav>Arroz</nav>}
     <button onClick={() => setfirst(true)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="" /></button> */}
   <Menu option01='Início' option02='Personagens'/>
   <div>
      <div className={style.primeira}>
        <img src={logo} alt="logo" className={style.logo}/>
       
        <div className={style.wrapInfo}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore vitae omnis aliquid at, delectus voluptatem tenetur earum inventore cum incidunt quas.</p>
        <button onClick={ () => {setAparecerBotao(true)}}>Quero ver o video</button>
        {aparecerBotao &&   <button onClick={() => {setAparecerVideo(true)} }>Cu</button>}
        </div>
       
       <div className={style.Aparecervideo}>
       {aparecerVideo && <iframe width="560" height="315" src="https://www.youtube.com/embed/JI6LlX1GzEU?si=85bmQR2-sG1bmHLL" title="YouTube video player" 
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
       </div>
      </div>
   </div>
   
    </>
  )
}

export default App
