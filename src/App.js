import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import { useState } from 'react';
import Cart from './Components/Cart';

function App() {

  const[cart,setcart]=useState(false)
  const showcarthandler=()=>{
  setcart(true)
  }

  const hidecarthandler=()=>{
    setcart(false)
  }

  return (
    <>
    {cart && <Cart onclose={hidecarthandler} />}
    <Form onshowcart={showcarthandler}/>
    </>
  );
}

export default App;
