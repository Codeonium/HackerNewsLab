import {useEffect, useState} from 'react'
import StoryList from "../components/StoryList"

const NewsContainer = () => {
    const [topStories, setTopStories] = useState({});
    // const [stories, setStories] = useState ({})
    const [loaded, setLoaded] = useState(false)


    const getTopStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const newData = data.slice(0, 10)
            const getStory = newData.map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                    .then(res => res.json())
            })
            Promise.all(getStory)
            .then(data => {
                setTopStories(data)
                setLoaded(true)
            })
        })
    }



    useEffect(() => {
        getTopStories();
    }, [])


    return (
        <>
        <StoryList 
        topStories={topStories} 
        loaded = {loaded}
        />
        </>
    )
}

export default NewsContainer;