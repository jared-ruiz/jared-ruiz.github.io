import React from "react";
import userflowchart from '../../Assets/Compressed_Images/compressed_ux_images/user_flow_chart-min.jpg';
import bpstoryboard from '../../Assets/Compressed_Images/compressed_ux_images/Big_Picture_Storyboard-min.jpg';
import custoryboard from '../../Assets/Compressed_Images/compressed_ux_images/Close-Up_Storyboard-min.jpg';
import companylogo from '../../Assets/Compressed_Images/compressed_ux_images/logo_01-min.png';
import wireframe from '../../Assets/Compressed_Images/compressed_ux_images/wireframe_02-min.jpg';
import affinitydiag from '../../Assets/Compressed_Images/compressed_ux_images/Affinity Diagram-min.png';
import gabriella from '../../Assets/Compressed_Images/compressed_ux_images/journey_map_gabriella-min.PNG';
import tyler from '../../Assets/Compressed_Images/compressed_ux_images/journey_map_tyler-min.PNG';

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
                            <h3><span id="vapor">Location:</span></h3>
                            <p>San Antonio, Texas</p>
                        </div>

                        <div className="responsibilites">
                            <h3><span id="vapor">Responsibilites:</span></h3>
                            <p>UX/UI Design</p>

                        </div>

                        <div className="tech">
                            <h3><span id="vapor">Technologies:</span></h3>
                            <p>Procreate, Figma, Adobe CC, wireframe.cc</p>
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

                <div className="proj-1-info">

                        <div className="info-bg">
                            <h2 id="shrink"><span id="vapor">Project Background:</span></h2>
                            <p>"I am creating an application for a local museum to help facilitate ticket purchases for special exhibitional events and also provide easy to access information for commuting and planning the everyday museum visit."</p>
                        </div>

                        <div className="info-questions">
                            <h2 id="shrink"><span id="vapor">Research Questions:</span></h2>
                            <p>1.) How quickly can a patron purchase a ticket to an exhibit of their choice?</p>
                            <p>2.) How can we design clear and efficient user flows for first-time users unfamiliar with the museum’s offerings?</p>
                        </div>

                        <div className="info-participants">
                            <h2 id="shrink"><span id="vapor">Participants:</span></h2>
                            <p>10 Participants: 4 Men, 6 Women</p>
                            <p>Primarily targeting locals who are interested in art, history and recreational activities in their city.</p>
                        </div>
                    
                </div>

                <div className="proj-prelim-photos">

                    <div className="photo-block">
                        <img src={affinitydiag} id="affinity"></img>
                        <p>Affinity Diagram</p>
                    </div>
                    <div className="photo-block-2">
                        <img src={gabriella} id="gabi"></img>
                        <p>Journey Map (Gabriella)</p>

                        <img src={tyler} id="ty"></img>
                        <p>Journey Map (Tyler)</p>
                    </div>            
                </div>
        
            
            </div>


            
        </div>
    )
}

export default UX;