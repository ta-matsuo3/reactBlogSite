import { useState } from "react";
import bamosList from "../bamosLists";

export default function FormSelect({ setForm, form }) {



    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value//ここの角かっこ何？
        })
        // setIsSend(isSend.design = form.design)
    }

    const show = () => {
        console.log(form.design);

    }
    // if (setIsSend) {
    //     console.log(`design：${form.design}`);
    //     console.log(onClick);
    // }


    const listItem = bamosList.map(article =>
        <option value={article.title}>{article.title}</option>
    )

    return (
        <div className="form">
            <h2>How did you hear about BAMOS DESIGN?</h2>
            <form>
                <select name="design" id="design" value={form.design}
                    onChange={handleForm}>
                    <option value="" selected hidden>--1つ選択してください--</option>
                    {listItem}
                </select><br />

            </form>
        </div>
    )
}