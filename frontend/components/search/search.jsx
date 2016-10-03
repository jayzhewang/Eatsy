import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: "",
      location: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.restaurants = this.props.restaurants;
  }

  handleSearch(e){
    e.preventDefault();
    this.props.queryRestaurants(this.state.category);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  render(){
    return(
      <div>
        <form className='search-field'>
          <input type='text'
            value={this.state.category}
            onChange={this.update('category')}
            placeholder="Category" />

          <button type="submit"
            onClick={this.handleSearch}>
            <span className='search'>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
