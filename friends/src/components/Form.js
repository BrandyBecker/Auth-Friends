import React, {useState} from "react"
import {connect} from "react-redux"
import {addFriend} from "../actions"
import '../App.css'

const Form = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleSubmit = (e) => {
        const friend = {
            id: Date.now(), 
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email
        }
        console.log(newFriend)
        props.addFriend(friend)
        
    }

    const handleChanges = (e) => {
        
        let name = e.target.name;
        setNewFriend({ ...newFriend, [name] : e.target.value})
    }

    return (
        <div className="formCSS">
             
            <form>
                <input className="inputCSS" name="name" type="text" placeholder="Friend's Name" onChange={handleChanges}></input>
                <input className="inputCSS" name="age" type="text" placeholder="Friend's Age" onChange={handleChanges}></input>
                <input className="inputCSS" name="email" type="email" placeholder="Friend's Email" onChange={handleChanges}></input>
                <button className="buttonCSS" type="submit" onClick={handleSubmit}>Submit Your Friend !</button>
            </form>
        </div>
    )
}

export default connect(null, {addFriend})(Form)