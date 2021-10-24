import React, { Component } from 'react';
//this components is responsible for dynamic rendernig depending on select choice
export class ItemForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            //this will keep all data that is generated by choosing in select component
            //for example if we choose DVD, it will choose data needed for that, 
            //if interesed in data, please check Assets/forms.json
            selectResult:null
        }
    }
    handleChange(event){
        this.setState({selectResult:this.props.selectData[event.target.value]});
    }
    render(){
        return(
            <>
            <div className="form-row">
                    <div className="form-field-set">
                        <label htmlFor="productType">Type: </label>
                            <select className="itemSelect form-data" name={this.props.name} onChange = {this.handleChange}id="productType" autoComplete="off">
                            {this.props.selectValues.map((selectValue)=>
                                <option value = {selectValue}>{selectValue}</option>
                            )}
                            </select>
                    </div>
                    <span id={`error-${this.props.name}`}className="error-text"></span>
                </div>
                <div id="specialDetails" className="productForm">
                {this.state.selectResult === null ? <></>
                :this.state.selectResult.ids.map((field,i) =>
                    <div className='form-row' key = {i+3}>
                       <div className = 'form-field-set'>
                           <label htmlFor = {field}> {this.state.selectResult.labels[i]}</label>
                           <input className="item form-data" type="text" id={field} name='params[]'autoComplete="off"/>
                       </div>
                       <div className='error-text'><span id={`error-params${i}`} ></span></div>
                    </div>
                       )
            }
                   {this.state.selectResult === null ? <></>:
                   <div className="form-row add-info">{this.state.selectResult.text}</div>
                   }
            </div>
            </>
        )
    }
}
export default ItemForm