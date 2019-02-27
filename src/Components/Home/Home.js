import React, { Component } from 'react';
import Carousil from '../SiteCarousel/Carousil';
import VehicleBrowser from '../VehicleBrowser/VehicleBrowser';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }
  render() {
    if(this.props.vehicledata){
    return (
      <div className="Home">
        <Carousil vehicledata={this.props.vehicledata}/>
        <VehicleBrowser vehicledata={this.props.vehicledata}/>
      </div>
    );
    }
    else{
        return null;
    }
  }
}

export default Home;