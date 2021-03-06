import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList.jsx';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: '',
      losses: ''
    }

    this.getFriends = this.getFriends.bind(this);
  }

  getFriends() {
    //Make axios GET request to loop over friendsList and populate
    //each friend with their pic
  }

  componentDidMount() {
    console.log('mounted')
  }



  render() {
    console.log('this is state', this.state)
    console.log('props:', this.props)
    return (
      <div className="profile">
        <div>
          <h1>Your Profile</h1>
        </div>

        <div className="profilepicture">
          <img className="profilepictureimg" src={this.props.picture} alt=""></img>
        </div>



        <div className="profiledata">
          <h2>{this.props.user}</h2><br/>
          <p>Wins: {this.state.wins} </p> <p> Losses: {this.state.losses} </p>


        </div>

        <div>
          {/* Write a function that gets friends objects by string */}
          <FriendsList friends={[{ username: 'jamesknippel', profilePicUrl: 'https://lh4.googleusercontent.com/-5lvUSWTxG1U/AAAAAAAAAAI/AAAAAAAAAAs/ay_voWD5Eog/photo.jpg'}, { username: 'mikedoyle007', profilePicUrl: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'}, { username: 'j', profilePicUrl: 'https://s.gravatar.com/avatar/1762c2acf8724ee326d2aa89642d3b2a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fj.png'},{ username: 'landmrkapp', profilePicUrl: 'https://lh6.googleusercontent.com/-PlFU3m5ej7I/AAAAAAAAAAI/AAAAAAAAAAc/3BdStSyUvVw/photo.jpg'}]}/>
        </div>
        <div >
          <Link to='/' ><button className="lobbybutton"> Back to Lobby </button></Link>
        </div>

      </div>
    )
  }
}

export default Profile;