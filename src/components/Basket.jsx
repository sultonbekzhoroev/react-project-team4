import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap';
import './Basket.css'

export const Basket = ({modalActive, setmodalActive,handleClose, basketfoodList, addToBasket, onRemove}) =>{
        const [sum, setSum] =useState('')
        const getTotal = () => {
		return basketfoodList.reduce((acc, value) => {
			return acc + (value.price*value.qty);
		}, 0).toFixed(2);
	};
       
       return (
        <Modal show={modalActive} onHide={handleClose}>
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>{basketfoodList.length === 0 ? <div>Cart is empty</div> :<div>Your order</div> }</Modal.Title>
        </Modal.Header>
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
       {/*    {basketfoodList.reduce((sum,food)=>(
            sum+(food.qty*food.price.toFixed(2))
          ))} */}
        Total sum: ${getTotal()}
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



/* <aside className = {modalActive ? "modal_active" :"modal"} onClick={()=> setmodalActive(false)}> 
       <div className="modal_content" onClick={e=>e.stopPropagation()}>
           {basketfoodList.length === 0 && <div>Cart is empty</div>}
          {basketfoodList.map((food)=>(
          <div key ={food.id} className='row'>
           <div>{food.title}</div>
            <div>
                <button onClick={()=> addToBasket(food)}>+</button> 
                <button onClick={()=> onRemove(food)}>-</button> 
    
           </div> 
           <div>
               {food.qty} * {food.price.toFixed(2)}
           </div> 
           </div>
       ))}
       </div>
       </aside> */