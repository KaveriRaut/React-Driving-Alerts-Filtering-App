// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// SearchBar => to search alert posts by Alert_type or drivers name
const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    //This function => search by Driver Name and Alert Type with case insensitive nature
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.alert_type.toLowerCase().includes(e.target.value.toLowerCase()) || post.driver_friendly_name.toLowerCase().includes(e.target.value.toLowerCase()))

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
                    placeholder="Search by types of Alerts or Driver name"
                    onChange={handleSearchChange}
                />
                {/* If you want to add search_button icon from MUI */}
                {/* <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button> */}
            </form>
        </header>
    )
}
export default SearchBar