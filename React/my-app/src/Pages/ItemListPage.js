import React, { Component } from 'react'
import ItemList from '../components/ItemList/ItemList';
import Footer from '../components/Footer/Footer';
import  {HeaderWithButtons}  from '../components/HeaderWithButtons/HeaderWithButtons';


export default class ItemListPage extends Component {  
  render() {
        return (
            <>
                <HeaderWithButtons title='Item Page' form='item-delete' buttonID='delete-product-btn'action='MASS DELETE' url='/add-product' anchorName='ADD'/>
                <ItemList/>
                <Footer/>
            </>
        )
    }
}
