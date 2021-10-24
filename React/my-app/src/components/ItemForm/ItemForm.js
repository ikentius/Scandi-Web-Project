import React, { Component } from 'react'

export class ItemForm extends Component {
   
    render() {
        return (
            <>
                {this.props.form_fields.map((field,i) =>(
                <div className='form-row' key = {i}>
                    <div className = 'form-field-set'>
                        <label htmlFor = {field['id']}> {field['label']}</label>
                        <input className="item form-data" type="text" id={field['id']} name={field['id']}autoComplete="off"/>
                    </div>
                    <div className='error-text'><span id={`error-${field['id']}`} ></span></div>
                </div>
        ))}
            </>
        )
    }
}

export default ItemForm
