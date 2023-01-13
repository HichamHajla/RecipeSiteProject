import Checkbox from "@mui/material/Checkbox"
import { useState, useEffect } from "react";
import { Divider, Col, Card } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import info from "../assets/diet-infographic.png"
import "../App.css"


const Diet = () => {

    const [myDiet, setMyDiet] = useState([])
    const [diet1, setDiet1] = useState("")
    const [diet2, setDiet2] = useState("")
    const [diet3, setDiet3] = useState("")
    const [diet4, setDiet4] = useState("")
    const [diet5, setDiet5] = useState("")

    const fetchDiet = async () => {
        await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet1},${diet2},${diet3},${diet4},${diet5}&apiKey=157334a5c03a4df5843d2ce012726a37&number=99`)
        .then(res => {
            setMyDiet(res.data.results)
            console.log(res.data.results)
           })
        .catch(err => console.log(err))
      }

      useEffect(() => {
        fetchDiet();
      }, [diet1, diet2, diet3, diet4, diet5])


    return(
        <div>
        <Divider><h1 style={{textAlign:"center"}}>Do you have a special diet?</h1></Divider>
        <img style={{marginLeft:"30%"}} src={info} alt="info"/>
        <Divider><h2 style={{textAlign:"center"}}>Tell us how special you are ...</h2></Divider>
        <div className="diets">
        <Checkbox onChange={() => !diet1 ? setDiet1("pescetarian") : setDiet1("")} style={{color:"blue"}}/><p>Pescetarian</p>
        <Checkbox onChange={() => !diet2 ? setDiet2("vegetarian") : setDiet2("")} color="success" /><p>Vegetarian</p>
        <Checkbox onChange={() => !diet3 ? setDiet3("vegan") : setDiet3("")} style={{color:"orange"}} /><p>Vegan</p>
        <Checkbox onChange={() => !diet4 ? setDiet4("gluten%20free") : setDiet4("")} style={{color:"red"}}/><p>Gluten Free</p>
        <Checkbox onChange={() => !diet5 ? setDiet5("paleo") : setDiet5("")} color="secondary"/><p>Paleo</p>
        </div>
        <div className="rowDiet">
          {myDiet.map((elem) => {
              return(
              <Col>
                <Link to={`/recipe/${elem.id}`}>
                  <Card 
                  title={elem.title}
                  style={{ width: 450, height: 300, margin: 10, textAlign:"center" }}>
                  <img className="picRecipe" src={elem.image} height={200} alt="food" />
                  </Card>
                </Link>
              </Col>)
         })}
          </div>
        </div>
    )
}

export default Diet

