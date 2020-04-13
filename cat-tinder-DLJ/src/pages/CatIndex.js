import React, { Component } from 'react'
import { ListGroup, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <ListGroup>
      <ListGroupItemHeading>Single Cats Club: </ListGroupItemHeading>
      </ListGroup>
      { this.props.cats.map((cat, index) => {
  return(
    <ListGroup key={ index }>
      <h4>{ cat.name }</h4>
      {cat.avatar_url &&
        <div style={{width: '200px'}}>
          <img src={cat.avatar_url} className="img-thumbnail img-fluid" />
        </div>
      }
      <br />
      <small>{ cat.age } - { cat.enjoys }</small>
      <Link to={`/cat_edit/${cat.id}`} >Edit</Link>
      <br/>
    </ListGroup>
    )
  })}
      </React.Fragment>
    )
  }
}

export default CatIndex
