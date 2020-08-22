import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MappBar from '../Components/mAppBar'
import Footer from '../Components/Footer'
import '../CSS/Pages/Contact-Us.css'
import '../CSS/Pages/About.css'
import '../CSS/Forms/Forms-For-Teachers.css'

export default class FormsForTeachers extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>
                <div className="contact-wallpaper-overlay wrap" >
                    <div>
                        <div className="future-of-learning" >
                            You Can Lean On Us
                        </div>
                    </div>
                </div>
                <div className="teachers-forms-wallpaper" ></div>

                <div className="wrap" style={{ flexDirection: "column" }} >
                <div>
                        <div className="about-content" >
                            <div className="about-text" >
                                <h1 style={{ fontSize: "40px" }} >
                                    Do You Provide Tuitions?
                                        </h1>
                                <div className="help-teachers" style={{ display: "flex", justifyContent: "space-evenly" }} >

                                    <div className="about-card" >
                                        <h4>Technology</h4>
                                        <div>
                                            We help them with organising online classes.<br />
                                                We set up their account, add their students to the teams and
                                                schedule the classes every week.
                                            </div>
                                    </div>

                                    <div className="about-card" >
                                        <h4>Marketing</h4>
                                        <div>
                                            Our team of experts in marketing make the institute grow.
                                            We find willing to learn students and arrange trial classes with the teachers.
                                            </div>
                                    </div>

                                    <div className="about-card" >
                                        <h4>Setting Up</h4>
                                        <div>
                                            For new tutors, it is hard to find students. We do it for them.
                                            We market their classes. Provide them their classrooms and good
                                            quality equipments.
                                            </div>
                                    </div>

                                    <div className="about-card" >
                                        <h4>Social Media</h4>
                                        <div>
                                            Social Media is great way of marketing. We prepare posts for the teachers
                                            to post on social media. So that they grow and keep on
                                            spreading the joy of education.
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign:"center",fontSize:"20px",margin:"20px 10px"}} >
                                We believe that it is a difficult time for the <b style={{color:"#00b6c7"}}> teachers</b>. <br/>
                                <b style={{color:"#00b6c7"}}>Teachers</b> who shape the future of the country.
                                So, you just teach. Rest will be done by us.....
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
