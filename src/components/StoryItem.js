import React from "react";

const StoryItem = ({title, url}) => {
    return (
        <>
        <a href={url}>{title}</a>
        </>
    )
}

export default StoryItem;
