import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "antd";
import axios from "axios";
//

const Recipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  const fetchRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=157334a5c03a4df5843d2ce012726a37&number=99`
      )
      .then((res) => {
        setRecipeData(res.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div>
      {loading && recipeData && (
        <div key={id} className="recipeID">
          <Divider>
            <h1>{recipeData.title}</h1>
          </Divider>
          <div className="ingredAndPhoto">
            <img
              style={{ borderRadius: "30px", height: "400px", width: "556px"}}
              src={recipeData.image}
              alt={recipeData.image}
            />
            <img
              style={{
                height: "400px",
                width: "400px",
              }}
              src={`https://api.spoonacular.com/recipes/${id}/ingredientWidget.png?apiKey=157334a5c03a4df5843d2ce012726a37&number=99`}
              alt="ingredients"
            />
          </div>

          <h2>Preparation time: {recipeData.readyInMinutes} minutes</h2>
          {recipeData.instructions ? (
            <p>{recipeData.instructions.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          ) : (
            <p>{recipeData.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes;
