import classes from '../About/About.module.css';
import prof_01 from '../../assets/profile_images/about_me_pic-min.png'
import TabButton from '../TabButton/TabButton';

function About() {

    return(
        <>
            <div className={classes.about_container}>
                <div className={classes.card_content}>

                    <div className={classes.card_image}>
                            <img src={prof_01} className={classes.prof_01}/>
                    </div>

                    <div className={classes.card_me_info}>
                        <h1>Hello, my name is Jared Ruiz</h1>
                        <p>I am a graphic designer, video editor, front-end developer, and UX/UI designer based in San Antonio, Texas. I have over 4 years of experience working within small businesses, creating and managing media creation and social media efforts in the cyber security industry, and over 5 years of experience in education and B2C sales.
                        </p>
                        <p>Whether it’s voiceovers for informational video projects, content for your next marketing campaign, website UI refactoring, or social media management, I can do it all and more. I look forward to working with you!</p>
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