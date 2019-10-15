import React from 'react';
import {Card} from 'react-bootstrap';


const FriendCard = (props) => {
    console.log(props)
    return (
        <Card className="cardCSS" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title> 📛 <u><b>Name:</b> {props.data.name}</u></Card.Title>
          <Card.Text>
            🔢 <b>Age:</b> {props.data.age}<br/>
            📧 <b>Email:</b> {props.data.email}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default FriendCard