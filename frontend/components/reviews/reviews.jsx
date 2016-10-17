import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
// import {withRouter} from 'react-router';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: 4,
      showForm: this.props.showForm,
      reviews: this.props.parent.reviews
    };

    this.reverseCount = 0;
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this._formSwitch = this._formSwitch.bind(this);
  }

  componentDidUpdate(){
    if(this.props.parent.reviews !== undefined){
      if(this.state.reviews === undefined ||
         this.props.parent.reviews.length > this.state.reviews.length){
           this.setState({reviews: this.props.parent.reviews});
      }
    }

    if(this.props.showForm &&
       !this.state.showForm){
      this.setState({showForm: true});
    }
  }

  handleCreateReview(e){
    e.preventDefault();
    const review = {body: this.state.body, rating: this.state.rating};
    review['user_id'] = this.props.currentUser.id;
    review['restaurant_id'] = this.props.parent.id;
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
                                   className='star-symbol'>✪</span>}
              />
            </div>

            <div className="input">
              <textarea className="restaurant-reviews-form-textarea"
                        placeholder="Your review will help others
                                    learn about great local restaurants."
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
      return "";
    } else {
      return (
        <div>
            <div>You must be logged in to submit a Review</div>
          <br/>
        </div>
      );
    }
  }

  _formSwitch(){
    this.setState({showForm: true});
  }

  padDate(d) {
    return (d < 10) ? '0' + d : d;
  }

  _dateRender(date){
    let dateString = "";
    if(date === undefined){
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

  render() {
    let reviews = this.state.reviews;
    if(this.reverseCount === 0 && reviews !== undefined){
      reviews = reviews.reverse();
    }

    if(reviews === undefined){
      return (
        <div className='loader'></div>
      );
    } else {
      this.reverseCount += 1;
      const users = this.props.parent.users;
      if (users === undefined){
        return (
          <div className='loader'></div>
        );
      } else {
        return (
          <div>
            <div className='restaurant-reviews-form-border'>
              {this._form()}
            <h1>Recommanded Reviews</h1>
            {
              reviews.map(review => {
                let userPhoto = "";
                let userName = "";
                let userLocation = "";
                for(let i = 0; i < users.length; i++){
                  if (users[i].id === review.user_id){
                    userPhoto = users[i].photo;
                    userName = users[i].username;
                    userLocation = users[i].location;
                    break;
                  }
                }

                return (
                  <div className='review group' key={review.id}>
                    <div className='review-primary-attr group'>
                      <div className='review-primary-attr-left'>
                        <img src={`${userPhoto}`}
                             alt='user picture'
                             height="75"
                             width="75"/>
                      </div>
                      <div className='review-primary-attr-right'>
                        <h3>
                          {userName}
                        </h3>
                        <h4>
                          {userLocation}
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
