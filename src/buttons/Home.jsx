import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {UncontrolledCarousel} from 'reactstrap'

const Home = ({searchedList,FoodCard,sum,addToBasket,onRemove,drinksList,DrinkCard}) => {
  
 
  return (
    <>
    
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
    </>
      )
}

export default Home