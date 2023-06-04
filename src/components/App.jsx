import css from './App.module.css';
import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
   state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleContactFormSubmit = evt => {
    const id = nanoid();
    const name = evt.name;
    const number = evt.number;
    const contactsLists = [...this.state.contacts];
    const doesExist = contactsLists.findIndex(contact => name === contact.name) !== -1;

    doesExist
      ? alert(`${name} is already in contacts.`)
      : contactsLists.push({ name, id, number });
    
    this.setState({ contacts: contactsLists });
  };

  handleContactDelete = evt => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== evt),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };
  
   render() {
    const { filter } = this.state;

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactFormSubmit} />
        <h2> Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onContactDelete={this.handleContactDelete}
        />
      </div>
    );
  }
};
