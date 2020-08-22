import React, { Component } from 'react'
import { db } from '../firebase'
import './class.css'
import image from '../Images/alt-image.jpg'
import CarouselSlider from "react-carousel-slider";
import Loader from 'react-loader-spinner'

let sliderBoxStyle = {
    height: "60vh"
    , width: "100%",
    backgroundColor: "white",
    padding: '0px'
};

let itemsStyle = {
    height: '100%',
    padding: '0px',
};

let textBoxStyle = {
    // textAlign: "left"
    // ,width:"50%"
    // , background: "transparent"
    // , fontSize: "36px"
    // , fontWeight: 300
};

let buttonSetting = {
    placeOn: "middle-inside"
    , hoverEvent: true
    , style: {
        left: {
            margin: "0px 10px 0px 10px",
            height: "50px",
            width: "50px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        },
        right: {
            margin: "10px 10px 10px 10px",
            height: "50px",
            width: "50px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        }
    }
};

let manner = {
    duration: "0.3s"
};

let options = {
    button: true
}

let mobileButtonSetting = {
    placeOn: "middle-inside"
    , style: {
        left: {
            margin: "0px 5px 0px 5px",
            height: "20px",
            width: "20px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        },
        right: {
            margin: "10px 5px 0px 5px",
            height: "20px",
            width: "20px",
            color: "#929393",
            background: "rgba(225, 228, 232, 0.8)",
            borderRadius: "50%"
        }
    }
};

let mobileSliderBoxStyle = {
    height: "200px"
    , width: "100%",
    backgroundColor: "white",
    padding: '0px'
};

export class ClassCarousel extends Component {

    state = {
        images: null,
        id: null,
    }

    componentDidMount() {

        const images = db.collection("Classes").doc(this.props.id).collection("Images")
        images.get().then(snapshot => {
            const item = []
            const temp = []
            snapshot.forEach(doc => {
                const data = doc.data()
                temp.push(data)
            })
            var i = 0
            for (i; i < temp.length; i++) {
                item.push({
                    imgSrc: temp[i].item
                })
            }
            this.setState({ images: item })
        })
    }

    render() {
        return (
            <div>
                <div className="desktop wrap" >
                    <div style={{ backgroundColor: "white", width:"70%" }} >
                        {
                            this.state.images !== null && this.state.images.length !== 0 ? (
                                <CarouselSlider
                                    slideItems={this.state.images}
                                    manner={manner}
                                    buttonSetting={buttonSetting}
                                    sliderBoxStyle={sliderBoxStyle}
                                    itemsStyle={itemsStyle}
                                    textBoxStyle={textBoxStyle}
                                    accEle={options}
                                />
                            ) : this.state.images === null ? (
                                <div className="wrap" style={{ height: "200px" }} >
                                    <Loader
                                        type="TailSpin"
                                        color="#043345"
                                        height={60}
                                        width={60}
                                        timeout={3000} //3 secs

                                    />
                                </div>
                            ) : (
                                        <div className="wrap" style={{ textAlign: "center" }} >
                                            <div>
                                                <img alt="" height="300px" src={image} />
                                                <div>Online Classes Only</div>
                                            </div>
                                        </div>
                                    )
                        }
                    </div>
                </div>

                <div className='mobile' >
                    <div style={{backgroundColor: "white",marginTop:"100px" }} >
                        {
                            this.state.images !== null && this.state.images.length !== 0 ? (
                                <CarouselSlider
                                    slideItems={this.state.images}
                                    manner={manner}
                                    buttonSetting={mobileButtonSetting}
                                    sliderBoxStyle={mobileSliderBoxStyle}
                                    itemsStyle={itemsStyle}
                                    textBoxStyle={textBoxStyle}
                                    accEle={options}
                                />
                            ) : this.state.images === null ? (
                                <div className="wrap" style={{ height: "100px" }} >
                                    <Loader
                                        type="TailSpin"
                                        color="#043345"
                                        height={30}
                                        width={30}
                                        timeout={3000} //3 secs

                                    />
                                </div>
                            ) : (
                                <div className="wrap" style={{ textAlign: "center" }} >
                                    <div>
                                        <img alt="" width="100%" src={image} />
                                        <div>Online Classes Only</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassCarousel

