import { useContext } from 'react'
import Context from './Context'
import Modal from './UI/Modal'
import classes from './Cart.module.css'
const Cart=(props)=>{

    const ctx=useContext(Context)
    const existingItems=[...ctx.item]
    console.log(existingItems)

    let amount=0
    ctx.item.forEach((item)=>{
        amount=amount+((item.amount)*(item.quantity))
    })
    const amt='Rs.'+amount
return(
    <Modal onclose={props.onclose}>
        <div>
            <div>
                {existingItems.length >0 && existingItems.map((item,index)=>
                (<p key={index} >{item.name}--{item.amount}---{item.quantity}</p>))}
            </div>
            <span>Total Amount-</span>
            <span>{amt}</span>
        </div>
        <div>
            <button onClick={props.onclose} className={classes.cartbtn}>x</button>
        </div>
    </Modal>
)
}

export default Cart


