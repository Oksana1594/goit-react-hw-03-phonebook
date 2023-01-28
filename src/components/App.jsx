import { Component } from "react";
import shortid from "shortid";
import Form from './Form/Form';
import ContactList from './Contacts/ContactsList/ContactsList';
import FieldToFilter from "./FieldToFilter/FieldToFilter";
import Title from "./Shared/Title";
import MainTitle from "./Shared/MaineTitle";
import Container from "./Shared/Container";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("my-contacts"))
    if (contacts?.length) {
      this.setState({ contacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem("my-contacts", JSON.stringify(contacts))
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: shortid.generate(),
      name,
      number
    };

    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumberAdded = contacts.some(contact => contact.number === number);

    if (isNameAdded) {
      alert(`${name} is alredy in contacts`);
      return false;
    } else if (isNumberAdded) {
      alert(`${number} is alredy in contacts`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }))

    return true;
  }

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };


  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);

  }

  render() {
    const { filter, contacts } = this.state;

    const visibleContacts = this.getVisibleContacts()
    return (
      <Container>

        <MainTitle mainTitle="Phonebook " />
        <Form onSubmit={this.addContact} />
        <Title title="Contacts" />
        <FieldToFilter value={filter} onChange={this.changeFilter} />
        {contacts.length > 0 ? (
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />) : (
          <p>Your phonebook is empty. Please add contact.</p>)}

      </Container>

    );
  }
}

export default App;