import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="Footer">
        <footer >
            <a href="/schedule-test-flight">Schedule-test-flight. No License required</a>
        </footer>
      </div>
    );
  }
}

export default Footer;