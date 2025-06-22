// src/components/search/index.jsx

import React, { useState, useCallback } from "react"; // Ensure useCallback is here if used internally
import './styles.css';

const Search = ({ getDataFromSearchComponent }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []); // No dependencies, as setInputValue is stable

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        getDataFromSearchComponent(inputValue);
    }, [getDataFromSearchComponent, inputValue]); // Dependencies: the prop and internal state

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search Recipes..."
                value={inputValue}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default React.memo(Search); // Wrap your Search component