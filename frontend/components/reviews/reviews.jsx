import React from 'react';
// import {withRouter} from 'react-router';

class Reviews extends React.Component {

render() {
    const reviews = this.props.parent.reviews;

    if(reviews === undefined){
      return (<div>Loading...</div>);
    } else {

      const users = this.props.parent.users;
      if (users === undefined){
        return (<div>Loading...</div>);
      } else {
        return (
          <div>
            {
              reviews.map(review => {
                let userPhoto = "";
                for(let i = 0; i < users.length; i++){
                  if (users[i].id === review.user_id){
                    userPhoto = users[i].photo;
                    break;
                  }
                }

                return (
                  <div className='review'>
                    <div className='review-primary-attr'>
                      <img src={`${userPhoto}`} alt='user picture' height="200" width="200"/>
                      <div className='review-rating'>{review.rating}</div>
                      <div className='review-date'>{review.updated_at}</div>
                    </div>
                    <div className='review-secondary-attr'>
                      <div className='review-body'>{review.body}</div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        );
      }
    }
  }
}

export default Reviews;
