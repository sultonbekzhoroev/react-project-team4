import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap';
import '../style/Basket.css'

export const Basket = ({modalActive, randomDrink,handleClose, basketfoodList, addToBasket, onRemove}) =>{
       
         const getTotal = () => {
		return basketfoodList.reduce((acc, value) => {
			return acc + (value.price*value.qty);
		}, 0).toFixed(2);
	};

       return (
        <Modal show={modalActive} onHide={handleClose}>
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>{basketfoodList.length === 0 ? <div>Cart is empty</div> :<div>
            <div key ={randomDrink.id} className='row'>
                <img className="order-img" src={randomDrink.img}></img>
                <div className="rigth-side">
                  <div className="free">Your free drink</div>
           <div className="random-title">{randomDrink.title}</div>
                </div>
           </div></div>
         }</Modal.Title>
        </Modal.Header>
        <div className="order-text">Your order: </div>
        <Modal.Body>
            {basketfoodList.map((food)=>(
                
            <div key ={food.id} className='row'>
                <img className="order-img" src={food.img}></img>
                <div className="rigth-side">
           <div>{food.title}</div>
            <div>
                <button className="btn-plus" onClick={()=> addToBasket(food)}>+</button> 
                <button className="btn-minus" onClick={()=> onRemove(food)}>-</button> 
    
           </div> 
           <div>
               {food.qty} * {food.price.toFixed(2)} = {food.qty*food.price.toFixed(2)} 
               
           </div> 
           </div>
           
           </div>
       ))}
     
        </Modal.Body>
         <h5 className="h4 text">Total sum: $ {getTotal()}</h5>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className = 'btn-order-basket' variant="primary" onClick={handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal> 

       )
}