import React, { Component } from 'react'
import {db} from '../../firebase'
import image from '../../Images/no-classes.jpg'

export class OnGoingClasses extends Component {

    state = {
        items:null
    }

    componentDidMount(){
        const data = db.collection("Users").doc("email").collection("OnGoingClasses")
        data.get().then(snapshot=>{
        })
    }

    render() {
        return (
            <div>
                <div className="desktop" >
                    <h1>
                        On Going Classes
                    </h1>
                    <div className="wrap" >
                    {
                        this.state.items ? (
                            <div>

                            </div>
                        ) : (
                            <div>
                                <img alt = "" src = {image} height="500px" />
                                <div style={{textAlign:"center"}} >
                                    No Classes Enrolled
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
                <div className="mobile" >

                </div>
            </div>
        )
    }
}

export default OnGoingClasses
