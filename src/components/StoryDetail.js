import React from "react";

const StoryDetails = ({topStories, loaded}) => {
    if (!loaded) {
        return <p>Loading</p>
    }

    return (
        <>
        <h1>{topStories.title}</h1>
        </>
    )
}

export default StoryDetails;
