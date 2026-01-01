import classes from '../About/About.module.css';
import prof_01 from '../../assets/profile_images/about_me_profile_min.jpg'
import TabButton from '../TabButton/TabButton';
import { useEffect, useState } from 'react';

function About() {

    const [imageLoaded, setImageLoaded] = useState(false); 

    useEffect(() => {
        const img = new Image();
        img.src = prof_01;
        img.onload = () => setImageLoaded(true); 
    }, []);

    return(
        <>
            <div className={classes.about_container}>
                <div className={classes.card_content}>

                    <div className={classes.card_image}>
                    {imageLoaded ? (
                        <img src={prof_01} className={classes.prof_01} alt="Jared Ruiz" />
                    
                        
                ) : null}
                            {/* <img src={prof_01} className={classes.prof_01}/> */}
                    </div>

                    <div className={classes.card_me_info}>
                        <h1>Hello, my name is Jared Ruiz</h1>
                        <p>I am a Digital Marketing professional based in San Antonio, TX! With a BBA in Marketing and 4+ years of experience spanning graphic design, social media, web development, and SEO, I am able to approach challenges from multiple angles to create effective, thoughtful solutions.
                        </p>
                        <p>I’m currently seeking opportunities within the digital marketing space, where I can contribute to a collaborative team and help drive meaningful results!</p>
                        <p>-J</p>
                    </div>
                </div>

                <div className={classes.tab_container}>
                    <TabButton />
                </div>

            </div>
        </>
    )
}

export default About;