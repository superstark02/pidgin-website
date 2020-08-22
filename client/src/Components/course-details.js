import React, { Component } from 'react'
import {db} from '../firebase'
import MappBar from './mAppBar'

class CourseDetails extends Component {

    state = {
        eligibility:null,
        title:null,
        price:null,
        image:null
    }

    componentDidMount(){

        const data = db.collection("Classes").doc(this.props.match.params.id).collection("Courses").doc(this.props.match.params.doc)
        data.get().then(snapshot => {
            var title = snapshot.get('title')
            var price = snapshot.get('price')
            var image = snapshot.get('image')

            this.setState({title:title}); this.setState({price:price}); this.setState({image:image})
        })

        const elegibility = db.collection("Classes").doc(this.props.match.params.id).collection("Courses").doc(this.props.match.params.doc).collection("details")
        elegibility.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ eligibility: item })
        })
    }

    render() {
        return (
            <div className="mobile" style={{minHeight:"100vh"}} >
                <MappBar/>
                <div className="wrap" style={{paddingTop:"50px",paddingBottom:'10px'}} >
                    <img alt="" src={this.state.image} width="70%" ></img>
                </div>
                <div className="wrap" >
                    <h2>{this.state.title}</h2>
                </div>
                <ul>
                    {
                        this.state.eligibility&&
                        this.state.eligibility.map(item=>{
                            return <li>{item.item}</li>
                        })
                    }
                </ul>
                <div style={{ width: '100%', textAlign: 'center', color: 'lightgrey', fontSize: '10px', marginBottom: '10px',margin:'10px 0px'}} >
                    Pidgin
                </div>
            </div>
        )
    }
}

export default CourseDetails
