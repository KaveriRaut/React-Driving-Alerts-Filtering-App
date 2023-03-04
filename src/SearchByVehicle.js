// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const SearchByVehicle = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    //This function => search by only vehicle no. plate with case insensitive nature
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.vehicle_friendly_name.toLowerCase().includes(e.target.value.toLowerCase()))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    autocomplete="off"
                    type="text"
                    id="search"
                    placeholder="Search by Vehicle number plate"
                    onChange={handleSearchChange}
                />
                {/* <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button> */}
            </form>
        </header>
    )
}
export default SearchByVehicle