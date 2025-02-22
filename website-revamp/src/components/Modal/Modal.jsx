import classes from '../Modal/Modal.module.css';

function Modal({exitModal, imageSrc, imageTitle}) {

    return(
        
        <>

            <div className={classes.modal_container} onClick={exitModal}>
                <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                    <img src={imageSrc} className={classes.modal_image} />
                    {/* <p className={classes.modal_text}>{imageTitle}</p> */}
                </div>
            </div>

        </>
    )
}

export default Modal;