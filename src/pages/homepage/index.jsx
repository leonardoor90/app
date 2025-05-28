import { useState } from "react";
import Search from "../../components/search";
import './styles.css'; 
import RecipeItem from "../../components/search/recipe-item/indes";

const dummydata= 'dummydata'

const Homepage = () =>{
    //loading state

    const[loadingState, setLoadingState] = useState(false)

    //save results

    const [recipes, setRecipes] = useState([])


    const getDataFromSearchComponent = (getData) => {

        //keeping loading state before calling the API
        setLoadingState(true)
        console.log(getData, 'getdata')

        //Calling the API
        
        async function getReceipes(){
            const apiResponse = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=5e8e2a4d88ee406e8a94ddd2ae5f2523&query=${getData}`)
            const result = await apiResponse.json()
            const {results} = result;

            if(results && results.length >0 ){
                //set loading state as false
                //set loading recipes state

                setLoadingState(false);
                setRecipes(results);
            }

            console.log(result);
        }
        getReceipes();
    }

    console.log(loadingState, recipes)

    return(
        <div className="homepage">
            <Search getDataFromSearchComponent ={getDataFromSearchComponent} dummydatacopy = {dummydata}/>
            { /*SHow Loading State*/ }
                {
                    loadingState && <div className="loading">Loading Recipes !! Please Wait</div>} 
                
                { /*SHow Loading State*/}
                {/*Map Through All Recipes*/}

                {recipes && recipes.length > 0 
                    ? recipes.map((item) => <RecipeItem item={item}/>): null
                }
        </div>
    )
}

export default Homepage;