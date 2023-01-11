import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Col, Button } from 'antd'
import axios from "axios"
import logo from "../assets/singe.png"


const Cuisine = () => {

    const [myCuisine, setMyCuisine] = useState([])
    let {cuisine} = useParams()
    
    const fetchRecipe = async () => {
        await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=490fe2e32f5343e59ee2aac0a4560519`)
        .then(res => {
            setMyCuisine(res.data.results)
            console.log(res.data.results)
           })
        .catch(err => console.log(err))
      }

      useEffect(() => {
        fetchRecipe();
      }, [])

    return(
      <div className="recipes">
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

    