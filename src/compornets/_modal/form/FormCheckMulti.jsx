import { useState } from "react";



export default function FormCheckMulti() {
    const [form, setForm] = useState({
        favorite: []
    })

    const handleFormMulti = e => {
        const fa = form.favorite;
        if (e.target.checked) {
            fa.push(e.target.value)
        } else {
            fa.splice(fa.indexOf(e.target.value), 1)
        }
        setForm({
            ...form,
            [e.target.name]: fa
        })
    }


    const show = () => {
        console.log(`favorite${form.favorite}`);
    }

    return (
        <div className="form">
            < h2>What is your favorite field or area of interest?</h2>
            <form>
                <div className="checkbox">
                    <div>
                        <input id="favorite_music" name="favorite"
                            type="checkbox" value="music"
                            checked={form.favorite.includes('music')}
                            onChange={handleFormMulti} />
                        <label htmlFor="avorite_music">音楽</label>
                    </div>
                    <div>
                        <input id="favorite_art" name="favorite"
                            type="checkbox" value="art"
                            checked={form.favorite.includes('art')}
                            onChange={handleFormMulti} />
                        <label htmlFor="avorite_art">芸術</label>
                    </div>
                    <div>
                        <input id="favorite_design" name="favorite"
                            type="checkbox" value="design"
                            checked={form.favorite.includes('design')}
                            onChange={handleFormMulti} />
                        <label htmlFor="avorite_design">デザイン</label>
                    </div>
                    <div>
                        <input id="favorite_prog" name="favorite"
                            type="checkbox" value="prog"
                            checked={form.favorite.includes('prog')}
                            onChange={handleFormMulti} />
                        <label htmlFor="avorite_prog">プログラミング</label>
                    </div>
                </div>
            </form>
        </div>
    );
}
