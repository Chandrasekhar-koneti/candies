import { Fragment } from "react"
import Modal from "./Modal"

const Cart=(props)=>{
    console.log(props)
return(
    <Modal onclose={props.onclose}>
        <div>
            <span>Total Amount</span>
            <span>0</span>
        </div>
        <div>
            <button onClick={props.onclose}>x</button>
        </div>
    </Modal>
)
}

export default Cart