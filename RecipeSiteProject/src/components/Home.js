import { useState, useEffect } from "react";
import { Divider, Input} from 'antd';
import { Link } from "react-router-dom";
import { Card, Col } from 'antd'
import Recipes from "./Recipes";
import axios from "axios";
import african from "../assets/African.jpeg"
import american from "../assets/american.jpeg"
import british from "../assets/british.jpeg"
import carribean from "../assets/carribean.jpeg"
import chinese from "../assets/chinese.jpeg"
import european from "../assets/european.jpg"
import french from "../assets/French.jpeg"
import greek from "../assets/greek.jpeg"
import indian from "../assets/indien.jpg"
import italian from "../assets/italian.jpeg"
import japanese from "../assets/japanese.jpeg"
import mediterranean from "../assets/meditarian.jpeg"
import mexican from "../assets/tacos.jpg"
import spanish from "../assets/spanishFood.png"
import thai from "../assets/thai.jpeg"


const Home = () => {

    const [data, setData] = useState([])
    const gastronomie = [{gast : 'African', img : african}, {gast :'American', img : american }, {gast :'British', img : british},  {gast :'Caribbean', img : carribean},  {gast :'Chinese',  img :chinese }, {gast :'European',  img : european}, {gast :'French',  img : french}, {gast :'Greek', img : greek},  {gast :'Indian',  img : indian}, {gast :'Italian',  img :italian }, {gast :'Japanese', img : japanese}, {gast : 'Mediterranean', img : mediterranean}, {gast :'Mexican', img : mexican}, {gast :'Spanish', img : spanish}, {gast :'Thai', img :thai }]
    //let { cuisine } = useParams();

    const fetchRecipe = async () => {
        await axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=322a77ead7154f77b5db10207568287d&number=100`)
        .then(res => {
            setData(res.data.results)
          })
        .catch(err => console.log(err))
      }

      useEffect(() => {
        fetchRecipe();
      }, [])


  return (
    <>
        <div>
            <Divider><h1>Where do you want to eat today...?</h1></Divider>
           <ul style={{listStyleType:"none", textAlign:"center"}}>
              <div className='countries'>
            {gastronomie.map(elem => {
              return(
              <div className="rond">
              <Link style={{textDecoration:"none", color:"black"}} to={`/${elem.gast.toLowerCase()}`}>
              <img style={{ height: "100px", width: "100px", borderRadius:"100%"}} src={elem.img} alt="logo"/>
              <li>{elem.gast}</li>
              </Link>
              </div>
        )
       })}
       </div>
        </ul>
        </div>
        <div>
          <Divider><h1>Our Recipes</h1></Divider>
          <Input style={{width:"90%" , margin:"10px"}} placeholder="Search by Name" type="text"/>
          <div className="recipes">
          {data.map(elem => {
        return(
          <>
            <Col>
            <Link to={`/recipe/${elem.id}`}>
                <Card 
                title={elem.title}
                style={{ width: 450, height: 300, margin: 10, textAlign:"center" }}>
                <img className="picRecipe" src={elem.image} height={200} alt="food" />
                </Card>
             </Link>
            </Col>
          </>
        )
       })}
        </div>
        </div>


    </>
  );
};

export default Home;


