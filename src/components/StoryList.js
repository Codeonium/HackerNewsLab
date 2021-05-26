import StoryItem from './StoryItem'

const StoryList = ({topStories, loaded}) => {
    if (!loaded) {
        return <p>Loading!</p>
    }

    const topStoriesItems = topStories.map(topStory => {
        return( <StoryItem title={topStory.title} key={topStory.id} url={topStory.url} type={topStory.type}></StoryItem>)
        
    })
    return (
        <>
            <ul>
                {topStoriesItems}
            </ul>
        </>
    )
}

export default StoryList;