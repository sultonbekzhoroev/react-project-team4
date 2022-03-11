import { useState } from "react"
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./FoodCard.css"


export const NavBar = ({ catList, setSelectedCategory,category}) =>{
    return (<>
        <Nav.Link href="#home" onClick={()=>setSelectedCategory(category)}>{category}</Nav.Link>
        
    </>)
}