import shortid from "shortid";
import { Component } from "react";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', telephone: '459-12-56'}
    ],
    filter: ''
  }
  componentDidMount () {
    const contacts = localStorage.getItem('contact')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts:parsedContacts })
    }
  }
  componentDidUpdate (pProps, pState) {
    if (pState.contacts !== this.state.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts))
      console.log("componentDID");

    }
  }
  deleteFromContacts = (contactToDelete) =>{
    const contacts = this.state.contacts.filter(contact => contact.id !== contactToDelete.id);
    this.setState({ contacts });

  }
  checkIsInContacts = (value) => {
    return this.state.contacts.find(contact => contact.name === value) !== undefined;
  }
  addFilter = (value) => {
      this.setState({
        filter: `${value}`,
      });
  }
 addContact = (name,telephone) =>{
   if (this.checkIsInContacts(name) ) {
     alert(`${name} is already in contacts`)
     return
   }
    const contact = {
      id : shortid.generate(),
      name,
      telephone,
    }
  
    this.setState(p => ({
      contacts: [contact, ...p.contacts]
    })) }
    contactsFilter = () => {   
      const contacts = this.state.contacts;
      const filter = this.state.filter
      const filtered = contacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
      return filtered
  
     }
    render(){

      return (
      <Container>
        <Form onSubmit = {this.addContact}/>
        <Title>Contacts</Title>
        <InputFilter onInput = {this.addFilter} value = {this.state.filter}/>
        <Contacts contacts = {this.contactsFilter()} deleteFromContacts = {this.deleteFromContacts}/>
        </Container>

      )
    }

}


