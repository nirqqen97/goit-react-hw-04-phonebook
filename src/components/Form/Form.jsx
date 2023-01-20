import { Component } from "react";
import PropTypes from "prop-types";

import {FormWrap,SubmitBtn,Input, Label} from "./Form.styled";

export class Form extends Component {s
    state = {
        name:"",
        phone:"",
    }
    handleNameChange = (e) =>{
        this.setState({name: e.currentTarget.value})
    }
    handlePhoneChange = (e) =>{
        this.setState({phone: e.currentTarget.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {name,phone} = this.state
        this.props.onSubmit(name,phone)
        this.setState({name: '', phone: ''})
        e.target.reset()
        }
    render(){
        return(
            <FormWrap autoComplete="off" onSubmit={this.handleSubmit}>
            <Label>
                Name
                <Input type={"text"} 
                       name ={"name"}
                       onChange ={this.handleNameChange}
                       pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
                       title = {"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
                       value = {this.state.name}
                       required/>
                       
            </Label>
            <Label>
                Phone
                <Input type={"text"} 
                       name ={"telephone"}
                       onChange ={this.handlePhoneChange}
                       pattern = {"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}
                       value = {this.state.phone}
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}/>
                       
            </Label>
            <SubmitBtn>Submit</SubmitBtn>
        </FormWrap>
        )
    }
} 

Form.propTypes = {
    addContact: PropTypes.func,
}
