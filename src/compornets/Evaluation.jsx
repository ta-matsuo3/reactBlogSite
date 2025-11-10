import { use, useState } from "react"
import bamosList from "./bamosLists"
import thumbsUp from "./../assets/images/thumb_up_white.svg"
import thumbsUpActive from "./../assets/images/thumb_up_red.svg"
import thumbsDown from "./../assets/images/thumb_down_white.svg"
import thumbsDownActive from "./../assets/images/thumb_down_blue.svg"


export default function Evaluation({ up, down }) {

    const [upNumber, setUpNumber] = useState(up)
    const [isUp, setIsUp] = useState(false)
    const [downNumber, setDownNumber] = useState(down)
    const [isDown, setIsDown] = useState(false)


    const handleClickUp = () => {
        setUpNumber(isUp ? upNumber - 1 : upNumber + 1)
        setIsUp(isUp ? false : true)
    }
    const handleClickDown = () => {
        setDownNumber(isDown ? downNumber - 1 : downNumber + 1)
        setIsDown(isDown ? false : true)
    }

    return (
        <div className="evaluation">
            <button onClick={handleClickUp}><img src={isUp ? thumbsUpActive : thumbsUp} alt="favIcon" /></button>
            <p>{upNumber}</p>
            <button onClick={handleClickDown}><img src={isDown ? thumbsDownActive : thumbsDown} alt="badIcon" /></button>
            <p>{downNumber}</p>
        </div>
    )
}