import React from 'react'
import './categories.css'
import {db} from '../firebase'
import {FaChevronCircleRight } from 'react-icons/fa';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

class Categories extends React.Component{

    state = {
        images:null
      }

      componentDidMount(){
        const data = db.collection('ImagesClassesTrending');    
         data.get()
          .then(snapshot=>{
            const images = []
            snapshot.forEach(doc=>{
              const data = doc.data()
              images.push(data)
            })
            this.setState({images:images})
          })
      }
    

    render(){
        while(this.state.images == null){
            return <div>
               
        </div> 
        }
      
        return(
            <Router>
            <div className='para' > 
                <div style={{boxShadow:'0px 0px 20px #fd7c98',width:'500px'}}>
                    <div style={{width:"500px"}} >
                    <GridList cellHeight={110} style={{padding:'10px',backgroundColor:'transparent'}} cols={3}>      
                        {   this.state.images&&
                            this.state.images.map((tile) => (
                            <GridListTile key={tile.type} cols={tile.cols || 1}>
                                <Link to={{pathname:'/search',type:tile.type}} > 
                                <div style={{padding:'0px'}} >
                                <img src={tile.image} alt={tile.type}  width='100%' />
                                </div>
                                <GridListTileBar
                                title={tile.type}
                                actionIcon={
                                    <IconButton>
                                        <FaChevronCircleRight color='white' size='10' />
                                    </IconButton>
                                }
                                />
                                </Link>
                            </GridListTile>
                        ))}
                    </GridList>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}
export default Categories;

