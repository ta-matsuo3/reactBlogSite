import { useState } from "react";
import FormCheckMulti from "./form/FormCheckMulti";
import FormRadio from "./form/FormRadio";
import FormSelect from "./form/FormSelect";
import FormTextarea from "./form/FormTextarea";
import banner from "../assets/images/snow-fox.jpg"
import cancel from "../assets/images/cancelBtn.svg"

export default function Modal({ setIsModal }) {
    // セッタ関数をpropsで渡す

    const [isSend, setIsSend] = useState({
    })
    const [form, setForm] = useState({
        design: ''
    })

    const handleClick = () => {
        console.log(form);
    }

    const closeModal = () => {
        setIsModal(false)
        document.body.style.overflow = "";
    }
    return (
        <>
            <div className="modal_mask" onClick={closeModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div onClick={closeModal} className="cancelBtn">
                        <img src={cancel} alt="" className="cancel" />
                    </div>
                    <img src={banner} alt="" className="banner" />
                    <div className="modal_main">
                        <h1>FEEDBACK</h1>
                        <p>Thank you for visiting BAMOS DESIGN. <br />
                            Please take a moment to complete our survey to help us improve our services.
                        </p>
                        <FormRadio onClick={setIsSend} isSend={isSend} />
                        <FormSelect setForm={setForm} form={form} />
                        <FormCheckMulti onClick={setIsSend} isSend={isSend} />
                        <FormTextarea onClick={setIsSend} isSend={isSend} />
                        <button className="btn" type="button" onClick={handleClick}>SUBMIT</button>
                    </div>
                </div>
            </div >
        </>
    )

}