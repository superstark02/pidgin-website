import React from 'react'
import './mOptions.css'
import online from '../Images/online.jpg'
import women from '../Images/women.jpg'
import astro from '../Images/astronaut.jpg'
import find from '../Images/find.jpg'
import near from '../Images/near.jpg'
import { Link } from 'react-router-dom'

export default class Options extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="option-container" >

                    <Link to={{
                        pathname: '/pidgin/search',
                        state: {
                            type: null,
                            name: null
                        }
                    }} >
                        <div className="options-card" >
                            <div className="options-overlay" >
                                Classes Near You
                            </div>
                            <div>
                                <img alt="s" src={near} width="100%" ></img>
                            </div>
                        </div>
                    </Link>

                    <Link to={{
                        pathname: '/pidgin/search',
                        state: {
                            type: 'online',
                            name: "Online Classes available :"
                        }
                    }} >
                        <div className="options-card" >
                            <div className="options-overlay" >
                                Online Classes
                        </div>
                            <div>
                                <img alt="s" src={online} width="100%" ></img>
                            </div>
                        </div>
                    </Link>


                    <Link to={{
                        pathname: '/pidgin/search',
                        state: {
                            type: 'individual',
                            name: "Individual Classes and Courses :"
                        }
                    }} ></Link>
                    <div className="options-card" >
                        <div className="options-overlay" >
                            Individual Classes
                        </div>
                        <div>
                            <img alt="s" src={astro} width="100%" ></img>
                        </div>
                    </div>

                    <Link to={{
                        pathname: '/pidgin/search',
                        state: {
                            type: 'women',
                            name: "Classes For Women Only:"
                        }
                    }} >
                    <div className="options-card" >
                        <div className="options-overlay" >
                            Classes Only For Women
                        </div>
                        <div>
                            <img alt="s" src={women} width="100%" ></img>
                        </div>
                    </div>
                    </Link>

                    <Link to="/find-my-class" >
                        <div className="options-card" >
                            <div className="options-overlay" >
                                Unable To Find A Course?
                        </div>
                            <div>
                                <img alt="s" src={find} width="100%" ></img>
                            </div>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}