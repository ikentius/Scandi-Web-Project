import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import ItemsRow from '../ItemsRow/ItemsRow';
export default class ItemList extends Component {
    constructor(props){
        super(props)
        this.state ={
          data:null,
          DVD:null,
          Book:null,
          Furniture:null,
          fetched:false
        }
    }
    async  componentDidMount(){
      const url = 'https://scandiwebproject-irakli-beridze.000webhostapp.com/Controller/mainPage_controller.php';
      const json = await fetch(url);
      const data = await json.json();
      console.log(data);
      this.setState(
        {
        //basically all table of items fetched in json format
        data:data, 
        fetched:true,
        DVD:data.filter(item => item.type =='DVD'),
        Book:data.filter(item =>item.type =='Book'),
        Furniture:data.filter(item => item.type =='Furniture')    
    });
    }

    async handleSubmit(event){
        event.preventDefault();
        
        let form = event.target;
        let form_data = new FormData(form);
        
       let allCheckboxes = document.getElementsByClassName('delete-checkbox');
       Array.from(allCheckboxes).forEach(element => {
         //deleting item-block element, done like this since checkbox is grandchild of products main container 
        if(element.checked) element.parentNode.parentNode.remove();
        });
       const response = await fetch('https://scandiwebproject-irakli-beridze.000webhostapp.com/Controller/mainPage_controller.php',{
                     method: 'POST',
                     body: form_data
        }) 
       const receivedData = await response.json();
       console.log(receivedData);  
      }


      
    render() {
        return (
            this.state.fetched === false ? <div className='main'><Loader type="ThreeDots" color="#00ADB5" height={80} width={80} /> </div>:
            <form id='item-delete' className='main' onSubmit={this.handleSubmit}>
              {this.state.DVD === null ? <></> : <ItemsRow data = {this.state.DVD} />}
              {this.state.Book === null ? <></> : <ItemsRow data = {this.state.Book} />}
              {this.state.Furniture === null ? <></> : <ItemsRow data = {this.state.Furniture} />}
            </form>   
        )
    }
}
