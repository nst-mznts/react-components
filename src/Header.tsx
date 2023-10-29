import React from 'react'
import Search from './Components/Search/Search'
import './index.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="wrapper">
            <Search clickHandler={this.props.clickHandler} cards={this.props.cards}/>
        </div>
      </header>
    )
  }
}

export default Header