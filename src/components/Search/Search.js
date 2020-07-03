import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

  state = {
    searchText: "",
    restaurant: [],
  };

  getRestaurants = () => {
    axios({
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/input=${this.state.searchText}?key=AIzaSyC_To6ERTsTVQVom9Bb53-wxH6e3VosCFs?inputtype=textquery`,
    })
      .then((response) => {
        this.setState({
          restaurant: {
            name: response.data.name,
            address: response.data.formatted_address,
            rating: response.data.rating,
          },
        });
        console.log("Yay! We got the restaurants.");
        console.log(response);
      })
      .catch((error) => {
        console.log("Error in grabbing restaurants: ", error);
      });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchText} placeholder="Search" onChange={(event) => { this.setState({searchText: event.target.value })}}/>
        <button onClick={this.getRestaurants}>GO</button>
          {this.state.restaurant?.map(place => 
          <div>
            <h1>{place.name}</h1>
            <h3>{place.address}</h3>
            <h4>{place.rating}</h4>
          </div>
          )}
      </div>
    );
  }
}

export default Search;