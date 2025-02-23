import sketchItems from '../../assets/sketchbook_content/sketchbook.js';
import classes from '../Sketches/Sketches.module.css';

function Sketchbook() {

    return(
        <>
            <div className={classes.grid_styling}>
                {sketchItems.map((item) => (

                    <div className={classes.grid_item} key={item.index} onClick={''}>
                        <img src={item.src} className={classes.image}/>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Sketchbook;