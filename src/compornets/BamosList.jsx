import { useEffect, useRef, useState } from "react";

import bamosList from "./bamosLists"
import Evaluation from "./Evaluation"

export default function BamosList() {


    const listItem = bamosList.map((article) =>

        <li key={`${article.title}-${article.author}`} className="reveal">
            <img src={article.image} alt={article.author} className="jacketImage" />
            <div className="titleWrap">
                <p className="title">{`[${article.category}]${article.title}`}</p>
                <Evaluation up={article.thumbsUp} down={article.thumbsDown} />
            </div>
            <p className="name">{article.author}</p>
        </li>
    )


    return (
        <div className='blogList'>
            <h1>Latest Blog Posts</h1>
            <ul className="bamosList">{listItem}</ul>
        </div>

    )
}