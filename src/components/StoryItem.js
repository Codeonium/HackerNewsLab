import React from "react";

const StoryItem = ({title, url, type}) => {
    return (
        <>
            <li>
                <a href={url}>{title} </a>
                <p>{type}</p>
            </li>
        </>
    )
}

export default StoryItem;
