import React  from 'react'
import './card-list.styling.css'
import {Card} from '../card/card.component'




export const Cardlist = (props) => {

    return (
        <div className="card-list">
            {
          props.monsters.map(monster => ( 
            
            <Card key={monster.id} monsters= {monster}/>
          ) )
        }
        
        </div>
    )

}