import React from 'react';
import STARS from '../star_ratings';
import ReviewsContainer from '../reviews/reviews_container';

class Restaurant extends React.Component {
  componentDidMount(){
    this.props.requestSingleUser(this.props.params.id);
  }
  render() {

    if (this.props.user === undefined){
      return <div>Loading...</div>;
    } else {
      const user = this.props.user;
      // const photos = restaurant.photos.split(" ");
      // const primary = photos[0];
      // const star = <span className={`rating-static ${STARS[restaurant.rating]}`}></span>;
      return (
        <div className="user-content">

          <header className="user-info">
            <div className="user-info-left-side">
              <img src={`${user.picture}`} alt="profile picture" height='100' width='100'/>
            </div>
            <div className="user-info-right-side">
              <h1>{user.username}</h1>
              <button type="button">{user.location}</button>
              <button type="button">Reviews: {user.reviews.length}</button>
            </div>
          </header>

          <content className="user-body">
            <div className='user-body-left-side'>
              <div className="user-reviews">
                <ReviewsContainer user={user}/>
              </div>
            </div>

            <div className="user-body-right-side">
              <p>User Info</p>
            </div>
          </content>

          <content className='user-reviews'>
            <ReviewsContainer user={user} />
          </content>

        </div>
      );
    }
  }
}

export default Restaurant;