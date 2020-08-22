import React from 'react'
import firebase, { db, rdb } from '../firebase'
import clsx from 'clsx';
import './class.css'
import '../CSS/Pages/Class.css'
import { makeStyles } from '@material-ui/core/styles';
import MappBar from './mAppBar'
import Footer from './Footer'
import Dialog from '@material-ui/core/Dialog';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LanguageIcon from '@material-ui/icons/Language';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import MyAppBar from '../Components/AppBar'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import MyCart from '../Log/cart'
import { FaFemale } from 'react-icons/fa'
import ClassCarousel from './carousel'
import MobileClass from './mClass'

var tick = null

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });

function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

class ClassDisplay extends React.Component {
    state = {
        id: null,
        name: null,
        address: null,
        type: null,
        age: null,
        images: null,
        eligibility: null,
        courses: null,
        faculty: null,
        note: null,
        cart_dialog: false,
        location: null,

        time: null,
        online: null,
        individual: null,
        group: null,
        women: null,

        cart: [],
        cart_item: null,

        user: true,
        total_amount:0,

        mode:"",
        type:"",
        time:"",
    }

    componentDidMount() {
        var id = this.props.match.params.id

        if (firebase.auth().currentUser) {
            this.setState({ user: firebase.auth().currentUser })
        }

        const data = db.collection("Classes").doc(id)
        data.get().then(snapshot => {
            var name
            var address
            var type
            var age
            var time
            var online
            var individual
            var group
            var women
            var location

            name = snapshot.get('name')
            address = snapshot.get('address')
            type = snapshot.get('type')
            age = snapshot.get('age')

            time = snapshot.get('time')
            online = snapshot.get('online')
            individual = snapshot.get('individual')
            group = snapshot.get('group')
            women = snapshot.get('women')
            location = snapshot.get("location")

            this.setState({ name: name })
            this.setState({ address: address })
            this.setState({ type: type })
            this.setState({ age: age })

            this.setState({ time: time })
            this.setState({ online: online })
            this.setState({ individual: individual })
            this.setState({ group: group })
            this.setState({ women: women })
            this.setState({ location: location })
        })

        const elegibility = db.collection("Classes").doc(id).collection("Eligibility")
        elegibility.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ eligibility: item })
        })

        const courses = db.collection("Classes").doc(id).collection("Courses")
        courses.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ courses: item })
        })

        const faculty = db.collection("Classes").doc(id).collection("Qualifications")
        faculty.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ faculty: item })
        })

        const note = db.collection("Classes").doc(id).collection("Note")
        note.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ note: item })
        })

        this.setState({ id: id })
    }

    handleClose = () => {
        this.setState({ cart_dialog: false })
    }

    openCart = (item) => {
        this.setState({ cart_dialog: true })
        this.setState({ cart_item: item })
    }

    addToCart = (item) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                rdb.ref("carts").child(firebase.auth().currentUser.uid).child(item.title).set({
                    title: item.title,
                    image: item.image,
                    price: parseInt(item.price, 10),
                    mode: this.state.mode,
                    type: this.state.type,
                })
                this.setState({total_amount:this.state.total_amount+parseInt(item.price, 10)})
            }
            else {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    // The signed-in user info.
                    //var user = result.user;firebase
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;

                    db.collection("LoginErrors").doc(email).set(
                        {
                            errorMessage: errorMessage,
                            email: email,
                            credential: credential
                        }
                    )
                });
            }
        })
        this.handleClose()
    }

    remove = (items, item) => {
        var index = items.indexOf(item)
        if (index > -1) {
            items.splice(index, 1)
        }
    }

    render() {
        tick = <div style={{ position: "absolute", bottom: "0", color: "#00d882", margin: "0px 5px" }} >
            <CheckCircleIcon color="#00d882" />
        </div>
        return (
            <div style={{ backgroundColor: "white" }} >
                <MyAppBar />
                <ClassCarousel id={this.props.match.params.id} />
                <div className="desktop" >
                    <div className="wrap" style={{ margin: "10px 0px" }} >
                        <div className="class-container" >
                            <div style={{ width: '600px' }} >
                                <h1>{this.state.name}</h1>
                                <div className="address" >
                                    {this.state.address}
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div className="type1" >{this.state.type}</div>
                                    <div className="type1" >Age: {this.state.age}+</div>
                                    <a href={this.state.location} ><div className="type1" >View On Map</div></a>
                                </div>

                                <div>
                                    <h2>Features</h2>
                                    <div className="wrap" >
                                        <div style={{ display: 'flex', width: "100%", flexWrap: "wrap" }} >

                                            {this.state.time ? (
                                                <div className="class-feature" ><AccessTimeRoundedIcon />{this.state.time}</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.individual ? (
                                                <div className="class-feature" ><PersonOutlineRoundedIcon />Individual Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.online ? (
                                                <div className="class-feature" ><LanguageIcon />Online Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.group ? (
                                                <div className="class-feature" ><PeopleOutlineRoundedIcon />Group Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.women ? (
                                                <div className="class-feature" ><FaFemale />Women</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2>Eligibility</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.eligibility &&
                                            this.state.eligibility.map(item => {
                                                return (
                                                    <li>{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h2>Courses</h2>
                                    <div style={{ width: "600px", display: 'flex', flexWrap: "wrap" }} >
                                        {
                                            this.state.courses &&
                                            this.state.courses.map(item => {
                                                return (
                                                    <div className="class-card-wrap" >
                                                        <div className="class-card">
                                                            <div style={{ width: "100px", height: "150px", overflow: "hidden" }} >
                                                                <img src={item.image} alt="s" width="100px" />
                                                            </div>

                                                            <div style={{ width: "180px", paddingLeft: "10px", maxHeight: "150px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                                                                <div>{item.title}</div>
                                                                <div class="dropdown">
                                                                    <div style={{ fontSize: "10px", color: "grey" }} >
                                                                        <span>Click for more details</span>
                                                                        <div class="dropdown-content">
                                                                            <p>Hello World!</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div style={{ height: "50px", width: "100%", padding: "10px", display: "flex", justifyContent: "space-between", alignContent: "center", border: "1px solid #cacaca" }}>
                                                            <div style={{ padding: "5px" }} >
                                                                Fees : &#8377;{item.price}
                                                            </div>

                                                            <div className="class-button" onClick={() => { this.openCart(item) }} >
                                                                + ADD
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h2>About Faculty</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.faculty &&
                                            this.state.faculty.map(item => {
                                                return (
                                                    <li style={{ marginBottom: "15px" }} >{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h2>Note From Teacher</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.note &&
                                            this.state.note.map(item => {
                                                return (
                                                    <li style={{ marginBottom: "15px" }} >{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>

                            <div style={{ width: '400px', alignItems: "start" }} className="wrap" >
                                <MyCart total_amount={this.state.total_amount} />
                            </div>

                        </div>
                    </div>
                    <Footer />
                </div>
                <div className="mobile" style={{ minHeight: "100vh", backgroundColor: "white" }} >
                    <MappBar />
                    <MobileClass
                        id={this.props.match.params.id}
                        images={this.state.images}
                        eligibility={this.state.eligibility}
                        courses={this.state.courses}
                        qualifications={this.state.faculty}
                        note={this.state.note}

                        name={this.state.name}
                        address={this.state.address}
                        type={this.state.type}
                        age={this.state.age}
                    />
                </div>

                <Dialog open={this.state.cart_dialog} onClose={this.handleClose} >
                    <div className="cart-dialog" >
                        <div className="cart-title" >
                            {
                                this.state.cart_item !== null ? (
                                    this.state.cart_item.title
                                ) : (
                                        ""
                                    )
                            }
                        </div>
                        <div style={{ width: "100%", backgroundColor: "grey", height: "0.5px", margin: "10px 0px" }} ></div>

                        <div>
                            <FormControl component="fieldset">
                                Mode
                                <div style={{color:"grey"}} >
                                    You want classes online or offline ?
                                </div>
                                <RadioGroup aria-label="gender" name="gender1" value={this.state.mode} onChange={(e)=>{this.setState({mode:e.target.value})}} >
                                    <FormControlLabel value="Online" control={<Radio />} label={<div style={{fontSize:"13px"}} >Online</div>} />
                                    <FormControlLabel value="Ofline" control={<Radio />} label={<div style={{fontSize:"13px"}} >Ofline</div>} />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset">
                                Type
                                <div style={{color:"grey"}} >
                                    You want to study alone or with group ?
                                </div>
                                <RadioGroup aria-label="gender" name="gender1" value={this.state.type} onChange={(e)=>{this.setState({type:e.target.value})}} >
                                    <FormControlLabel value="Individual" control={<Radio />} label={<div style={{fontSize:"13px"}} >Individual</div>} />
                                    <FormControlLabel value="Group" control={<Radio />} label={<div style={{fontSize:"13px"}} >Group</div>} />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset">
                                Timings
                                <div style={{color:"grey"}} >
                                    What time are you comfortable with?
                                </div>
                                <RadioGroup aria-label="gender" name="gender1">
                                    <FormControlLabel value="female" control={<Radio />} label={<div style={{fontSize:"13px"}} >Online</div>} />
                                    <FormControlLabel value="male" control={<Radio />} label={<div style={{fontSize:"13px"}} >Ofline</div>} />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="cart-button" onClick={() => this.addToCart(this.state.cart_item)}>
                            ADD TO CART
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default ClassDisplay;