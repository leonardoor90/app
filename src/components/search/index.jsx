// src/components/search/index.jsx (or Search.jsx)

import { useState } from "react";
import './styles.css'; // Assuming you have a CSS file for the Search component

const Search = ({ getDataFromSearchComponent }) => { // Destructure the prop
    const [inputValue, setInputValue] = useState(''); // State to hold the input value

    // Handler for when the input value changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the state with the current input value
    };

    // Handler for when the form is submitted or search button is clicked
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior (page reload)
        getDataFromSearchComponent(inputValue); // Pass the input value to the parent
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search Recipes..."
                value={inputValue} // Controlled component: input value is tied to state
                onChange={handleInputChange} // Update state on input change
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default Search;