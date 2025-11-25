import { useState } from "react";
import logo from "../assets/images/logo_black.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const drawerButton = () => {
        setIsOpen(isOpen ? false : true)
    }

    return (
        <>
            <nav className={isOpen ? 'drawerMenu active' : 'drawerMenu'}>
                <ul>
                    <li><a href="#" onClick={drawerButton}>MENU-01</a></li>
                    <li><a href="#" onClick={drawerButton}>MENU-02</a></li>
                    <li><a href="#" onClick={drawerButton}>MENU-03</a></li>
                    <li><a href="#" onClick={drawerButton}>MENU-04</a></li>

                </ul>
            </nav>
            <div className="headerArea">
                <img src={logo} alt="" />
                <div id="menuButton" onClick={drawerButton} className={isOpen ? 'active' : ''}>
                    <span></span>
                    <span></span>
                    <p>{isOpen ? 'close' : 'menu'}</p>
                </div>
            </div>
        </>
    )
}