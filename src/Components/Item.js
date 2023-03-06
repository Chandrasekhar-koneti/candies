

const Item=(props)=>{
    return(
        <li>
            <div>
                <h2>{props.candyname}</h2>
            </div>
            <div>
               <h3>{props.description}</h3> 
            </div>
            <div>
                {props.amount}
            </div>
        </li>
    )
}

export default Item