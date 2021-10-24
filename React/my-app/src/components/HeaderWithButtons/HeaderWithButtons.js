import React,{Component} from "react";
import './HeaderWithButtons.scss'
import {Link} from 'react-router-dom'
export class HeaderWithButtons extends Component{
    render(){
        return(
            <>
                <div className='header'>
                    <h3>{this.props.title}</h3>
                    <div className='spaceholder'></div>
                    <div className='buttons-row'>
                        <button form ={this.props.form} type='submit' id={this.props.buttonID}> {this.props.action}</button>
                        <Link className ='anchor'to ={this.props.url}>{this.props.anchorName}</Link>
                    </div>
                </div>
            </>
        )
    }

}