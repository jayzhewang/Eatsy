import React from 'react';
import { hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: 4,
      showForm: false,
      reviews: this.props.parent.reviews
    };

    this.reverseCount = 0;
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this._formSwitch = this._formSwitch.bind(this);
  }

  handleClick(id){
    // hashHistory.push('users/1');
  }

  componentDidUpdate(){
    let parentReviews = this.props.parent.reviews;
    let stateReviews = this.state.reviews;
    if(parentReviews){
      if(!stateReviews || parentReviews.length > stateReviews.length){
        this.setState({reviews: parentReviews});
      }
    }
  }

  handleCreateReview(e){
    e.preventDefault();
    const review = {
      body: this.state.body,
      rating: this.state.rating,
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.parent.id
    };
    this.props.createReview(review);
    this.setState({body: "",
                   rating: 4,
                   showForm: false});
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  _formSwitch(){
    this.setState({showForm: true});
  }

  _form(){
    if(this.props.currentUser && this.state.showForm){
      return (
        <form className='restaurant-reviews-form' action="#">
          <div className="restaurant-reviews-form-input">
            <div className='restaurant-reviews-star-ratings'>
              <StarRatingComponent name='starRate'
                                   starCount={5}
                                   value={this.state.rating}
                                   onStarClick={this.onStarClick.bind(this)}
                                   starColor={'#e5050b'}
                                   emptyStarColor={'#acacac'}
                                   renderStarIcon={()=><span
                                   className='star-symbol'>✪</span>}/>
            </div>
            <div className="input">
              <textarea className="restaurant-reviews-form-textarea"
                        placeholder="Your review will help others learn about great local restaurants."
                        value={this.state.body}
                        onChange={this.update('body')}></textarea>
            </div>
          </div>

          <div className="restaurant-reviews-submit">
            <span className='star-symbol'>✪</span>
            <button type="submit"
                    onClick={this.handleCreateReview}>
                    <span className='post'>Post Review</span>
            </button>
          </div>

        </form>
      );
    } else if(this.props.currentUser && !this.state.showForm){
      return (
        <div className='restaurant-reviews-form'></div>
      );
    } else {
      return (
        <div>
            <div>You must be logged in to submit a Review</div>
          <br/>
        </div>
      );
    }
  }

  padDate(d) {
    return (d < 10) ? '0' + d : d;
  }

  _dateRender(date){
    let dateString = "";
    if(!date){
      let d = new Date();
      return [
                d.getFullYear(),
                this.padDate(d.getMonth()+1),
                this.padDate(d.getDate())
              ].join('/');
    } else {
      date.slice(0, 10).split('-').forEach(d=>{
        dateString += d + "/";
      });
      return dateString.slice(0, dateString.length - 1);
    }
  }

  _showReviewButton(){
    if(this.props.currentUser){
      return (
        <div onClick={this._formSwitch}
             className='restaurant-reviews-create'>
          <span>Write A Review</span>
        </div>
      );
    }
  }

  render() {
    let reviews = this.state.reviews;
    if(this.reverseCount === 0 && reviews){
      reviews = reviews.reverse();
    }
    if(!reviews){
      return (
        <div className='loader'></div>
      );
    } else {
      this.reverseCount += 1;
      const users = this.props.parent.users;
      if (!users){
        return (
          <div className='loader'></div>
        );
      } else {
        return (
          <div>
            <div className='restaurant-reviews-form-border'>
            <div className='review-seperator'>
              {this._form()}
              <div className='reviews-write-button'>
                {this._showReviewButton()}
              </div>
            </div>

            <h1>Recommanded Reviews</h1>
            { reviews.map(review => {
                let user = "";
                for(let i = 0; i < users.length; i++){
                  if (users[i].id === review.user_id){
                    user = users[i];
                    break;
                  }
                }
                if(user === ""){
                  user = this.props.currentUser;
                }

                return (
                  <div className='review group' key={review.id}>
                    <div className='review-primary-attr group'>
                      <div className='review-primary-attr-left'>
                        <img src={`${user.photo}`}
                             alt='user picture'
                             height="75"
                             width="75"
                             onClick={()=>this.handleClick(user.id)}/>
                      </div>
                      <div className='review-primary-attr-right'>
                        <h3 onClick={()=>this.handleClick(user.id)}>
                          {user.username}
                        </h3>
                        <h4>
                          {user.location}
                        </h4>
                      </div>
                    </div>

                    <div className='review-secondary-attr'>
                      <div className='review-rating'>
                        <StarRatingComponent name='starRateStatic'
                                             starCount={5}
                                             value={review.rating}
                                             starColor={'#e5050b'}
                                             emptyStarColor={'#acacac'}
                                             editing={false}
                                             renderStarIcon={()=>
                                               <span className='star-symbol'>
                                                 ✪
                                               </span>} />
                      </div>
                      <div className='review-date'>
                        {this._dateRender(review.updated_at)}
                      </div>
                      <div className='review-body'>
                        {review.body}
                      </div>
                    </div>
                  </div>
                );
              })
             }
           </div>
          </div>
        );
      }
    }
  }
}

export default Reviews;
