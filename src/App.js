import React, { Component } from 'react';

import Header from './components/header.component';
import Footer from './components/footer.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
      return (
       
          <div className="App">
            <Header> 
            </Header> 

            <Footer>
            </Footer>
            
          </div>
 
      );
    }
}

export default App;
