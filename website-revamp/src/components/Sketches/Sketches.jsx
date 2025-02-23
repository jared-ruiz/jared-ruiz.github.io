import sketchItems from '../../assets/sketchbook_content/sketchbook.js';
import classes from '../Sketches/Sketches.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

function Sketchbook() {

    // state for capturing the image src and title of selected grid item
    const [selectedImage, setSelectedImage] = useState();
    const [selectedTitle, setSelectedTitle] = useState();

    function handleOpenModal(src, title) {
        setSelectedImage(src);
        setSelectedTitle(title);
    }

    function handleCloseModal() {
        setSelectedImage(null);
        setSelectedTitle('');
    }

    return(
        <>
            <div className={classes.grid_styling}>
                {sketchItems.map((item) => (

                    <div className={classes.grid_item} key={item.index} onClick={() => handleOpenModal(item.src, item.title)}>
                        <img src={item.src} className={classes.image}/>
                    </div>

                ))}
            </div>
            {selectedImage && selectedTitle ?
            <Modal exitModal={handleCloseModal} enterModal={handleOpenModal} imageSrc={selectedImage} imageTitle={selectedTitle} /> 
            : null }
        </>
    )
}

export default Sketchbook;