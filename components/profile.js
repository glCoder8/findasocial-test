import React from 'react'

const Profile = ({profile, isCenterProfile}) => (
  <div className={`profile-container ${isCenterProfile ? 'center-profile' : ''}`}>
    <div className="image-container">
      <div className="image-wrapper">
        <img src="/static/profile.jpeg" alt="Avatar" className="profile-avatar"/>
      </div>
      <img src="/static/crown.jpeg" alt="crown" className="profile-crown" />
    </div>
    <div className="card-container">
      <h1>{profile.name}</h1>
      <p>{profile.id}</p>
      <p>{profile.description}</p>
    </div>

    <style jsx>{`
      .profile-container {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
      }
      .center-profile {
        margin-top: 30px;
      }
      .image-container {
        display: flex;
        width: 100px;
        height: 100px;
        margin-bottom: -50px;
        z-index: 100;
      }
      .image-wrapper {
        display: flex;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
        align-items: center;
        justify-content: center;
      }
      .profile-avatar {
        height: 100%;
      }
      .profile-crown {
        position: absolute;
        background-color: white;
        margin-left: 70px;
        margin-top: 70px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }
      .card-container {
        background-color: white;
        border-radius: 20px;
        color: black;
        align-items: center;
        padding: 50px 20px 10px;
      }
      .card-container > h1,
      .card-container > p {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Profile
