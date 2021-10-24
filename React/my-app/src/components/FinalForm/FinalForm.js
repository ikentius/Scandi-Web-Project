import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import FormSelectComponent from '../FormSelectComponent/FormSelectComponent'
import ItemForm from '../ItemForm/ItemForm'
import {Redirect} from 'react-router-dom'
import './FinalForm.scss';
export default class FinalForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            selectData:null,
            selectValues:null,
            form_fields:null,
            loading:true,
            redirect:false
        }
      }
    async componentDidMount(){
        const url = 'https://scandiwebproject-irakli-beridze.000webhostapp.com/Controller/addPage_controller.php';
        const json = await fetch(url);
        const data = await json.json();
        this.setState({selectData: data['selectOptionResult'],
         selectValues:data['selectValues'],
         form_fields:data['baseFormInputs'],
         loading:false
        });
    }
    async handleSubmit(event){
         event.preventDefault();
         let form = event.target;
         let form_data = new FormData(form);
         const response = await fetch('https://scandiwebproject-irakli-beridze.000webhostapp.com/Controller/addPage_controller.php',{
               method: 'POST',
               body: form_data
          }) 
        const receivedData = await response.json();
        if(receivedData.hasOwnProperty('success')){
            //preparing page for redirecting in case of item successfully uploading to database
            this.setState({redirect:true});
        }else{   
            //printing erros where they occured
             Object.keys(receivedData).forEach((error)=>{
             let errorText = document.getElementById('error-'+error);
             errorText.innerText = receivedData[error];
          })
      }  
    }
    render() {
        return (
            this.state.redirect ? <Redirect to="/" /> :
            <div className='main'>
                {this.state.loading ? <Loader type="ThreeDots" color="#00ADB5" height={80} width={80} />: 
                <form className='form' id='product_form' onSubmit={this.handleSubmit}>
                    <ItemForm form_fields={this.state.form_fields}/>
                    <FormSelectComponent selectData={this.state.selectData} selectValues ={this.state.selectValues} name='type'/> 
                </form>
                }
            </div>
        )
    }
}
