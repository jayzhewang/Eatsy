import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      location: ""
    };

    this.changed = false;
    this.handleSearch = this.handleSearch.bind(this);
    this.restaurants = this.props.restaurants;
  }

  handleSearch(e){
    e.preventDefault();
    this.props.queryRestaurants(this.state.name);
    this.changed = true;
  }

  _clearSearch(){
    this.props.queryRestaurants(this.state.name);
  }

  update(field){
    if(this.changed &&
       this.state.name === ""){
      this._clearSearch();
      this.changed = false;
    } else {
      return e => { this.setState({[field]: e.currentTarget.value }); };
    }
  }

  render(){
    return(
      <div>
        <form className='search-field'>
          <input type='text'
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="Name" />

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
