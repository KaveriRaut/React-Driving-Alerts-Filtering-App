import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useEffect, useRef, useState } from "react";


//Search By Date => to search alert posts by date range input : using react npm package DateRangePicker
const SearchByDate = ({ posts, setSearchResults }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // Handle click (using useRef()) outside the button for toggle effect
    const refOne = useRef(null)
    const [open, setOpen] = useState(false); //toggle for date range picker
    const toggle = () => setOpen(open => !open);

    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    const handleSelect = (date) => {
        // console.log(date);
        // console.log(date.selection.startDate);
        // console.log(date.selection.endDate);

        const filtered = posts.filter((post) => {
            let postDate = new Date(post.timestamp);
            return (
                postDate >= date.selection.startDate &&
                postDate <= date.selection.endDate
            )
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setSearchResults(filtered);
    }

    const selectionRange = {
        // startDate: new Date(),
        // endDate: new Date(),
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <header>
            <form className="search" >
                <input
                    className="search__input"
                    // type="text"
                    autocomplete="off"
                    id="search"
                    placeholder="Search by Date Range"
                    onClick={toggle}
                />
                <div ref={refOne}>
                    {
                        open &&
                        <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                            months={1}
                            rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
                            direction="horizontal"
                            preventSnapRefocus={true}
                        />
                    }
                </div>
            </form>
        </header>
    )
}
export default SearchByDate