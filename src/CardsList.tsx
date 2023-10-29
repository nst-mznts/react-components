import React from 'react'
import { nanoid } from 'nanoid'
import './index.css'

class CardsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="cards-list">
            <ul>
               {this.props.cards.map(card => 
                    <li key={nanoid()}>
                        <h3 className='card-name'>{card.name}</h3>
                        <p><span className='bold'>height</span> {card.height}cm</p>
                        <p><span className='bold'>mass</span> {card.mass}kg</p>
                        <p><span className='bold'>gender</span> {card.gender}</p>
                        <p><span className='bold'>skin color</span> {card.skin_color}</p>
                        <p><span className='bold'>eye color</span> {card.eye_color}</p>
                    </li>
                )}
            </ul>

        </div>
        )
    }
}

export default CardsList