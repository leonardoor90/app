// Homepage.jsx

import { useState, useEffect } from "react";
import Search from "../../components/search";
<<<<<<< HEAD
<<<<<<< Updated upstream
import './styles.css';
// Fix the import path here: it should likely be 'index' not 'indes'
import RecipeItem from "../../components/search/recipe-item/index"; // Assuming the file is named index.js or just index
=======
import './styles.css'; // Main styles for Homepage
import RecipeItem from "../../components/search/recipe-item/index"; // Styles for RecipeItem are in its own CSS
>>>>>>> fb01129 (Funções favoritos e recipes list, dark and white modes)

const Homepage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    // New state for theme, default to 'light'
    const [theme, setTheme] = useState('light'); // 'light' or 'dark'

    // Load favorites from localStorage on initial render
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }

        // Load theme from localStorage on initial render
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []); // Runs once on mount

    // Save favorites to localStorage whenever the favorites state changes
    useEffect(() => {
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }, [favorites]);

    // Save theme to localStorage whenever the theme state changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Apply or remove dark-theme class on the body element
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [theme]); // Runs whenever 'theme' state changes


    const getDataFromSearchComponent = async (getData) => {
        setLoadingState(true);
<<<<<<< HEAD
        setError(null); // Clear any previous errors
=======
import './styles.css'; 
import RecipeItem from "../../components/search/recipe-item/index.jsx";

//const dummydata= 'dummydata';

const Homepage = () => {
    //loading state
>>>>>>> Stashed changes
=======
        setError(null);

        console.log('Search query:', getData);
>>>>>>> fb01129 (Funções favoritos e recipes list, dark and white modes)

        try {
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e953209d44604cfe8651ea54884ff2ab&query=${getData}`);

<<<<<<< Updated upstream
            if (!apiResponse.ok) {
                throw new Error(`HTTP error! status: ${apiResponse.status}`);
            }

            const result = await apiResponse.json();
            console.log('API Raw Result:', result);

            const { results } = result;
            console.log('Destructured Results Array:', results);

            if (results && results.length > 0) {
                setRecipes(results);
            } else {
                setRecipes([]);
                console.log('No recipes found for this query.');
            }
        } catch (e) {
            console.error("Failed to fetch recipes:", e);
            setError("Failed to fetch recipes. Please try again.");
            setRecipes([]);
        } finally {
            setLoadingState(false);
        }
    };

    const handleAddFavorites = (recipeItem) => {
        const alreadyFavorite = favorites.some(item => item.id === recipeItem.id);

        if (alreadyFavorite) {
            alert('This recipe is already in your favorites!');
        } else {
            setFavorites(prevFavorites => [...prevFavorites, recipeItem]);
            alert('Recipe added to favorites!');
        }
    };

    const handleRemoveFavorite = (idToRemove) => {
        setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== idToRemove));
        alert('Recipe removed from favorites!');
    };

    // --- NEW FUNCTION: toggleTheme ---
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    // --- END NEW FUNCTION ---


    console.log('Current Recipes State in Homepage:', recipes);
    console.log('Current Favorites State:', favorites);
    console.log('Current Theme:', theme);

    return (
        // Apply theme class to the main homepage div or body
        <div className={`homepage ${theme === 'dark' ? 'dark-theme' : ''}`}> {/* Conditional class */}

            {/* Theme Toggle Button - positioned in top-right via CSS */}
            <button onClick={toggleTheme} className="theme-toggle-button">
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>

            <Search getDataFromSearchComponent={getDataFromSearchComponent} />

            {loadingState && <div className="loading">Loading Recipes! Please Wait...</div>}

            {error && <div className="error-message">{error}</div>}

            {!loadingState && !error && recipes.length === 0 && (
                <div className="no-results">No recipes found. Try searching for something else!</div>
            )}

            {recipes && recipes.length > 0 ? (
                <div className="recipe-list">
                    {recipes.map((item) => (
                        <RecipeItem
                            key={item.id}
                            item={item}
                            handleAddFavorites={handleAddFavorites}
                        />
                    ))}
                </div>
            ) : null}
<<<<<<< HEAD
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
=======

            {/* Display Favorites List */}
            <div className="favorites-section">
                <h2>Your Favorites ({favorites.length})</h2>
                {favorites.length > 0 ? (
                    <div className="favorites-list recipe-list">
                        {favorites.map((favItem) => (
                            <div key={favItem.id} className="favorite-item recipe-item">
                                <img src={favItem.image} alt={favItem.title} />
                                <h4>{favItem.title}</h4>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFavorite(favItem.id)}
                                    className="button"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>
>>>>>>> fb01129 (Funções favoritos e recipes list, dark and white modes)
        </div>
    );
};

export default Homepage;