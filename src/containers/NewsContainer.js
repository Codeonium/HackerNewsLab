import {useEffect, useState} from 'react'
import StoryList from "../components/StoryList"
import SearchStory from "../components/SearchStory"

const NewsContainer = () => {
    const [topStories, setTopStories] = useState({});
    // const [stories, setStories] = useState ({})
    const [loaded, setLoaded] = useState(false)
    const [searchStories, setSeachStories] = useState({})


    const getTopStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const newData = data.slice(0, 100)
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

    const handleSearch = (searchWord) => {
        const topStories = getTopStories()
        // const topStoriesTitle = topStories.title
        topStories.filter(newArray => topStories.title.indexOf(searchWord))
    }



    useEffect(() => {
        getTopStories();
    }, [])


    return (
        <>
        <SearchStory handleSearch={handleSearch}/>
        <StoryList 
        topStories={topStories} 
        loaded = {loaded}
        />
        </>
    )
}

export default NewsContainer;