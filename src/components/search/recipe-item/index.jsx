<<<<<<< Updated upstream
// RecipeItem.jsx
import './styles.css'; // Assuming you have a CSS file for the Search component
// src/components/search/recipe-item/index.jsx (or RecipeItem.jsx)

const RecipeItem = ({ item, handleAddFavorites }) => { // Destructure item and new prop handleAddFavorites
    
    // Optional: You might want to check if the item is already a favorite
    // This would require passing the favorites list down as well.
    // For now, let's keep it simple.

    return (
        <div className="recipe-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button
                type="button" // Use type="button" to prevent form submission
                onClick={() => handleAddFavorites(item)} // Call the function passed from parent, passing the whole item
                className="button" // Add a class for styling
            >
                Add to Favorites
            </button>
        </div>
=======
const RecipeItem = (props) =>{
    
    console.log(props, 'recipe-item-props');

    return (
        <div>Recipe item</div>
>>>>>>> Stashed changes
    )
}

export default RecipeItem;