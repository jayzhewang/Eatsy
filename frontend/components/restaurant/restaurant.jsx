import React from 'react';
import STARS from '../star_ratings';
import ReviewsContainer from '../reviews/reviews_container';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: 0
    };
    this.handleCreateReview = this.handleCreateReview.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleRestaurant(this.props.params.id);
  }

  handleCreateReview(e){
    e.preventDefault();
    const review = Object.assign({}, this.state);

    review['user_id'] = this.props.currentUser.id;
    review['restaurant_id'] = this.props.params.id;

    this.props.createReview(review);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  render() {
    if (this.props.restaurant === undefined){
      return <div>Loading...</div>;
    } else {
      const restaurant = this.props.restaurant;
      const photos = restaurant.photos.split(" ");
      const primary = photos[0];
      const star = <span className={`rating-static ${STARS[restaurant.rating]}`}></span>;
      return (
        <div className="restaurant-content">

          <header className="restaurant-info">
            <div className="restaurant-info-left-side">
              <h1>{restaurant.name}</h1>
              <div>{star}</div>
              <div>{restaurant.price_range}</div>
            </div>
            <div className="restaurant-info-right-side">
              <button type="button">Write a Review</button>
              <button type="button">Add Photo</button>
            </div>
          </header>

          <header className="restaurant-pictures">
            <img src={`${primary}`} alt='front picture' height="200" width="200"/>
          </header>

          <content className="restaurant-body">
            <div className="restaurant-reviews">

            </div>

            <div className="restaurant-right-sidebar">

            </div>
          </content>

          <content className='restaurant-reviews-body'>
            <div className='restaurant-reviews-left-side'>

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

              <ReviewsContainer restaurant={restaurant} />
            </div>

            <div className='restaurant-reviews-right-side'>
              <div>More Restaurant Info</div>
            </div>
          </content>

        </div>
      );
    }
  }
}

export default Restaurant;
