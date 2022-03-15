import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { FoodCard } from "./components/FoodCard";
import { DrinkCard } from "./components/DrinkCard";
import { Basket } from "./components/Basket";
import { NavBar } from "./components/NavBar";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { SpinnerDotted } from "spinners-react";
import { TextField } from "@mui/material";
import { MdKeyboardVoice } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalActive, setmodalActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [drinksList, setdrinksList] = useState([]);
  const [filteredfoodList, setFilteredFoodList] = useState([]);
  const [basketfoodList, setBasketfoodList] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      setTimeout(async () => {
        let response = await axios.get(
          "https://mocki.io/v1/eb3700c3-347e-43ec-bc05-3d4db33f6a76"
        );
        let res = await axios.get(
          "https://gist.githubusercontent.com/zarinaazamatova/1e170897e10f5db6ecbf5d1081294262/raw/715e6a92ac3e22838bbb3c15b06bdaa437814905/drinks-team5.json"
        );
        setdrinksList(res.data.drinks);
        setFoodList(response.data.foods);
        setFilteredFoodList(response.data.foods);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  
 
  /* добавление в корзину*/
  
  const addToBasket = (food) => {
    const exist = basketfoodList.find((x) => x.id === food.id);
    if (exist) {
      setBasketfoodList(
        basketfoodList.map((x) =>
          x.id === food.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketfoodList([...basketfoodList, { ...food, qty: 1 }]);
    }
  };

  /* удаление из корзины */

  const onRemove = (food) => {
    const exist = basketfoodList.find((x) => x.id === food.id);
    if (exist.qty === 1) {
      setBasketfoodList(basketfoodList.filter((x) => x.id !== food.id));
    } else {
      setBasketfoodList(
        basketfoodList.map((x) =>
          x.id === food.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  useEffect(() => {
    let list = foodList.filter(
      (food) =>
        selectedCategory === food.category ||
        selectedCategory === "" ||
        selectedCategory === "All"
    );
    setFilteredFoodList(list);
  }, [selectedCategory]);

  useEffect(() => {
    getData();
  }, []);

  /*search*/
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const searchedList = filteredfoodList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

 /*search end*/
  
  let catList = ["All", ...new Set(foodList.map((food) => food.category))];
  console.log(catList);

  /*открытие и закрытие модального окна*/


  const sum = (food) => {
    const total = basketfoodList.reduce((sum, x) => sum + x.price * x.gty);
  };

  console.log(basketfoodList);

  // let total = [basketfoodList.reduce((sum,food) => sum + (food.price))]
  

  const handleClose = () => setmodalActive(false);
  const handleShow = () => setmodalActive(true);

  return (
    <div className="App">
    {isLoading ? (
        <SpinnerDotted
          className="spinner"
          size={90}
          thickness={172}
          speed={100}
          color="rgba(172, 57, 100, 0.85)"
        />
      ) : (
        <div>
          <Basket
            className="cart"
            modalActive={modalActive}
            handleClose={handleClose}
            setmodalActive={setmodalActive}
            addToBasket={addToBasket}
            onRemove={onRemove}
            basketfoodList={basketfoodList}
          />

          <header>
            <h1>STYLE SWEET</h1>
            <h4>YOUR DAY FOR BEAUTIFUL & DELICIOUS DESSERTS</h4>

            <BsFillCartFill className= "cart-fill" onClick={handleShow}/>
       <span className='cart-total' onClick={handleShow}>{basketfoodList.length}</span>
            <div className="search">
              <MdKeyboardVoice className="keyboard-voice"/>
              <TextField
              style={{ textAlign: "center" }}
              id="standard-basic"
              label="Search your favorite..."
              value={search}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
            
            </div>
            <Navbar className= "navbar" bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#drink">Coffee & Beverages</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {catList.map((category) => (
                      <NavBar
                        className="cat"
                        key={category}
                        drinksList={drinksList}
                        category={category}
                        setSelectedCategory={setSelectedCategory}
                      />
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <div id="home"></div>
          <div className="container">
            {searchedList.map((food) => (
              <FoodCard
                className="card"

                sum={sum}

                addToBasket={addToBasket}
                onRemove={onRemove}
                key={food.id}
                food={food}
              />
            ))}
            <div id="drink"></div>
            <div className="drinks">
              <h4 className="h4">Coffee & Beverages</h4>
              {drinksList.map((food) => (
                <DrinkCard
                  className="card"
                  addToBasket={addToBasket}
                  onRemove={onRemove}
                  key={food.id}
                  food={food}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;


