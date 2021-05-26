const SearchStory = ({handleSearch}) =>{
    return (
        <>
            <form>
                <input onChange={handleSearch} type="text"> 
            
                </input>
            </form>
        </>
    )
}

export default SearchStory;