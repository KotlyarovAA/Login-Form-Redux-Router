import React from 'react'
import {Link} from "react-router-dom"
import './Profile.css';
import {useSelector} from "react-redux"

const Profile = () => {

    const userLogin = useSelector(state => state.userData.login)
    return (
        <div className="profile">
            <h1>Welcome {userLogin}</h1>
            <Link to="/">Go Backs</Link>
        </div>
    )
}

export default Profile
