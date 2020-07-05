// import {
//   googleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
//   GoogleMap,
// } from "@react-google-maps/api";
import axios from "axios";
import React, { Component } from 'react';
// require("dotenv").config();



class Search extends Component {

  state = {
    searchText: "",
    restaurant: [],
  };

  handlePlaces = () => {
    axios.get(`/`).then( (response) => {
      const responseData = response.data;
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

//   getRestaurants = () => {
//     axios({
//       method: "GET",
//       url: `https://cors-anywhere.maps.googleapis.com/maps/api/place/details/json?placeid=ChIJKSp50NI0K4gR6C6L3yYqpYY&fields=name&key=key=AIzaSyC_To6ERTsTVQVom9Bb53-wxH6e3VosCFs`,
//       // `https://cors-anywhere.maps.googleapis.com/maps/api/place/findplacefromtext/input=${this.state.searchText}?key=AIzaSyC_To6ERTsTVQVom9Bb53-wxH6e3VosCFs?inputtype=textquery`,
//     })
//       .then((response) => {
//         this.setState({
//           searchText: "",
//           restaurant: {
//             name: response.data.name,
//             address: response.data.formatted_address,
//             rating: response.data.rating,
//           },
//         });
//         console.log("Yay! We got the restaurants.");
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log("Error in grabbing restaurants: ", error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" value={this.state.searchText} placeholder="Search" onChange={(event) => { this.setState({searchText: event.target.value })}}/>
//         <button onClick={this.getRestaurants}>GO</button>
//           {this.state.restaurant?.map(place => 
//           <div>
//             <h1>{place.name}</h1>
//             <h3>{place.address}</h3>
//             <h4>{place.rating}</h4>
//           </div>
//           )}
//       </div>
//     );
//   }
// }

export default Search;