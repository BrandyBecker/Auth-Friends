import React, {useEffect} from 'react';
import FriendCard from './FriendCard'
import {fetchData} from '../actions';
import {connect} from 'react-redux';
import Form from './Form'
import Loader from 'react-loader-spinner'

const FriendList = props => {
    useEffect(()=> {
        props.fetchData()
    }, [])
    if (props.isFetching){
        return (
    
            <div className="loaderCSS"> 
            <Loader
            type="ThreeDots"
            color="#00000"
            height={100}
            width={100}
            timeout={3000} 
            />
            " You've got a friend in me! 🤠" </div>
            
        )
    }
    console.log(props.friends)
    return (
        
       <>
        <Form/>
        <div className="cardBG">
            
            {props.error && <p>{props.error}</p>}
            {props.friends.map(data => (
                <FriendCard key={data.id} data={data}/>
            ))}
        </div></>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchData}
)(FriendList)