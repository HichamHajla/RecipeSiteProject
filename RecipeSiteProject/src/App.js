import "./App.css";
import 'antd/dist/reset.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Ingredients from "./components/Ingredients"; 
import Cuisine from "./components/Cuisine"; 
import Diet from "./components/Diet"; 
import Breakfast from "./components/Breakfast"
import Appetizer from "./components/Appetizer"
import Main from "./components/Main"; 
import Dessert from "./components/Dessert"; 
import Drink from  "./components/Drink"
import Recipes from "./components/Recipes"
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:cuisine" element={<Cuisine/>}/>
        <Route path="/recipe/:id" element={<Recipes/>}/>
        <Route path="/diet" element={<Diet />}/>
        <Route path="/breakfast" element={<Breakfast />}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
        <Route path="/appetizer" element={<Appetizer/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/dessert" element={<Dessert/>}/>
        <Route path="/drink" element={<Drink/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
