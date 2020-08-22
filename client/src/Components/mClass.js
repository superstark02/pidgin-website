import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import './mClass.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Footer from './Footer';

export class MobileClass extends Component {

    render() {
        return (
            <div style={{ backgroundColor: 'white', maxWidth: '100%', width: '100%'}}>
                <div>
                    <div class='displayTitle'>
                        {this.props.name}
                        <div class='mapIcon'>
                            <a href="/" ><FaMapMarkerAlt color='#043540' /></a>
                            <div style={{ fontSize: '10px' }} >Map</div>
                        </div>
                    </div>
                </div>

                <div class='displaySubtitle'>
                    <div>{this.props.address}</div>
                    <div style={{ display: 'flex' }} >
                        <div class='displayAge'>
                            Age: {this.props.age}+
                        </div>
                        <div class='displayType' >
                            {this.props.type}
                        </div>
                    </div>
                    <Divider />
                </div>

                <li style={{ backgroundColor: '#04BF7B', listStyle: "none" }} >
                    <ul style={{ padding: '10px' }} >
                        <ListSubheader style={{ fontSize: '12px', backgroundColor: '#04BF7B' }} >{`Eligibility`}</ListSubheader>
                        {
                            this.props.eligibility &&
                            this.props.eligibility.map(eligibility => {
                                return (
                                    <ListItem style={{ padding: '0px 15px' }} >
                                        <div style={{ fontFamily: 'FiraSans', fontSize: '13px', color: 'white' }}>{eligibility.item}</div>
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                </li>

                <ul style={{ padding: '10px' }} >
                    <ListSubheader style={{ fontSize: '12px', backgroundColor: 'white' }} >{`Courses`}</ListSubheader>
                    {
                        this.props.courses &&
                        this.props.courses.map(course => {
                            return (
                                <ListItem button style={{ padding: '0px 15px' }} >
                                    <div style={{ display: 'flex', margin: '10px 0px', width: '100%' }} >
                                        <Link
                                            to={'class-details/'+this.props.id+'/'+course.id}
                                            style={{ display: 'flex' }}
                                        >
                                            <div>
                                                <img src={course.image} alt="" width='70px' height='70px' style={{ borderRadius: '10px' }} />
                                            </div>
                                            <div style={{ marginLeft: '10px', width: '100%' }}>
                                                <div style={{ color: '#043540', fontFamily: 'FiraSans', fontSize: '13px', maxWidth: '80%' }} >{course.title}</div>
                                                <div style={{ color: 'grey', fontSize: '11px' }}>&#8377; {course.price}</div>
                                                <Divider />
                                                <div style={{ fontSize: '8px', fontFamily: 'sans-serif' }} >
                                                    More Details <i class="fa fa-chevron-right" style={{ fontSize: '5px', marginTop: '10px' }}></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <div style={{ alignContent: 'center', marginLeft: 'auto', paddingLeft: '5px', right: '0', position: 'absolute' }} >
                                            <Chip
                                                size="small"
                                                icon={<AddRoundedIcon  ></AddRoundedIcon>}
                                                label="ADD"
                                                color="secondary"
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </ul>

                <ul style={{ padding: '0px', margin: "0px",backgroundColor: '#04BF7B' }}  >
                    <ListSubheader style={{ fontSize: '12px', backgroundColor: '#04BF7B' }} >{`About Faculty`}</ListSubheader>
                    {
                        this.props.qualifications &&
                        this.props.qualifications.map(qualifications => {
                            if (qualifications.header === true) {
                                return (
                                    <ListItem style={{ padding: '10px 15px' }} >
                                        <div style={{ fontFamily: 'FiraSans', fontSize: '13px', color: 'white' }}><b>{qualifications.item}</b></div>
                                    </ListItem>
                                )
                            }
                            else {
                                return (
                                    <ListItem style={{ padding: '10px 15px' }} >
                                        <div style={{ fontFamily: 'FiraSans', fontSize: '13px', color: 'white' }}>{qualifications.item}</div>
                                    </ListItem>
                                )
                            }
                        })
                    }
                </ul>

                <ul style={{ padding: '10px' }} >
                    <ListSubheader style={{ fontSize: '12px', backgroundColor: 'white' }} >{`Note From Teacher`}</ListSubheader>
                    {
                        this.props.note &&
                        this.props.note.map(note => {
                            return (
                                <ListItem style={{ padding: '10px 15px' }} >
                                    <div style={{ fontFamily: 'FiraSans', fontSize: '13px' }}>{note.item}</div>
                                </ListItem>
                            )
                        })
                    }
                </ul>
                <div style={{ width: '100%', textAlign: 'center', color: 'lightgrey', fontSize: '10px', marginBottom: '10px' }} >
                    Pidgin
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MobileClass
