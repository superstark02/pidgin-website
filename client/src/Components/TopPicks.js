import React from 'react'
import { db } from '../firebase'
import './topPicks.css'
import { Link } from 'react-router-dom'

class TopPicks extends React.Component {

  state = {
    images: null
  }

  componentDidMount() {
    const data = db.collection('ImagesClassesTopPicks');
    data.get()
      .then(snapshot => {
        const images = []
        snapshot.forEach(doc => {
          const data = doc.data()
          images.push(data)
        })
        this.setState({ images: images })
      })
  }


  render() {
    return (
      <React.Fragment>
        <div className="wrap" style={{ flexDirection: "column" }} >
          <h1>Top Picks</h1>
          <div className="home-container" style={{ height: 'auto', marginBottom: '50px', marginTop: "50px",overFLowX:'scroll' }} >
            {
              this.state.images &&
              this.state.images.map(item => {
                return (
                  <Link to={'/class/' + item.id} >
                    <div className="card-search" >
                      <div style={{ overflowY: 'hidden', overflowX: 'hidden', width: '150px', maxHeight: '200px' }} >
                        <img alt="s" src={item.image} width="150px" />
                      </div>
                      <div className="details" >
                        <div>
                          <h4 style={{ marginBottom: '0px' }} >{item.name}</h4>
                          <div className="search-type" >
                            {item.type} | Age: {item.age}+
                      </div>
                        </div>

                        <div className="search-fees" >
                          Starting fees: {item.fees}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default TopPicks;

