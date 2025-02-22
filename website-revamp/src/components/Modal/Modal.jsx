import classes from '../Modal/Modal.module.css';
import { useEffect } from 'react';

function Modal({exitModal, imageSrc, imageTitle}) {

//I can use this to avoid the scrolling effects when modal is active but I'm not sure I like the jitter when it comes in and out

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, []);

    return(
      
        <>

            <div className={classes.modal_container} onClick={exitModal}>
                <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                    <img src={imageSrc} className={classes.modal_image} />
                </div>
                <div className={classes.modal_text_container}>
                    <p className={classes.modal_text}>{imageTitle}</p>
                </div>
            </div>

        </>
    )
}

export default Modal;