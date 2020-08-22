import React, { Component } from 'react'
import {db} from '../../firebase'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export class LikedClasses extends Component {

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
                        Liked Classes
                    </h1>
                    <div className="wrap" >
                    {
                        this.state.items ? (
                            <div>

                            </div>
                        ) : (
                            <div style={{textAlign:"center",color:"rgba(128,128,128,0.5)"}} >
                                <FavoriteBorderIcon style={{fontSize:"200px",color:"rgba(128,128,128,0.5)"}} />
                                <div>
                                    No Liked Classes Yet
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

export default LikedClasses
