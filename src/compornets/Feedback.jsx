import { useState } from "react"
import Modal from "./Modal"

export default function Feedback() {
    const [isModal, setIsModal] = useState(false)

    const handleClick = () => {
        setIsModal(isModal ? false : true)
        document.body.style.overflow = "hidden";
    }

    return (
        <>
            <div className="feedback">
                <h1>We Value Your Feedback</h1>
                <p>We’re gathering feedback from our customers at BAMOS DESIGN.
                    Please take a moment to share your thoughts — your input helps us make BAMOS DESIGN even better.
                </p>
                <button onClick={handleClick}>FEEDBACK</button>
            </div>
            {isModal &&
                <Modal setIsModal={setIsModal} />
            }

        </>
    )
}