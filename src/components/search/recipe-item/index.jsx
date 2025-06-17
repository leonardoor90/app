<<<<<<< Updated upstream
// RecipeItem.jsx

const RecipeItem = ({ item }) => { // Destructure 'item' directly from props
    
    console.log(item, 'recipe-item-props'); // Now logs the specific item object

    return (
        <div className="recipe-item"> {/* Add a class for styling */}
            <img src={item.image} alt={item.title} /> {/* Display the recipe image */}
            <h3>{item.title}</h3> {/* Display the recipe title */}
            {/* You can add more details here if needed, e.g., a link to the full recipe */}
            {/* For instance, if you wanted to link to the full recipe on Spoonacular:
                <a href={`https://spoonacular.com/recipes/${item.title.replace(/\s/g, '-')}-${item.id}`} target="_blank" rel="noopener noreferrer">
                    View Recipe
                </a>
            */}
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