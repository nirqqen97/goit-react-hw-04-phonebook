import { useState } from "react";
import PropTypes from "prop-types";

import {FormWrap,SubmitBtn,Input, Label} from "./Form.styled";

export const Form = ({onSubmit}) =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (e) =>{
        setName(e.currentTarget.value)
        }
        const handlePhoneChange = (e) =>{
            setPhone(e.currentTarget.value)
        }
       const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(name,phone)
            setName('')
            setPhone('')
            e.target.reset()
            }
    return(
        <FormWrap autoComplete="off" onSubmit={handleSubmit}>
        <Label>
            Name
            <Input type={"text"} 
                   name ={"name"}
                   onChange ={handleNameChange}
                   pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
                   title = {"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
                   value = {name}
                   required/>
                
        </Label>
        <Label>
            Phone
            <Input type={"text"} 
                   name ={"telephone"}
                   onChange ={handlePhoneChange}
                   pattern = {"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}
                   value = {phone}
                   title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}/>
                
        </Label>
        <SubmitBtn>Submit</SubmitBtn>
    </FormWrap>
    )
}
Form.propTypes = {
    onSubmit: PropTypes.func,
}
