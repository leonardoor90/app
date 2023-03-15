import { useState } from 'react';
import './styles.css'

const Search = () =>{

    const[inputValue, setInputValue] = useState('')

    const handleInputvalue = (event)=>{
        const {value} = event.target;

        setInputValue(value)
    }

    console.log(inputValue);

    return(
        <form className="Search">
            <input name="search" onChange={handleInputvalue} value={inputValue} placeholder="Search Recipes" id="search"/>
            <button type="submit">Search</button>

        </form>
    )
}

export default Search;