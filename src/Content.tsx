import React from 'react'
import CardsList from './CardsList'
import './index.css'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <main>
        <div className="wrapper">
            <CardsList cards={this.props.cards}/>
        </div>
      </main>
    )
  }
}

export default Content