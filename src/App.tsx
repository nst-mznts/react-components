import React from 'react'
import Header from './Header'
import Content from './Content'
import './App.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        cards: [],
        api: "https://swapi.dev/api/people/"
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
      fetch(this.state.api, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify()
      })
      .then(response => response.json())
      .then(response => this.setState({cards: response.results}))
  }

  clickHandler(searchText, listOfCards) {
    if (!searchText) {
      console.log(listOfCards);
      return this.setState({cards: this.state.cards});
    }
    console.log(searchText);
    const copyArr = [...listOfCards];
    return this.setState({cards: copyArr.filter(card => card.name.toLowerCase().includes(searchText.toLowerCase()))});
  }

  render() {
    return (
      <>
        <Header clickHandler={this.clickHandler} cards={this.state.cards}/>
        <Content cards={this.state.cards}/>
      </>
    )
  }
}

export default App
