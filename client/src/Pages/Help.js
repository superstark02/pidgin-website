import React from 'react'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'

export default class Help extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MyAppBar/>
                <div className="mobile" >
                    <MappBar/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}