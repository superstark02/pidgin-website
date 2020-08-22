import React from 'react'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import { Divider } from '@material-ui/core'

export default class Courses extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="desktop" style={{backgroundColor:'white'}} >
                    <div class="wrap" style={{ marginTop: '100px' }}>
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            <h2>How To Use Pidgin App</h2>
                            <p>
                                This page tells you how to use the app.
                            </p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <img alt="s" src="../Images/app_bg.png" width="50%" />
                        </div>
                    </div>

                    <div class="wrap">
                        <div class="para">

                            <div class="wrap">
                                <div>
                                    <img alt="team" src="../Images/online.jpg" />
                                </div>
                                <div>
                                    <h2 class="title">Here are the steps:</h2>
                                    <h3>Offline Classes</h3>
                                    <ol>
                                        <li>Search your course or class in which you want to enroll.</li>
                                        <li>Look for the details of the classes and all its courses.</li>
                                        <li>Check for the offers if any.</li>
                                        <li>Get a trial class.</li>
                                        <li>If you like it. Enroll through app.</li>
                                    </ol>
                                </div>
                            </div>

                            <div class="wrap">
                                <div>
                                    <h3>Online Classes</h3>
                                    <ol>
                                        <li>Search your course or class in which you want to enroll.</li>
                                        <li>Look for the details of the classes and all its courses.</li>
                                        <li>Check for the offers if any.</li>
                                        <li>Get a trial class.</li>
                                        <li>If you like it. Enroll through app.</li>
                                    </ol>
                                </div>
                                <div>
                                    <img alt="team" src="../Images/class.jpg" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <MappBar />
                    <h2 style={{ textAlign: 'center' }} >How To Use Pidgin App</h2>
                    <p style={{ textAlign: 'center' }} >
                        This page tells you how to use the app.
                    </p>
                    <div className="wrap" >
                        <img src="../Images/online.jpg" width="80%" alt="s" />
                    </div>

                    <div>
                        <h2 style={{ textAlign: 'center' }} className="title">Here are the steps:</h2>
                        <h3 style={{ textAlign: 'center' }} >Offline Classes</h3>
                        <ol>
                            <li>Search your course or class in which you want to enroll.</li>
                            <li>Look for the details of the classes and all its courses.</li>
                            <li>Check for the offers if any.</li>
                            <li>Get a trial class.</li>
                            <li>If you like it. Enroll through app.</li>
                        </ol>
                    </div>

                    <div className="wrap" >
                        <img src="../Images/class.jpg" width="80%" alt="s" />
                    </div>

                    <div>
                        <h3 style={{ textAlign: 'center' }} >Online Classes</h3>
                        <ol>
                            <li>Search your course or class in which you want to enroll.</li>
                            <li>Look for the details of the classes and all its courses.</li>
                            <li>Check for the offers if any.</li>
                            <li>Get a trial class.</li>
                            <li>If you like it. Enroll through app.</li>
                        </ol>
                    </div>
                    <Divider />
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}