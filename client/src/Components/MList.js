import React from 'react'
import { Link } from 'react-router-dom'
import { FaMap } from 'react-icons/fa'
import { db } from '../firebase'
import ButtonBase from '@material-ui/core/ButtonBase/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { FaDownload, } from 'react-icons/fa'
import './MList.css'
import Box from '@material-ui/core/Box';


class MyListItem extends React.Component {
    state = {
        item: null,
    }

    componentDidMount() {
        const data = db.collection('Classes');
        data.get()
            .then(snapshot => {
                const len = snapshot.size
                this.setState({ length: len })
                const item = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    item.push(data)
                })
                this.setState({ item: item })
            })
    }

    render() {
        if (this.state.item === null) {
            return (
                <div>
                    <div style={{ backgroundColor: '#E6E6E6' }}>
                        <div class='number'><FaDownload size='12' style={{ marginRight: '5px' }} /> Please Wait...</div>
                        <div style={{ padding: '5px', maxWidth: '100%' }} >
                            <div style={{ borderRadius: '10px', backgroundColor: 'white', padding: '20px' }} >
                                <Skeleton variant="rect" width="100%" height={200} />
                                <Typography variant="h3">
                                    <Skeleton />
                                </Typography>
                                <Typography variant="h5">
                                    <Skeleton />
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {
                    this.state.item &&
                    this.state.item.map(item => {
                        return (
                            <ButtonBase style={{ textAlign: 'left', maxWidth: '100%', width: '100%', padding: '0px 5px' }}>
                                <div class='item'>
                                    <Box boxShadow={0} style={{ paddingBottom: '10px', borderRadius: '5px' }} >
                                        <Link to={{
                                            pathname: '/class/' + item.id
                                        }} >
                                            <div class='showImage'>
                                                {this.state.i1 ? (
                                                    <div class='alternateImg' ><img alt="s" src={item.i1} height='200px' style={{ marginRight: '2px' }}></img></div>
                                                ) : (
                                                        <div><Skeleton variant="rect" width="100%" height={200} /></div>
                                                    )}
                                                <img alt="s" src={item.i2} height='200px' style={{ marginRight: '2px' }}></img>
                                                <img alt="s" src={item.i3} height='200px' style={{ marginRight: '2px' }}></img>
                                            </div>

                                            <div style={{ display: 'flex', position: 'absolute', zIndex: '50' }} >
                                                <div class='age'>
                                                    Age: {item.age}+
                                                </div>
                                                <div class='newType' >
                                                    {item.type}
                                                </div>
                                            </div>
                                        </Link>
                                        <div class='container'>

                                            <Link to={{
                                                pathname: '/class/'+item.id,
                                            }} >
                                                <div class='name'>{item.name}</div>
                                            </Link>

                                            <div class='map'>
                                                <div>
                                                    <div><a href={item.location}><FaMap size='15' color='#04BFBF' /></a></div>
                                                    <div>Map</div>
                                                </div>
                                            </div>

                                        </div>

                                        <Link to={{
                                            pathname: '/class/'+item.id,
                                        }} >
                                            <div class='type'>
                                                {item.adress}
                                            </div>
                                            <hr color='#E6E6E6' style={{ margin: '5px 0px' }} ></hr>
                                            <div class='fees'>
                                                <div >Starting Fees &#8377;{item.fees}</div>
                                            </div>
                                        </Link>
                                    </Box>
                                </div>
                            </ButtonBase>
                        )
                    })
                }
            </div>
        )
    }
}
export default MyListItem;