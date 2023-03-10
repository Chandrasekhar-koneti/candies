

import { useEffect, useState } from "react"
import Context from "./Context"

const Provider=(props)=>{
    const[itemcount,setitemcount]=useState(0)
    const[items,setItems]=useState([])


    useEffect(()=>{
        let cnt=0
        items.forEach((item)=>{
            cnt=cnt+1
            setitemcount(cnt)
        })
    },[items])

   

     function additemhandler(item){
        const existingItems = [...items];
        const itemIdx = existingItems.findIndex((i) => i.id === item.id);

        if (itemIdx !== -1) {
            console.log('quantity is',item.quantity)
            existingItems[itemIdx].quantity = Number(existingItems[itemIdx].quantity)+Number(item.quantity);
            // setItems(existingItems)
            
            console.log("already exists",existingItems);
           
          } else {
              setItems([...items, item]);
            }
    }
    

    const context={
        count:itemcount,
        item:items,
        additems:additemhandler
    }


    return(
        <Context.Provider value={context} >{props.children}</Context.Provider>
    )
}

export default Provider