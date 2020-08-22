import React from 'react'
import './search.css'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import { db } from '../firebase'
import SearchView from './mSearch'
import { Button, Divider } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { FaSearch } from 'react-icons/fa'
import MyAppBar from '../Components/AppBar'
import getCollection from '../Database/getCollection'
import sortDistance from '../Logic/sortDistance'
import getLocation from '../Logic/getLocation'

var filteredClass = null
var age = null
var fees = null
var type = null

export default class Search extends React.Component {
    state = {
        type: null,
        classes: null,
        minPrice: 10000000,
        minAge: 100,
        features: null,
        search: null,
        top_picks: null
    }

    componentDidMount() {

        this.clearFilter()

        const data = db.collection('Classes');
        data.get()
            .then(snapshot => {
                const classes = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    classes.push(data)
                })

                getLocation().then(result => {
                    var data = sortDistance(classes, result.lat, result.lon)

                    this.setState({ classes: data })

                    if (this.props.match.params.id !== "0") {
                        this.setState({ search: this.props.match.params.id })
                    }
                })

            })
        getCollection("ImagesClassesTopPicks").then(snap => {
            this.setState({ top_picks: snap })
        })
    }

    clearFilter = () => {
        this.setState({ minPrice: 10000000 })
        this.setState({ minAge: 100 })
        this.setState({ type: null })

    }

    setAge = (age) => {
        this.setState({ minAge: age })
    }

    setPrice = (price) => {
        this.setState({ minPrice: price })
    }

    render() {
        age = null
        fees = null
        type = null
        filteredClass = this.state.classes

        if (this.state.search !== null) {
            filteredClass = this.state.classes.filter(
                item =>
                    item.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
            )
        }

        if (this.state.minAge !== 100) {
            age = <Chip
                label={this.state.minAge + "+ years"}
                color="secondary"
                icon={<DoneIcon />}
                size="small"
                variant="outlined"
                style={{ marginTop: '-5px', marginBottom: '5px' }}
                onDelete={() => { this.setState({ minAge: 100 }) }}
            />
        }

        if (this.state.minPrice !== 10000000) {
            fees = <Chip
                label={this.state.minPrice}
                color="secondary"
                icon={<DoneIcon />}
                size="small"
                variant="outlined"
                style={{ marginTop: '-5px', marginBottom: '5px' }}
                onDelete={() => { this.setState({ minPrice: 10000000 }) }}
            />
        }

        if (this.state.type !== null) {
            type = <Chip
                label={this.state.type}
                color="secondary"
                icon={<DoneIcon />}
                size="small"
                variant="outlined"
                style={{ marginTop: '-5px', marginBottom: '5px' }}
                onDelete={() => { this.setState({ type: null }) }}
            />
        }

        if(this.state.minAge<100 || this.state.minPrice<10000000 || this.state.type!==null ){
            filteredClass = this.state.classes.filter(
                item =>
                    parseInt(item.age) > this.state.minAge ||
                    parseInt(item.fees) > this.state.minPrice
            )
        }

        if (this.state.type !== null) {
            filteredClass = this.state.classes.filter(
                item =>
                    item.type.toLowerCase().indexOf(this.state.type.toLowerCase()) !== -1 ||
                    item.name.toLowerCase().indexOf(this.state.type.toLowerCase()) !== -1 
            )
        }

        return (
            <div style={{ backgroundColor: '#f3f3f3' }} >
                <div className="desktop">
                    <MyAppBar />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', paddingBottom: '100px', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: "flex", margin: "20px", marginTop: "50px", border: "solid 1px #e2e2e2" }} >
                            <input className='search-search' placeholder='Search classes, tuition, courses...' onChange={(e) => { this.setState({ search: e.target.value }) }} >
                            </input>
                            <div className='search-icon' style={{ color: 'white', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: "18px" }} >
                                <FaSearch />
                            </div>
                        </div>
                        <div className="body" >
                            <div className="filter" >
                                <h4>Filters</h4>

                                <div className="filter-list-head" >
                                    Age
                            </div>
                                {age}
                                <div className='filter-list-item' onClick={() => { this.setAge(5) }} >
                                    Below 5 years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(10) }} >
                                    Below 10 years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(13) }} >
                                    Below 13 years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(16) }} >
                                    Below 16 years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(20) }} >
                                    Below 20 years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(100) }} >
                                    Any
                            </div>


                                <div className="filter-list-head" >
                                    Price
                            </div>
                                {fees}
                                <div className='filter-list-item' onClick={() => { this.setPrice(1000) }} >
                                    From &#8377;1000
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(2000) }} >
                                    From &#8377;2000
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(3000) }} >
                                    From &#8377;3000
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(4000) }} >
                                    From &#8377;4000
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(5000) }} >
                                    From &#8377;5000
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(6000) }} >
                                    From &#8377;6000
                            </div>
                                <div className="filter-list-item" onClick={() => { this.setPrice(7000) }} >
                                    From &#8377;7000
                            </div>
                                <div className="filter-list-item" onClick={() => { this.setPrice(10000000) }} >
                                    Any
                            </div>

                                <div className="filter-list-head" >
                                    Type
                            </div>
                                {type}

                                <div className="sub-title-list" >
                                    Hobby
                            </div>
                                <Divider />
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"music" }) }} >
                                    Music
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"cooking"}) }} >
                                    Cooking
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"dance" }) }} >
                                    Dance
                            </div>

                                <div className="sub-title-list" >
                                    Science
                            </div>
                                <Divider />
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"science"}) }} >
                                    Science
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"maths" }) }} >
                                    Maths
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"physics"}) }} >
                                    Physics
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"chemistry"}) }} >
                                    Chemistry
                            </div>

                                <div className="sub-title-list" >
                                    Courses
                            </div>
                                <Divider />
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"painting"}) }} >
                                    Painting
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"sketching" }) }} >
                                    Sketching
                            </div>

                                <div className="sub-title-list" >
                                    Language
                            </div>
                                <Divider />
                                <div className='filter-list-item' onClick={() => { this.setState({ type:"japenese" }) }} >
                                    Japenese
                            </div>

                                <Button disableElevation variant="contained" color="secondary" style={{ fontSize: '10px', marginTop: '20px' }} onClick={this.clearFilter} >
                                    Clear Filters
                            </Button>

                            </div>

                            <div>
                                <div className="search-list" >
                                    {
                                        filteredClass &&
                                        filteredClass.map(item => {
                                            return (
                                                <a href={'/class/' + item.id} >
                                                    <div>
                                                        <div className="card-search" >
                                                            <div style={{ display: 'flex' }} >
                                                                <div style={{ overflowY: 'hidden', overflowX: 'hidden', width: '150px', maxHeight: '200px' }} >
                                                                    {
                                                                        item.i1 ? (
                                                                            <img alt="s" src={item.i1} width="150px" />
                                                                        ) : (
                                                                                <img alt="s" src={item.i2} width="150px" />
                                                                            )
                                                                    }
                                                                </div>
                                                                <div className="details" >
                                                                    <div>
                                                                        <div style={{ color: "#043345", fontSize: "25px", margin: "10px 0px", fontWeight: "700" }} >
                                                                            {item.name}
                                                                        </div>
                                                                        <div className="search-type" >
                                                                            {item.type} | Age: {item.age}+
                                                                        </div>
                                                                        <div style={{ maxWidth: '300px', color: "grey", fontSize: "12px", margin: "10px 0px" }} className="search-type" >
                                                                            {item.address}
                                                                        </div>
                                                                        <div style={{ width: "100%", borderTop: "1px dashed grey", margin: "10px 0px" }} ></div>
                                                                        {
                                                                            item.individual ? (
                                                                                <div style={{ width: "100%", padding: "2px", display: "flex" }} >
                                                                                    <div style={{ width: "150px", textTransform: "uppercase", color: "grey", fontSize: "12px" }} >
                                                                                        Individual:
                                                                                    </div>
                                                                                    <div style={{ fontSize: "12px" }} >
                                                                                        Individual Classes Available
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                    <div></div>
                                                                                )
                                                                        }
                                                                        {
                                                                            item.women ? (
                                                                                <div style={{ width: "100%", padding: "2px", display: "flex" }} >
                                                                                    <div style={{ width: "150px", textTransform: "uppercase", color: "grey", fontSize: "12px" }} >
                                                                                        Only For Women:
                                                                                    </div>
                                                                                    <div style={{ fontSize: "12px" }}>
                                                                                        Classes Are Only For Women
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                    <div></div>
                                                                                )
                                                                        }
                                                                        {
                                                                            item.online ? (
                                                                                <div style={{ width: "100%", padding: "2px", display: "flex" }} >
                                                                                    <div style={{ width: "150px", textTransform: "uppercase", color: "grey", fontSize: "12px" }} >
                                                                                        Online classes:
                                                                                    </div>
                                                                                    <div style={{ fontSize: "12px" }}>
                                                                                        Online Classes Available
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                    <div></div>
                                                                                )
                                                                        }
                                                                        {
                                                                            item.fees ? (
                                                                                <div style={{ width: "100%", padding: "2px", display: "flex" }} >
                                                                                    <div style={{ width: "150px", textTransform: "uppercase", color: "grey", fontSize: "12px" }} >
                                                                                        Starting Fees:
                                                                                    </div>
                                                                                    <div style={{ fontSize: "12px" }}>
                                                                                        &#8377;{item.fees}
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                    <div></div>
                                                                                )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/*<div className="exclusive-wrap" >
                                                                <div>
                                                                    {
                                                                        item.exclusive ? (
                                                                            <div><img alt="" src={exc} height="40px" style={{ marginLeft: "-12px", marginTop: "10px" }} /></div>
                                                                        ) : item.trending ? (
                                                                            <div><img alt="" src={trending} height="40px" style={{ marginLeft: "-12px", marginTop: "10px" }} /></div>
                                                                        ) : (
                                                                                    <div></div>
                                                                                )
                                                                    }
                                                                </div>
                                                                </div>*/}
                                                        </div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div style={{ width: "250px", minHeight: "200px" }} >
                                <div style={{ backgroundColor: 'white', padding: "10px" }} >
                                    <h2>Top Picks</h2>
                                </div>
                                {
                                    this.state.top_picks &&
                                    this.state.top_picks.map(item => {
                                        return (
                                            <a href={'/class/' + item.id} >
                                                <div style={{ display: "flex", backgroundColor: "white" }} >
                                                    <div>
                                                        <img src={item.image} height="100px" alt={item.name} ></img>
                                                    </div>
                                                    <div style={{ padding: "10px 5px" }} >
                                                        <div>
                                                            <b>{item.name}</b>
                                                        </div>
                                                        <div>
                                                            {item.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mobile" >
                    <MappBar />
                    {
                        this.state.classes === null ? (
                            <div>Please Wait..</div>
                        ) : (
                            <SearchView id={this.props.match.params.id} classes={this.state.classes} />
                        )
                    }
                </div>
                <Footer />
            </div >
        )
    }
}