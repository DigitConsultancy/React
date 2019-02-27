import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './Components/TopNav/TopNav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={vehicledata:null}
}

  componentDidMount(){
    axios.get("http://localhost:3001/vehicles").then(
      res => {console.log(res.data); this.setState({vehicledata:res.data})}
    ).catch(err => console.log(err))
  }

  render() {
    if(this.state.vehicledata){
    return (
      <Router>
      <div className="App">
      {/* passing property */}
        <TopNav vehicledata={this.state.vehicledata}/>
        <Route exact path='/' render={(props)=><Home {...props} vehicledata={this.state.vehicledata}/>}/>
        <Footer/>
      </div>
      </Router>
    );
  }
  else{
    return <h1>Data lodaing</h1>;
    }
}
}
export default App;

/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */
