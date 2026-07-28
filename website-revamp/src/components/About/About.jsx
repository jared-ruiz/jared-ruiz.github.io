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
                        <p>I am a Content Operations Specialist with 5+ years of experience optimizing digital content workflows, managing technical partner onboarding, and supporting cross-functional operations. Experienced in authoring technical documentation, developing AI-assisted workflow automation, and building internal tools that improve content quality and operational efficiency
                        </p>
                        <p>I'm currently seeking opportunities in Content Operations, Technical Operations, Product Operations,
                        or similar roles where I can contribute to building scalable processes, improving operational
                        efficiency, and delivering exceptional experiences for both users and business partners.</p>
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