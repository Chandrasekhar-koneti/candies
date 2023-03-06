import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"
import classes from './Form.module.css'


const Form=(props)=>{
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

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
      amount: +enteredAmount,
      description: enteredDescription
      ,
    };

    props.onSave(candies);
    setEnteredName('');
    setEnteredAmount('');
    setEnteredDescription('');
  };
    return(
        <Fragment>
            <div className={classes.header}>
                <div><h1 >CANDIES</h1></div>
                {/* <Button variant="success" className={classes.cartbtn}> Cart</Button> */}

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
                    <Button variant="primary" className={classes.btn}>Add</Button>{' '}

                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Form