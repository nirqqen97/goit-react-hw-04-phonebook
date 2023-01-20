import PropTypes from "prop-types";
import { Input, Label } from "./InputFilter.styled";
export const InputFilter = ({onInput,value}) => {
 function handeInput ({target, }) {
        onInput(target.value);}
 return ( 
         <Label>
             Find contacts by name
             <Input 
             onInput={handeInput}
             pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
             value ={value}/>
         </Label>)
}

InputFilter.propTypes = {
    addFilter: PropTypes.func
}