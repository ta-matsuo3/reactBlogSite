import { useState } from "react";



export default function FormRadio(setIsSend, isSend) {

    const [form, setForm] = useState({
        age: ''
    })
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // setIsSend(age)
    }

    const show = () => {
        console.log(`age：${form.age}`);
    }

    return (
        <div className="form">
            <h2>Age</h2>
            <form className="radio">
                <div>
                    <input id="under10" name="age" type="radio" value="0 - 10"
                        checked={form.age === '0 - 10'}
                        onChange={handleForm} />
                    <label htmlFor="age_under10">0 - 10&ensp;</label>
                </div>

                <div>
                    <input id="under20" name="age" type="radio" value="10 - 20"
                        checked={form.age === '10 - 20'}
                        onChange={handleForm} />
                    <label htmlFor="age_under20">10 - 20</label>
                </div>

                <div>
                    <input id="under30" name="age" type="radio" value="20 - 30"
                        checked={form.age === '20 - 30'}
                        onChange={handleForm} />
                    <label htmlFor="age_under30">20 - 30</label>
                </div>
                <div>
                    <input id="under40" name="age" type="radio" value="30 - 40"
                        checked={form.age === '30 - 40'}
                        onChange={handleForm} />
                    <label htmlFor="age_under40">30 - 40</label>
                </div>

                <div>
                    <input id="under50" name="age" type="radio" value="40 - 50"
                        checked={form.age === '40 - 50'}
                        onChange={handleForm} />
                    <label htmlFor="age_under50">40 - 50</label>
                </div>

                <div>
                    <input id="50over" name="age" type="radio" value="50 and above"
                        checked={form.age === '50 and above'}
                        onChange={handleForm} />
                    <label htmlFor="50over">50 and above</label>
                </div>
            </form>
        </div>
    )
}