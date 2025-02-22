import designItems from '../../assets/design_content/designs.js';
import classes from '../Designs/Designs.module.css';

function Designs() {
    return(
        <>
            <div className={classes.grid_styling}>
                {designItems.map((item) => (

                    <div className={classes.grid_item} key={item.index}>
                        <img src={item.src} className={classes.image} />
                    </div>
         
                ))}

            </div>
        </>
    )
}

export default Designs;