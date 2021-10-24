import React, { Component } from 'react'
import FinalForm from '../components/FinalForm/FinalForm';
import Footer from '../components/Footer/Footer';
import { HeaderWithButtons } from '../components/HeaderWithButtons/HeaderWithButtons';


export default class ItemPage extends Component {
    render() {
        return (
            <>
                <HeaderWithButtons  title='Add item' form='product_form' buttonID='save-product-btn' url='/' action='Save' anchorName='Cancel'/>
                <FinalForm/>
                <Footer/>
            </>
        )
    }
}
