import { useState } from "react"
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style/FoodCard.css"


export const FoodCard = ({food, addToBasket}) =>{
    return (
       
          <Card style={{ width: '18rem' }} className="card">
  <Card.Img className="img-card" variant="top" src={food.img} />
  <Card.Body>
    <Card.Title>{food.title}</Card.Title>
    <Button className="btn-price" disabled="disabled" >${food.price}</Button>

    <Button className="btn-order" variant="primary"onClick={()=> addToBasket(food) }>Order</Button>
  </Card.Body>
</Card>
 
    )
}


/*
          <p>{food.title}</p> 

          <button onClick={()=> setCount(count >1 ? count -1 :1)}>-</button>
        <span>{count}</span>
        <button onClick={()=> setCount(count +1)}>+</button>
        <button>Order</button> */