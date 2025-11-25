import { Children, useState } from "react";

export default function FormTextarea() {
    const [form, setForm] = useState({
        comment: ``
    })

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(`コメント：${form.comment}`);
    }

    return (
        <div className="form">
            <h2>What kind of special features or topics would you like to read on BAMOS DESIGN in the future?</h2>
            <form>

                <textarea name="comment" id="comment" rows="3" value={form.comment} onChange={handleForm} placeholder='ここに記入してください。'></textarea><br />
                {/* <button type="button" onClick={show}>SUBMIT</button> */}
            </form>
        </div>
    )
}