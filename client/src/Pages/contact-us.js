import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import '../CSS/Home.css'
import '../CSS/Pages/About.css'
import '../CSS/Pages/Contact-Us.css'
import contact from '../Images/Contact-Us-Page/contact-us.jpg'
import MappBar from '../Components/mAppBar'
import { TextField, Button } from '@material-ui/core'

export default class ContactUs extends Component {

    sendMail = () => {
        var link = "mailto:ds.techin@gmail.com"
            + "?cc=superstark02@gmail.com"
            + "&subject=" + escape("Subject")
            + "&body=<div>HeeloWorld</div>"
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
                    <div className="contact-wallpaper-overlay wrap" >
                        <div>
                            <div className="future-of-learning" >
                                We Would Love To Here From You
                            </div>
                        </div>
                    </div>
                    <div className="contact-wallpaper" ></div>

                    <div className="wrap" style={{ margin: "40px 0px" }} >
                        <div className="home-width-container" >

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px", marginBottom: "40px" }} >
                                            We are available 24/7
                                        </h1>
                                        <div>
                                            <div>
                                                <TextField className="text-field"
                                                    id="outlined-basic"
                                                    label="Name*"
                                                    color="secondary"
                                                    variant="outlined" />
                                            </div>
                                            <div>
                                                <TextField className="text-field"
                                                    style={{ margin: "10px 0px" }}
                                                    id="outlined-basic"
                                                    label="Email*"
                                                    color="secondary"
                                                    variant="outlined" />
                                            </div>
                                            <div>
                                                <TextField className="text-field"
                                                    id="outlined-basic"
                                                    label="Phone (optional)"
                                                    color="secondary"
                                                    variant="outlined" />
                                            </div>
                                            <div>
                                                <TextField className="text-field"
                                                    id="outlined-basic"
                                                    style={{ margin: "10px 0px" }}
                                                    label="Message"
                                                    color="secondary"
                                                    multiline
                                                    variant="outlined" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img allt="contact" src={contact} className="about-map" />
                                    </div>
                                </div>
                                <div>
                                    <Button 
                                        color="secondary" 
                                        disableElevation
                                        onClick={this.sendMail} 
                                        variant="contained" >
                                            Submit
                                    </Button>
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
