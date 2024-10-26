import React from "react";
import userflowchart from '../../Assets/Images/user_flow_chart.jpg';
import bpstoryboard from '../../Assets/Images/Big_Picture_Storyboard.jpg';
import custoryboard from '../../Assets/Images/Close-Up_Storyboard.jpg';
import companylogo from '../../Assets/Images/logo_01.png';
import wireframe from '../../Assets/Images/wireframe_02.jpg';

function UX() {
    return(
        <div className="ux">
            <div className="ux-intro-block">
                
                <div className="ux-wip">
                    <h2 id="ux-h2-title"><span id="vapor">Google UX Design Portfolio</span></h2>
                    <p>Welcome! This will be where I house my projects from my Google UX Design Course! I will periodically update the contents below as I continue through development! Thank you for your patience!</p>
                    <p>-J</p>
                </div>
                
                {/* <div className="proj-1-title">
                    <h2 id="ux-h2-title"><span id="vapor">Project: 1 (WIP)</span></h2>
                    <p>Museum Application</p>
                </div> */}
            </div>
            <div className="proj-1-block">
                <div className="proj-1-pre-brief">
                    <h2 id="remove-margin">Project 1:</h2>
                    <h2 id="close-together"><span id="vapor">"El Puente a Otro Mundo"</span></h2>
                     <p>I had the pleasure of leading the UX design and research efforts for the fictional musuem "El Puente a Otro Mundo", who were in need of a new front facing website/application to better provide transparency and ease of access to all of their important events and exhibits.</p>
                    <div className="proj-1-roles">

                        <div className="location">
                            <h3>Location:</h3>
                            <p><span id="vapor">San Antonio, Texas</span></p>
                        </div>

                        <div className="responsibilites">
                            <h3>Responsibilites:</h3>
                            <p><span id="vapor">UX/UI Design</span></p>

                        </div>

                        <div className="tech">
                            <h3>Technologies:</h3>
                            <p><span id="vapor">Procreate, Figma, Adobe CC, wireframe.cc</span></p>
                        </div>

                    </div>
                </div>
                <div className="proj-prelim-photos">

                    <div className="photo-block">
                        <img src={userflowchart} id="userflowchart"></img>
                        <p>Initial User Flow Chart</p>
                    </div>
                    <div className="photo-block-2">
                        <img src={bpstoryboard} id="bpstoryboard"></img>
                        <p>Big Picture Storyboard</p>

                        <img src={custoryboard} id="custoryboard"></img>
                        <p>Close Up Storyboard</p>
                    </div>            
                </div> 

                <div className="logo-block">
                    <div className="logo-div">
                        <img src={companylogo} id="company_logo"/>
                        <p>Logo (WIP)</p>
                    </div>
                    <div className="wireframe-div">
                        <img src={wireframe} id="wireframe"/>
                        <p>Initial Wireframe</p>
                    </div>



                </div>

        
            
            </div>


            
        </div>
    )
}

export default UX;