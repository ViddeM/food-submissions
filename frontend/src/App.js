import React, { Component } from 'react';
import logo from './logo.svg';
import SubmittedList from './components/SubmittedList';
import './App.css';
import IsSubmitted from './components/IsSubmitted';



const example = [{
  "name": "kalle",
  "prefs": ["No peas", "No gluten"]
},
{
  "name": "kalle2",
  "prefs": ["yes peas", "yes gluten"]
}];


class App extends Component {


  constructor() {
    super();
    /*
    const axios = require('axios');
    axios.get('/submissions').then(function (response) {
      // handle success
      console.log(response);
    });
*/
  }

  render() {
    
    return (

      
      <div>
        <IsSubmitted isSubmitted = {false}/>
        <SubmittedList users={example} />
        {//<PrefsSelector />
        }
      </div>
    );
  }
}

export default App;
