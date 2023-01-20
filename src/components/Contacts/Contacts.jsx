import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";
import { FormList } from "./Contacts.styled";

export const Contacts = ({contacts,deleteFromContacts}) =>{
    return <FormList>
        {contacts.map(c =>{
            return (<ContactItem key={c.id} c = {c} deleteFromContacts = {deleteFromContacts}/>)
        })}
    </FormList>
}
Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          telephone: PropTypes.string.isRequired,
        })
      ).isRequired,
      deleteFromContacts: PropTypes.func.isRequired,
    }
