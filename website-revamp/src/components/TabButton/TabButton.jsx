import tab_content from '../../assets/tab_content/tab_content.js';
import classes from '../TabButton/TabButton.module.css';
import { useState } from 'react';

function TabButton() {


    const [activeTab, setActiveTab] = useState(tab_content[0].index);

    return(
        <>
            <ul className={classes.button_styling}>
                {tab_content.map((item) => (
                    <button
                        key={item.index}
                        className={`${classes.tab_item} ${activeTab === item.index ? classes.active : ''}`}
                        onClick={() => setActiveTab(item.index)}>
                    
                        {item.title}
                    </button>
                ))}
            </ul>

            <div className={classes.tab_content}>
                <p>{tab_content.find(item => item.index === activeTab).content}</p>
            </div>
        </>
    )
}

export default TabButton;