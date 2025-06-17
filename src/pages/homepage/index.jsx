import { useState } from "react";
import Search from "../../components/search";
<<<<<<< Updated upstream
import './styles.css';
// Fix the import path here: it should likely be 'index' not 'indes'
import RecipeItem from "../../components/search/recipe-item/index"; // Assuming the file is named index.js or just index

const Homepage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null); // Added state for error handling

    const getDataFromSearchComponent = async (getData) => {
        setLoadingState(true);
        setError(null); // Clear any previous errors
=======
import './styles.css'; 
import RecipeItem from "../../components/search/recipe-item/index.jsx";

//const dummydata= 'dummydata';

const Homepage = () => {
    //loading state
>>>>>>> Stashed changes

        try {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e953209d44604cfe8651ea54884ff2ab&query=${getData}`);

<<<<<<< Updated upstream
            if (!apiResponse.ok) {
                throw new Error(`HTTP error! status: ${apiResponse.status}`);
            }

            const result = await apiResponse.json();
            const { results } = result;

            if (results && results.length > 0) {
                setRecipes(results);
            } else {
                setRecipes([]); // Clear recipes if no results found
                // Optionally, set a message for no results found
            }
        } catch (e) {
            console.error("Failed to fetch recipes:", e);
            setError("Failed to fetch recipes. Please try again.");
            setRecipes([]); // Clear recipes on error
        } finally {
            setLoadingState(false);
        }
    };

    return (
        <div className="homepage">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} /> {/* dummydatacopy not used here */}

            {loadingState && <div className="loading">Loading Recipes! Please Wait...</div>}

            {error && <div className="error-message">{error}</div>}

            {!loadingState && !error && recipes.length === 0 && (
                <div className="no-results">No recipes found. Try searching for something else!</div>
            )}

            {recipes && recipes.length > 0 ? (
                <div className="recipe-list"> {/* Added a wrapper for better styling/layout */}
                    {recipes.map((item) => (
                        <RecipeItem key={item.id} item={item} /> // Added key prop
                    ))}
                </div>
            ) : null}
=======
    const [recipes, setRecipes] = useState([]); //save results


    const getDataFromSearchComponent = (getData) => {

        //keeping loading state before calling the API
        setLoadingState(true);
        console.log(getData, 'getData');

        //Calling the API
        
        async function getReceipes(){
            const apiResponse = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=8d4f7a0cf8004379a08c11a8011a1dfe&query=${getData}`);
            const result = await apiResponse.json();
            const {results} = result;

            if(results && results.length >0 ){
                //set loading state as false
                //set loading recipes state

                setLoadingState(false);
                setRecipes(results);
            }

            console.log(results);
        }
        getReceipes();
    };

    console.log(loadingState, recipes, 'loadingState, recipes');

    return(
        <div className="homepage">
            <Search getDataFromSearchComponent ={getDataFromSearchComponent} /*dummydatacopy = {dummydata}*//>
                {
                    loadingState && <div className="loading">Loading Recipes !! Please Wait</div>} 

                {recipes && recipes.length > 0 
                    ? recipes.map(item => <RecipeItem item={item}/>): null
                }
>>>>>>> Stashed changes
        </div>
    );
};

export default Homepage;