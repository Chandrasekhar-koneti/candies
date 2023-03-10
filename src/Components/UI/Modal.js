import { Fragment } from "react"
import classes from './Modal.module.css'
import  ReactDOM  from "react-dom"


const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onclose}></div>
    )
}

const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalelement=document.getElementById('overlays')

const Modal=(props)=>{
return(
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onclose={props.onclose}></Backdrop>,portalelement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </Fragment>
)
}
export default Modal








// import classes from './Modal.module.css';
// import ReactDOM from 'react-dom';

// const Backdrop = props =>{
//     return <div className={classes.backdrop} onClick={props.onclose}/>
// }
// const ModalOverlay = (props) => {
//  return <div className={classes.modal} >
//     <div className={classes.content}>{props.children}</div>
//  </div>

// }
// const portalElement = document.getElementById('overlays')

// const Modal = (props) =>{
//     return(
//         <>
//         {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>, portalElement)}
//         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
           
//         </>
//     )
// }
// export default Modal;