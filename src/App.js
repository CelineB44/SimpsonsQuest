import React from 'react';
import axios from 'axios';
import './App.css'
import QuoteCard from './Components/QuoteCard';



const quoteSimpsons = {
  quote:
    "Can't we have one meeting that doesn't end with us digging up a corpse?",
  character: "Mayor Quimby",
  image:
  "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteSimpsons
    }
  }

  getQuote = () => {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0]
        });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard quote={this.state.quote}/>
        <button className="boutton" type="button" onClick={this.getQuote}>Another quote!!</button>
    </div>
    );
  }
}

export default App;
