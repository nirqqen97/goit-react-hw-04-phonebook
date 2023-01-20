import PropTypes from "prop-types";
import { Item,Name,Phone,Btn } from "./ContactItem.styled"

export const ContactItem = ({c, deleteFromContacts}) =>{
    
    function handleClick(e) {
        deleteFromContacts(c)
    }
    return <Item>
        <Name>{c.name}:</Name>
        <Phone>{c.telephone}</Phone>
        <Btn type="button" onClick={handleClick}>Delete</Btn>
        </Item>
}
ContactItem.propTypes = {
    c: PropTypes.shape({
          name: PropTypes.string.isRequired,
          telephone: PropTypes.string.isRequired,}),
    deleteFromContacts: PropTypes.func.isRequired
}