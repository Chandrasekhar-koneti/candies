import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"
import classes from './Form.module.css'


const Form=(props)=>{
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const[list,setlist]=useState([])

  const namehandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionhandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const amounthandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const candies= {
      name: enteredName,
      amount: enteredAmount,
      description: enteredDescription
      ,
    };
 setlist([...list,candies])
    // props.onSave(candies);
    setEnteredName('');
    setEnteredAmount('');
    setEnteredDescription('');
  };

  const additemtocart=(event)=>{
    event.preventDefault()
  }

  console.log(props)
    return(
        <Fragment>
            <div className={classes.header}>
                <div><h1 >CANDIES</h1></div>
                {/* <button className={classes.cartbtn} onClick={props.onshowcart}>Cart</button> */}
                <Button variant="dark" className={classes.cartbtn} onClick={props.onshowcart} > Cart</Button>

            </div>
            
            <form onSubmit={submitHandler}>
                <div className={classes.a}>
                    <div>
                    <label style={{paddingLeft:'1rem'}} >Candy Name</label>
                    <input type='text' onChange={namehandler} value={enteredName}></input>
                    </div>

                    <div>
                        <label>Description</label>
                        <input type='text' onChange={descriptionhandler} value={enteredDescription}></input>
                    </div>

                    <div>
                        <label>Price</label>
                        <input type='number' onChange={amounthandler} value={enteredAmount}></input>
                    </div>

                    <div>
                    <Button variant="primary" className={classes.btn} type='submit'>Add</Button>{' '}

                    </div>
                </div>
            </form>
            <div className={classes.card}>
                {list.length>0 && <p className={classes.para}>
                    CANDIES LIST</p>}
                <div>
                    {list.length !==0 && list.map((candy,index)=>(
                        <li key={index} style={{listStyle:'none'}} >
                            <h2>
                           <span className={classes.name}>{candy.name}</span>
                           <span className={classes.des}>{candy.description}</span>
                           <span className={classes.amount}>{candy.amount}</span>
                            <span><Button variant="success">Add1</Button> </span>
                            <span><Button variant="success">Add2</Button> </span>
                            <span><Button variant="success">Add3</Button> </span>
                            </h2>
                            
                        </li>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Form