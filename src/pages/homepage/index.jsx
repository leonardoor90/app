// Homepage.jsx

import { useState, useEffect, useCallback} from "react";
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
    const [theme, setTheme] = useState('light');

    // --- Effects for localStorage (no changes needed for useCallback/useMemo here) ---
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [theme]);
    // --- End Effects ---

    // --- Optimized Functions using useCallback ---
    const getDataFromSearchComponent = useCallback(async (getData) => {
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
    }, [setLoadingState, setError, setRecipes]);

    const handleAddFavorites = useCallback((recipeItem) => {
        const alreadyFavorite = favorites.some(item => item.id === recipeItem.id);

        if (alreadyFavorite) {
            alert('This recipe is already in your favorites!');
        } else {
            setFavorites(prevFavorites => [...prevFavorites, recipeItem]);
            alert('Recipe added to favorites!');
        }
    }, [favorites, setFavorites]);

    const handleRemoveFavorite = useCallback((idToRemove) => {
        setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== idToRemove));
        alert('Recipe removed from favorites!');
    }, [setFavorites]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, [setTheme]);
    // --- End Optimized Functions ---

    console.log('Current Recipes State in Homepage:', recipes);
    console.log('Current Favorites State:', favorites);
    console.log('Current Theme:', theme);

    return (
        <div className={`homepage ${theme === 'dark' ? 'dark-theme' : ''}`}>
            {/* Theme Toggle Button - positioned in top-right via CSS */}
            <button onClick={toggleTheme} className="theme-toggle-button">
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>

            {/* --- NEW FUNCTIONALITY DESCRIPTION DIV --- */}
            <div className="app-description">
                <h1>Welcome to the Recipe App!</h1>
                <p>This application allows you to explore and manage your favorite recipes with ease. Here are its key functionalities:</p>
                <ul>
                    <li><strong>Recipe Search:</strong> Find delicious recipes by typing keywords like "Pasta", "Chicken" or "Apple" in the search bar.</li>
                    <li><strong>Add to Favorites:</strong> Click the "Add to Favorites" button on any recipe to save it to your personal list.</li>
                    <li><strong>Remove from Favorites:</strong> Easily remove recipes from your favorites list by clicking the "Remove" button.</li>
                    <li><strong>Theme Switching:</strong> Toggle between a Daylight and Nightlight theme using the button at the top-right corner. Your preference is saved!</li>
                    <li><strong>Data Persistence:</strong> Your favorite recipes and theme choice are automatically saved in your browser, so they're still there when you return.</li>
                </ul>
                <p>This application is built using <strong>React</strong> for the user interface, leverages the <strong>Spoonacular API</strong> for recipe data, and is deployed using <strong>Firebase</strong> for reliable hosting.</p> {/* NEW PARAGRAPH */}
                <p>Start by searching for your next culinary adventure!</p>
            </div>
            {/* --- END NEW FUNCTIONALITY DESCRIPTION DIV --- */}

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