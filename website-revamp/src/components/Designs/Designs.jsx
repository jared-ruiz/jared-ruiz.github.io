import designItems from '../../assets/design_content/designs.js';
import classes from '../Designs/Designs.module.css';
import Modal from '../Modal/Modal.jsx';
import { useState, useEffect } from 'react';

function Designs() {

    //state for capturing the image src and title of selected grid item
    const [selectedImage, setSelectedImage] = useState();
    const [selectedTitle, setSelectedTitle] = useState();
    
    useEffect(() => {
        designItems.forEach((item) => {
            const img = new Image();
            img.src = item.src; 
        });
    }, []);

    function handleOpenModal(src, title) {
        setSelectedImage(src);
        setSelectedTitle(title);

    }
    
    function handleCloseModal() {
        setSelectedImage(null);
        setSelectedTitle('')

    }

    return(
        <>
            <div className={classes.grid_styling}>
                {designItems.map((item) => (

                    <div className={classes.grid_item} key={item.index} onClick={() => handleOpenModal(item.src, item.title)}>
                        <img src={item.src} className={classes.image} />
                    </div>
         
                ))}

            </div>
            {selectedImage && selectedTitle ? 

                <Modal exitModal={handleCloseModal} enterModal={handleOpenModal} imageSrc={selectedImage} imageTitle={selectedTitle}/>

            : null }

            
        </>
    )
}

export default Designs;