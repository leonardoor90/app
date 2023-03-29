import { useState } from 'react';
import './styles.css'

const Search = (props) =>{

    console.log(props);
    const {getDataFromSearchComponent} = props;

    const[inputValue, setInputValue] = useState('')

    const handleInputvalue = (event)=>{
        const {value} = event.target;

        setInputValue(value)
    }

    console.log(inputValue);

    const handleSubmit = (event) =>{
        event.preventDefault()
        getDataFromSearchComponent()
    }

    return(
        <form onSubmit={handleSubmit} className="Search">
            <input name="search" onChange={handleInputvalue} value={inputValue} placeholder="Search Recipes" id="search"/>
            <button type="submit">Search</button>

        </form>
    )
}

export default Search;