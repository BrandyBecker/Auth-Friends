import React from 'react';
import {Card} from 'react-bootstrap';


const FriendCard = (props) => {
    return (
        <Card className="cardCSS" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> 📛 Name: {props.data.name}</Card.Title>
          <Card.Text>
            🔢 Age: {props.data.age}<br/>
            📧 Email: {props.data.email}<br/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default FriendCard