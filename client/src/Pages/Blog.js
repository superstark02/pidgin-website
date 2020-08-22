import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import '../CSS/Home.css'
import { blog } from '../Constants/Blogs/Blogs'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'

export class Blog extends Component {
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
                                    {blog[this.state.index].title}
                                </h1>
                                <div>
                                    {blog[this.state.index].author}
                                </div>
                                <div>
                                    {blog[this.state.index].time}
                                </div>
                            </div>
                            <img alt="blog-image" className="home-blogs-workshops-heading-image" src={blog[this.state.index].image}/>
                        </div>
                        {blog[this.state.index].content}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Blog
