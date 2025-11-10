import bamosList from "./bamosLists"
import { Children, useState } from "react"
import Evaluation from "./Evaluation"

export default function BamosList({ children }) {


    const listItem = bamosList.map((article, index) =>

        <li>
            <img src={article.image} alt={article.author} className="jacketImage" />
            <div className="titleWrap">
                <p className="title">{`[${article.category}]${article.title}`}</p>
                <Evaluation up={article.thumbsUp} down={article.thumbsDown} key={index} />
            </div>
            <p className="name">{article.author}</p>
        </li>
    )

    console.log(listItem);


    return (
        <div className='blogList'>
            <h1>Latest Blog Posts</h1>
            <ul className="bamosList">{listItem}</ul>
        </div>

    )
}

// author: "Liam Johnson",
// title: "Indie Beats",
// category: "Music",
// image: "https://syo-m.github.io/componentsImages/images/indieBeats.webp",
// thumbsUp: 210,
// thumbsDown: 9,