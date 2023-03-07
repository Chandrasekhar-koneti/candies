import { useState } from "react"
import Context from "./Context"


const Provider=()=>{
    const[items,setItems]=useState([])
    const additemhandler=(item)=>{
        const existingItems=[...items]
        const ItemIdx=existingItems.findIndex((i)=>i.id===item.id)

        if(ItemIdx !==-1){
            existingItems[ItemIdx].quantity=Number(existingItems[ItemIdx].quantity)+1
            setItems(existingItems)
        }
        else{
            setItems([...items,item])
        }
    }

    const context={
        item:items,
        additems:additemhandler
    }


    return(
        <Context.Provider value={context} >{props.children}</Context.Provider>
    )
}

export default Provider