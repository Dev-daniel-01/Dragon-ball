import style from "./menu.module.css"

export const Menu = (props) => {
    return (
        <>
            <nav className={`navegacao ${style['navBar']}`}>
                <ul className={`menu ${style['nav-menu']}`}>
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"/"}>{props.option01}</a>
                    </li>
                    <li  >
                        <a className={`nav-link ${style['nav-link']}`} href={"/requisicao"}>{props.option02}</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}