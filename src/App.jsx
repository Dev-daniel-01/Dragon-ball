import logo from "./assets/images/dragon-ball-super-logo.png"

import { useState } from 'react'

import style from './App.module.css'

import {Menu} from './components/menu.jsx'


import luta from "./assets/images/luta.mp4";
import { Footer } from "./components/footer.jsx";

function App() {
  const [aparecerVideo, setAparecerVideo] = useState(false)
  const [aparecerBotao, setAparecerBotao] = useState(false)

  return (
    <>
     {/* {first ? <nav>batata</nav>: <nav>Arroz</nav>}
     <button onClick={() => setfirst(true)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="" /></button> */}
   <Menu option01='Início' option02='Personagens'/>
 
   <section className={style.Inicio}>
    <video autoPlay muted loop className={style.backgroundVideo}>
              <source src={luta}  type="video/mp4"/>
      </video>
      <div className={style.primeira}>
        <img src={logo} alt="logo" className={style.logo}/>
       
        <div className={style.wrapInfo}>
        <p className={style.paragrafoLP}>Durante o Torneio do Poder em "Dragon Ball Super", Goku enfrenta Jiren, o guerreiro mais forte 
          do Universo 11. Em uma luta intensa e cheia de reviravoltas, Goku ultrapassa seus limites ao despertar o Instinto Superior, uma técnica 
          que permite movimentos quase automáticos. Mesmo com o imenso poder de Jiren, Goku mostra seu espírito de luta incansável, resultando em uma das batalhas mais emocionantes de toda a franquia.</p>
        <button className={style.btAparecerB} onClick={ () => {setAparecerBotao(true)}}>Quero ver a luta!</button>
       
        </div>
        </div>
       
       <div className={style.AparecerVideo}>
       {aparecerBotao &&   <button className={style.btAparecerV} onClick={() => {setAparecerVideo(true); } }>Tenho certeza de quero ver!</button>}
      
       {aparecerVideo && <iframe width="90%" height="200" src="https://www.youtube.com/embed/mFoOlpKQiMk?si=9qOW0fnxcX56vi06" 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
       picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
       </div>
      
  
   </section>
   
  <Footer></Footer>
   
    </>
  )
}

export default App
