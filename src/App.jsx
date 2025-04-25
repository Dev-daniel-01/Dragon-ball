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
   <section className={style.Inicio}>
      <div className={style.primeira}>
        <img src={logo} alt="logo" className={style.logo}/>
       
        <div className={style.wrapInfo}>
        <p className={style.paragrafoLP}>Dragon Ball é um mangá criado por Akira Toriyama, lançado em novembro de 1984 na revista Weekly Shonen Jump. Devido ao enorme sucesso, a obra ganhou uma adaptação 
          para anime em fevereiro de 1986, produzida pela Toei Animation. Posteriormente, em abril de 1989, o estúdio também adaptou a segunda parte do mangá. Anos depois, em junho de 2015, foi lançada uma nova 
          animação original intitulada Dragon Ball Super. A história acompanha a vida de Son Goku e suas aventuras ao lado de seus amigos.</p>
        <button className={style.btAparecerB} onClick={ () => {setAparecerBotao(true)}}>Quero ver o filme!</button>
       
        </div>
        </div>
       
       <div className={style.AparecerVideo}>
       {aparecerBotao &&   <button className={style.btAparecerV} onClick={() => {setAparecerVideo(true); } }>Tenho certeza de quero ver!</button>}
       {aparecerVideo && <iframe width="90%" height="200" src="https://www.youtube.com/embed/bPXQJF9WIR8?si=uyLZxm0_2dpLyGqe&amp;start=3" 
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
       </div>
      
  
   </section>
   
   {/* <footer>
        <p>a</p>
      </footer> */}
   
    </>
  )
}

export default App
