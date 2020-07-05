import axios from "axios";
import React, { Component } from 'react';



class Search extends Component {

  state = {
    searchText: "",
    restaurant: [],
  };

  handlePlaces = () => {
    axios.get(`/restaurants`).then( (response) => {
      const responseData = response.data;
      console.log(responseData.results);
      this.setState({
        searchText: '',
        restaurant: responseData.results,
      });
    });
  }
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <h1 className="appTitle">Search Results</h1>
          <input type="text" value={this.state.searchText} placeholder="Search" onChange={(event) => { this.setState({searchText: event.target.value })}}/>
          <button onClick={this.handlePlaces} >GO</button>
        </header>
        <br/>
        {this.state.restaurant.map((place) => 
          <div>
            <h1>{place.name}</h1>
            <h2>{place.formatted_address}</h2>
            <h3>{place.rating}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Search;