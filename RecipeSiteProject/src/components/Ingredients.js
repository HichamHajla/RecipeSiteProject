import { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";

const Ingredients = () => {
  const [ing, setIng] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchIng = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&apiKey=2817e3b7b4cd4844b742fe4f9bba1963&number=99`
      )
      .then((res) => {
        console.log(res.data);
          setIng(res.data);
          setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchIng();
 }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Divider>
        <h1>
          Some ingredients in your fridge but no idea? We can help you ...
        </h1>
      </Divider>
      <div style={{ marginBottom: "50%" }} className="rowDiet">
        <Input
          style={{ width: "90%", margin: "10px" }}
          placeholder="Search by ingredient name"
          type="text"
          onChange={handleSearch}
        />
        {loading &&
          ing.map((elem) => {
            return (
              <Col>
                <Link to={`/recipe/${elem.id}`}>
                  <Card
                    title={elem.title}
                    style={{
                      width: 450,
                      height: 300,
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="picRecipe"
                      src={elem.image}
                      height={200}
                      alt="food"
                    />
                  </Card>
                </Link>
              </Col>
            );
          })}
      </div>
    </>
  );
};

export default Ingredients;
