import React, { Component } from 'react'
import firebase from '../firebase'
import MappBar from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import '../CSS/Home.css'
import '../CSS/Pages/Contact-Us.css'
import '../CSS/Pages/Doubt-Sessions.css'
import Footer from '../Components/Footer'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { classes, tenth, eleventh, twelveth } from '../Database/Constants/doubt-sessions-classes'
import { Button } from '@material-ui/core'


export class DoubtSessions extends Component {

    state = {
        class: "11th",
        subject: "",
        subjects_list: []
    }

    setClass = (classes) => {
        this.setState({ class: classes })

        switch (classes) {
            case '10th':
                this.setState({ subjects_list: tenth })
                console.log(tenth)
                break;
            case '11th':
                this.setState({ subjects_list: eleventh })
                break;
            case '12th':
                this.setState({ subjects_list: twelveth })
                break;
            default:
                break;
        }
    }

    pay = () => {

        const pay = firebase.functions().httpsCallable('payment');
        pay({amount:100,receipt:'reciept'}).then(result=>{
            console.log(result)
        })
    }

    componentDidMount() {
        this.setClass();
    }

    render() {
        return (
            <div>
                <div className="mobile" >
                    <MappBar />
                </div>
                <MyAppBar />
                <div className="contact-wallpaper-overlay wrap" >
                    <div>
                        <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                            Introducing
                        </div>
                        <div className="future-of-learning" >
                            Pidgin MEET
                        </div>
                    </div>
                </div>
                <div className="sessions-wallpaper" ></div>

                <div className="wrap" style={{ margin: "40px 0px" }} >

                    <div className="home-width-container" >
                        <h1>
                            Have any problems in understanding?
                        </h1>
                        <div className="pidgin-meet-content" >
                            Struggling with doubts? Connect with the best teachers in Delhi NCR 
                            and resolve all your problems ranging from concepts to questions.
                            <br/>
                            <br/>
                            Ask your doubts in <b>live individual class</b> with teachers having:
                            <ul>
                                <li>experience of 5+ years in teaching.</li>
                                <li>experience in CBSE and ICSE board examinations.</li>
                                <li>updates in new teaching methods and syllabus.</li>
                            </ul>
                        </div>


                        <div className="wrap" style={{ flexWrap: "wrap" }} >
                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 1</h1>
                                <h2 style={{ color: "#f50057" }} >Book</h2>
                                <div>
                                    Fill details. Book a session.
                                </div>
                            </div>

                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 2</h1>
                                <h2 style={{ color: "#f50057" }} >Get Link</h2>
                                <div>
                                    After booking, get a link for scheduled meeting.
                                </div>
                            </div>

                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 3</h1>
                                <h2 style={{ color: "#f50057" }} >Meet</h2>
                                <div>
                                    Meet with teacher and get a summary after your session.
                                </div>
                            </div>
                        </div>


                        <div className="wrap" style={{ flexWrap: "wrap" }} >
                            <div className="pidgin-meet-card" >
                                <div className="pidgin-meet-card-header" >
                                    Pidgin MEET
                                </div>
                                <h1>1 hour</h1>
                                <h2 style={{ color: "#f50057" }} >Rs. 100</h2>
                                <div>
                                    Inidividual online session with an expert in your provided subject.
                                </div>
                            </div>

                            <div className="pidgin-meet-plate" >
                                <h1 >
                                    Book Your SESSION
                                </h1>
                                <div className="pidgin-meet-form wrap" style={{ flexWrap: "wrap" }} >
                                    <div className="pidgin-meet-text-field">
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            label="Select"
                                            value={this.state.class}
                                            helperText="Please select your standard"
                                            color="secondary"
                                            variant="outlined"
                                            onChange={(e) => { this.setClass(e.target.value) }}
                                        >
                                            {classes.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>

                                    <div className="pidgin-meet-text-field">
                                        {
                                            this.state.class === 'Other' ? (
                                                <TextField
                                                    id="standard-select-currency"
                                                    label="Select"
                                                    value={this.state.subject}
                                                    helperText="Please select your subject"
                                                    color="secondary"
                                                    variant="outlined"
                                                >
                                                </TextField>
                                            ) : (
                                                    <TextField
                                                        id="standard-select-currency"
                                                        select
                                                        label="Select"
                                                        value={this.state.subject}
                                                        helperText="Please select your subject"
                                                        color="secondary"
                                                        variant="outlined"
                                                        onChange={(e) => { this.setState({ subject: e.target.value }) }}
                                                    >
                                                        {this.state.subjects_list.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.value}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                )
                                        }
                                    </div>

                                    <div style={{ width: "100%", margin: "0px" }} className="pidgin-meet-text-field">
                                        <TextField
                                            id="standard-select-currency"
                                            color="secondary"
                                            variant="outlined"
                                            style={{ width: "100%" }}
                                            placeholder="Phone Number"
                                            helperText="Details will be messaged on this number."
                                        >
                                        </TextField>
                                    </div>
                                    <div classes="wrap" >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ margin: '10px' }}
                                            onClick={this.pay}
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" >
                            <div style={{ backgroundColor: "grey", width: "40%", height: "0.5px", margin: "70px 10px" }} ></div>
                            <h3> OR </h3>
                            <div style={{ backgroundColor: "grey", width: "40%", height: "0.5px", margin: "70px 10px" }} ></div>
                        </div>

                        <div>
                            <h2>
                                State Your Problems Here
                            </h2>
                            <div className="pidgin-meet-content" >
                                Let us know your question, we will provide the solution with complete explaination within 24 hours.
                                <ul>
                                    <li>Solution will be provided in PDF format through Whatsapp.</li>
                                    <li>Ask Us anytime.</li>
                                    <li>Get solution within 24 hours.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="wrap" style={{ flexWrap: "wrap" }} >
                            <div className="pidgin-meet-card" >
                                <div className="pidgin-meet-card-header" >
                                    Pidgin MEET
                                </div>
                                <h1>Get Solution</h1>
                                <h2 style={{ color: "#f50057" }} >FREE</h2>
                                <div>
                                    Get solution for your question within 24 hr.
                                </div>
                            </div>

                            <div className="pidgin-meet-plate" >
                                <h1>
                                    Provide Your Question
                                </h1>
                                <div className="pidgin-meet-form wrap" style={{ flexWrap: "wrap" }} >
                                    <div className="pidgin-meet-text-field">
                                        Upload a question: <input type="file" placeholder="Upload the question" ></input>
                                    </div>

                                    <div style={{ width: "100%", margin: "0px" }} className="pidgin-meet-text-field">
                                        <TextField
                                            id="standard-select-currency"
                                            color="secondary"
                                            variant="outlined"
                                            style={{ width: "100%" }}
                                            placeholder="Description"
                                            helperText="Details will be messaged on this number."
                                        >
                                        </TextField>
                                    </div>
                                    <div classes="wrap" >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ margin: '10px' }}
                                        >
                                            SUBMIT
                                        </Button>
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

export default DoubtSessions
