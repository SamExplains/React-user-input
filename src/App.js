import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageList from "./components/ImageList";
import axios from 'axios';
import Searchbar from "./components/Searchbar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = (term) => {
    axios.get('https://picsum.photos/v2/list')
      .then(result => {
        console.warn(result.data);
        this.setState({images: result.data} );
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header ui container">
          <Searchbar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
          Found: {this.state.images.length} images

          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<p>*/}
          {/*  Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </header>
      </div>
    );
  }
}

export default App;
