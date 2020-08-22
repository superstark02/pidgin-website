import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import Footer from '../../Components/Footer'
import '../../CSS/Home.css'
import '../../CSS/Pages/Blog.css'
import '../../CSS/Pages/Careers.css'
import MappBar from '../../Components/mAppBar'
import {blog} from './Blogs'

export default class BlogLandingPage extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>

                <div className="career-wallpaper-overlay wrap" >
                    <div>
                        <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                            INSPIRATION
                        </div>
                        <div className="future-of-learning" >
                            It's everywhere
                        </div>
                    </div>
                </div>
                <div className="blog-wallpaper" ></div>

                <div className="wrap" >
                    <div className="home-width-container" style={{ margin: "40px 0px" }} >
                        {
                            blog.map(item => {
                                return (
                                    <a href={"/pidgin/blogs/"+item.id} >
                                        <div className="blog-cards" >
                                            <img src={item.image} className="blog-card-image" />
                                            <div>
                                                <h3>
                                                    {item.title}
                                                </h3>
                                                <div>
                                                    {item.author}
                                                </div>
                                                <div>
                                                    {item.time}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
