import logo from "../assets/images/logo_white.svg"
import back from "../assets/images/firstview.jpg"

export default function Firstview() {
    return (
        <>
            <div className="firstview">
                {/* <img src={back} alt="" className="back" /> */}
                <img src={logo} alt="" className="logo" />
            </div>
        </>
    )
}