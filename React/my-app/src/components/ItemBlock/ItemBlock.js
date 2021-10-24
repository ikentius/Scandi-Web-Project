import React, { Component } from 'react'
import { IconContext } from 'react-icons/lib';
import {GiBookmarklet} from 'react-icons/gi';
import {FaCouch} from 'react-icons/fa';
import { BsDiscFill } from 'react-icons/bs';
import './ItemBlock.scss'

//This component is entirely responsible for representation of Item 
//which we get from our database and represent on client side
export default class ItemBlock extends Component {
    drawIcon(type){
        switch (type) {
            case 'DVD':
                return <IconContext.Provider value={{className:'item-icon', size:40}}>
                             <BsDiscFill/>
                        </IconContext.Provider>
            case 'Furniture':
                return<IconContext.Provider value={{className:'item-icon', size:40}}>
                             <FaCouch className='item-icon'/>
                </IconContext.Provider>
            case 'Book':
                return <IconContext.Provider value={{className:'item-icon', size:40}}>
                          <GiBookmarklet className='item-icon'/>
                    </IconContext.Provider>
            default:
                break;
        }
    }
    
    drawAddParams(type){
        switch (type) {
            case 'DVD':
                return 'Size: '+this.props.itemData.size + ' MB';
            case 'Furniture':
                return 'Dimensions: ' + this.props.itemData.height + 'x' + this.props.itemData.width + 'x' + this.props.itemData.length;
            case 'Book':    
                return 'Weight: '+this.props.itemData.weight+'KG';
            default:
                break;
        }
    }
    render() {
        return (
         
          <div className='item-block' key= {this.props.itemData.id}>
              <div className='checkbox-container'>
                <input type='checkbox' className='delete-checkbox'  name ='checkboxes[]'value={this.props.itemData.id}/>
              </div>
              <div  className='card'>
                   <div>{this.drawIcon(this.props.itemData.type)}</div>
                   <div className='text'>{this.props.itemData.sku}</div>
                   <div className='text'>{this.props.itemData.name}</div>
                   <div className='text'>{this.props.itemData.price}$</div>
                   <div className='text'>{this.drawAddParams(this.props.itemData.type)}</div>
              </div>
              <div className="spaceholder"></div>
          </div>   
            
        )
    }
}
