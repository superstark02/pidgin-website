import React from 'react'
import { db } from '../firebase'
import './List.css'

export default class MyList extends React.Component {

    state = {
        item: null,
        length: 0,
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
        return (
            <div style={{width:"1200px"}} >
                <div className='ribbon' >
                    Found {this.state.length} Pidgin classes around you.
                </div>
                <div style={{ display: 'flex', maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'space-around' }} >
                    {
                        this.state.item &&
                        this.state.item.map(item => {
                            return (
                                <a href={"/class/"+item.id} style={{color:"inherit"}} >
                                <div className='items' >
                                    <div style={{ overflow:"hidden", width: '100%', maxHeight: '200px' }} >
                                        {
                                            item.i1 ? (
                                                <img alt="s" src={item.i1} width="100%" />
                                            ) : (
                                                    <img alt="s" src={item.i2} width="100%" />
                                                )
                                        }
                                    </div>

                                    <div style={{ textAlign: 'left' }} >
                                            <div className='heading' >{item.name}</div>
                                            <div style={{ fontSize: '13px', lineHeight: 'normal', margin: '15px 0px', color: 'grey' }} >{item.address}</div>
                                        <div className='fees' >Staring Fees: &#8377;{item.fees}</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', border: 'solid 1px grey', padding: '10px', marginTop: '15px' }} >
                                        <div className='detail' >{item.type}</div>
                                        <div className='detail' >Age: {item.age}+</div>
                                    </div>
                                </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}