import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Col, Divider } from 'antd'
import axios from "axios"



const Cuisine = () => {

    const [myCuisine, setMyCuisine] = useState([])
    let {cuisine} = useParams()

    const fetchRecipe = async () => {
        await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=322a77ead7154f77b5db10207568287d`)
        .then(res => {
            setMyCuisine(res.data.results)
           })
        .catch(err => console.log(err))
      }

      useEffect(() => {
        fetchRecipe();
      }, [])

      const gastro = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);

    return(
      <div className="recipes">
      <Divider><h1>{gastro} Recipes</h1></Divider>
      {myCuisine.map(elem => {
    return(
      <>
        <Col>
            <Card 
            title={elem.title}
            style={{ width: 450, height: 300, margin: 10, textAlign:"center" }}>
            <img className="picRecipe" src={elem.image} height={200} alt="food" />
            </Card>
        </Col>
      </>
    )
   })}
    </div>
       
    )
    }


export default Cuisine

    