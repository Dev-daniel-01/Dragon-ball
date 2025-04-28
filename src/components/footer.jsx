import style from "./footer.module.css"

import Bola from "../assets/images/bola_dragao.png"

import Instagram from "../assets/images/instagram.png"

import X from "../assets/images/twitter.png"

import Youtube from "../assets/images/youtube.png"

export const Footer = () => {
    return (
        <>
            <footer className={style.fotterCss}>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>
            <span className={style.particula}></span>

                <div className={style.Containerlogos}>
                <a href="https://x.com/db_official_en" className={style.aFotter}>
                    <img src={X} alt="X" className={style.logoFotter}/>
                </a>
                <a href="https://en.dragon-ball-official.com" className={style.aFotter}>
                    <img src={Bola} alt="Bola" className={style.logoFotterB} />
                </a>
                <a href="https://www.youtube.com/channel/UCPQrFghhMiu2QO0wqX503Kg" className={style.aFotter}>
                    <img src={Instagram} alt="Instagram" className={style.logoFotter}/>
                </a>
                <a href="https://www.instagram.com/dragonballanimeofficial/" className={style.aFotter}>
                    <img src={Youtube} alt="Youtube" className={style.logoFotter}/>
                </a>
                </div>
                <p className={style.pFotter} >© all rights reserved from Daniel Ribeiro da Costa</p>
            </footer>
        </>
    )
}