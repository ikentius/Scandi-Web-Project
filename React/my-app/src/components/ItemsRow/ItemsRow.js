import React, { Component } from 'react'
import ItemBlock from '../ItemBlock/ItemBlock';
import './ItemsRow.scss'
export default class ItemsRow extends Component {
  
    render() {
        return (
          <div className='items-row'>
            {this.props.data.map((item)=>
                <ItemBlock itemData = {item}/>
              )
            }
             </div>
        )
    }
}
