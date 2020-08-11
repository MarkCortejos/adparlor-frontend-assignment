import React, { Component } from 'react';
import axios from 'axios';
import LibraryGallery from './components/LibraryGallery'
import Header from './components/Header'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      libraryItems: []
    }
  }

  componentDidMount() {
    this.axiosCall();
  }

  async axiosCall() {
    try {
      axios({
        method: 'get',
        responseType: 'json',
        url: 'https://5c48812b4c918c001429ccd6.mockapi.io/v1/templates'
      }).then(response => {
        this.setState({
          libraryItems: response.data
        })
      })
    } catch (error) {
        console.log(error)
    }
  }
  render() {
    const { libraryItems } = this.state
    return (
      <div className="App">
        <Header />
        <LibraryGallery libraryItems={libraryItems} />
      </div>
    )
  }
}

export default App;
