import { useState } from "react";
import logo from "../assets/images/logo_black.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const drawerButton = () => {
        setIsOpen(isOpen ? false : true)
    }

    // メニューリンクをクリックしたら閉じる処理
    // document.addEventListener("click", (e) => {
    //     if (e.target.closest(".drawerMenu a")) {
    //         console.log("リンククリック検知");
    //         document.querySelector("#menuButton").classList.remove("active");
    //         document.querySelector(".drawerMenu").classList.remove("active");
    //     }
    // });

    return (
        <>
            <nav className={isOpen ? 'drawerMenu active' : 'drawerMenu'}>
                <ul>
                    <li><a href="#">MENU-01</a></li>
                    <li><a href="#">MENU-02</a></li>
                    <li><a href="#">MENU-03</a></li>
                    <li><a href="#">MENU-04</a></li>

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