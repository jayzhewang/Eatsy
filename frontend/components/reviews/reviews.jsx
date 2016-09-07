import React from 'react';
// import {withRouter} from 'react-router';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: 0
    };
    this.handleCreateReview = this.handleCreateReview.bind(this);
  }

  handleCreateReview(e){
    e.preventDefault();
    const review = Object.assign({}, this.state);
    review['user_id'] = this.props.currentUser.id;
    review['restaurant_id'] = this.props.parent.id;

    this.props.createReview(review);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

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
            <form className='restaurant-reviews-form' action="#">
              <div className="restaurant-reviews-form-input">
                <div className='restaurant-reviews-star-ratings'>

                </div>

                <div className="input">

                  <textarea className="form-textarea"
                            placeholder="Your reivew will help others learn about greate local restaurants."
                            value={this.state.body}
                            onChange={this.update('body')}></textarea>
                </div>
              </div>

              <div className="submit">
                <button type="submit" onClick={this.handleCreateReview}>Post Review</button>
              </div>

            </form>

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
