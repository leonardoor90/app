<<<<<<< HEAD
<<<<<<< Updated upstream
// RecipeItem.jsx
import './styles.css'; // Assuming you have a CSS file for the Search component
// src/components/search/recipe-item/index.jsx (or RecipeItem.jsx)
=======
// src/components/search/recipe-item/index.jsx
>>>>>>> 91ea2c4 (Ajustes finais)

import React from 'react'; // Make sure React is imported for React.memo
import './styles.css';

const RecipeItem = ({ item, handleAddFavorites }) => {
    console.log(`Rendering RecipeItem: ${item.title}`); // You can use this to see renders
    return (
        <div className="recipe-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button
                type="button"
                onClick={() => handleAddFavorites(item)}
                className="button"
            >
                Add to Favorites
            </button>
        </div>
<<<<<<< HEAD
=======
const RecipeItem = (props) =>{
    
    console.log(props, 'recipe-item-props');

    return (
        <div>Recipe item</div>
>>>>>>> Stashed changes
    )
}
=======
    );
};
>>>>>>> 91ea2c4 (Ajustes finais)

export default React.memo(RecipeItem); // Wrap your component with React.memo