import React from 'react'
import './Search.css'

class Search extends React.Component {
  constructor(proprs) {
    super(proprs);
  }

  render() {
    return (
        <div className='search'>
            <input type='text' placeholder='Type to search...' onChange={(event) => localStorage.setItem('searchText', event.target.value)} defaultValue={localStorage.getItem('searchText')}/>
            <button onClick={() => this.props.clickHandler(localStorage.getItem('searchText'), this.props.cards)}>Search</button>
        </div>
    )
  }
}

export default Search