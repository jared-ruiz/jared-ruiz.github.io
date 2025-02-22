import classes from '../Header/Header.module.css';

function Header() {
    return(
        <>
        <div className={classes.nav_container}>
            <div className='nav-content'>
                <button>Designs</button>
                <button>Sketchbook</button>
                <button>Projects</button>
                <button>About</button>
            </div>
            <div className='nav-socials'>
                
            </div>
        </div>
        </>
    )
}

export default Header;