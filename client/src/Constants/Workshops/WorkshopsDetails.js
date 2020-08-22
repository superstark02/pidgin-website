import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import '../../CSS/Home.css'
import { workshops } from '../../Constants/Workshops/Workshops-Data'
import Footer from '../../Components/Footer'
import MappBar from '../../Components/mAppBar'

export class WorkshopDetails extends Component {
    state = {
        index:0
    }
    componentDidMount(){
        this.setState({index:parseInt(this.props.match.params.index)})
    }
    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar/>
                </div>
                <div className="wrap" >
                    <div className="home-width-container" style={{margin:"40px 0px"}} >
                        <div className="wrap" style={{flexWrap:"wrap"}} >
                            <div className="home-blogs-workshops" >
                                <h1>
                                    {workshops[this.state.index].title}
                                </h1>
                                <div>
                                    {workshops[this.state.index].author}
                                </div>
                                <div>
                                    {workshops[this.state.index].time}
                                </div>
                            </div>
                            <img alt="blog-image" className="home-blogs-workshops-heading-image" src={workshops[this.state.index].image}/>
                        </div>
                        <div className="wrap" >
                            {workshops[this.state.index].content}
                        </div>
                        <div className="wrap" >
                            {workshops[this.state.index].form}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default WorkshopDetails
