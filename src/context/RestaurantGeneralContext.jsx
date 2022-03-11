import { createContext, useState } from "react";

export const RestaurantGeneralContext = createContext([])

export const RestaurantProvider = ({children}) =>{

    const [foods, setFoods] =useState([])


    const data ={
        foods:foods,
        setFoods:setFoods
    }
    return(
        <>
        <RestaurantGeneralContext.Provider value ={data}>
            {children}
            </RestaurantGeneralContext.Provider>
        </>
    )
}