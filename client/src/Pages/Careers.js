import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import '../CSS/Home.css'
import '../CSS/Pages/About.css'
import '../CSS/Pages/Careers.css'
import team from '../Images/Careers/careers-team.jpg'
import coder from '../Images/Careers/careers-coder.jpg'
import design from '../Images/Careers/careers-design.jpg'
import marketing from '../Images/Careers/careers-marketing.jpg'
import content from '../Images/Careers/careers-content.jpg'
import MappBar from '../Components/mAppBar'
import { Button } from '@material-ui/core'

const team_data = [
    {
        img: coder,
        title: "Technology",
        description: "We are behind the scenes. We work so that user experiences smooth sailing through app and website."
    },
    {
        img: marketing,
        title: "Brand & Marketing",
        description: "We have the best people to keep you informed about all our latest offerings and products"
    },
    {
        img: design,
        title: "Design",
        description: "We make things look from normal to amazing. We build the face of the website and app. "
    },
    {
        img: content,
        title: "Content",
        description: "Conveying is our duty. We make sure that you receive correct information. We speak on behalf of the tutors."
    }
]

export class Careers extends Component {

    sendMail = (title) => {
        var link = "mailto:ds.techin@gmail.com"
            + "?bcc=superstark02@gmail.com"
            + "&subject=" + escape(title)
            + "&body=<div>I would like to join your team.</div>"
            ;

        window.location.href = link;
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>
                <div>
                    <div className="career-wallpaper-overlay wrap" >
                        <div>
                            <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                                WELCOME
                            </div>
                            <div className="future-of-learning" >
                                We Struggle To Shape The Future Of Learning
                            </div>
                        </div>
                    </div>
                    <div className="career-wallpaper" ></div>

                    <div className="wrap" style={{ margin: "40px 0px" }} >
                        <div className="home-width-container" >

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div>
                                        <img src={team} className="about-map" />
                                    </div>
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px" }} >
                                            Better Education For More Students
                                        </h1>
                                        At Pidgin we are working day and night to collect teachers around <br />
                                        you. Solving their and your problems and providing you the best <br />
                                        service possible.
                                    </div>
                                </div>
                            </div>

                            <div className="about-content" >
                                <div className="about-text" >
                                    <h1 style={{ fontSize: "40px" }} >
                                        Our Teams
                                    </h1>

                                    <div className="help-teachers" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }} >
                                        {
                                            team_data.map(item => {
                                                return (
                                                    <div className="career-card wrap" >
                                                        <div>
                                                            <img src={item.img} alt="coder" width="250px" className="team-img" />
                                                        </div>
                                                        <div>
                                                            <h4>{item.title}</h4>
                                                            <div>
                                                                {item.description}
                                                            </div>
                                                            <div>
                                                                <Button onClick={()=>{this.sendMail(item.title)}} disableElevation color="secondary" variant="contained" style={{margin:"10px 0px"}} >
                                                                    Join
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Careers
