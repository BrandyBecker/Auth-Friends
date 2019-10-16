import React from 'react';
import {Card} from 'react-bootstrap';
import {deleteFriend} from '../actions';
import {connect} from 'react-redux'


const FriendCard = (props) => {

  const handleDelete = (id) => {
    props.deleteFriend(id)
  }

    return (
        <Card className="cardCSS" style={{ width: '25rem' }}>
        <Card.Body>
          <button className="deleteBtn" onClick={() => handleDelete(props.data.id)}>❌</button>
          <Card.Title> 📛 <u><b>Name:</b> {props.data.name}</u></Card.Title>
          <Card.Text>
            🔢 <b>Age:</b> {props.data.age}<br/>
            📧 <b>Email:</b> {props.data.email}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default connect(null, { deleteFriend })(FriendCard)