import { Component } from "react";
import styles from './form.module.css'

class Form extends Component {
    state = {
    name: '',
    number: '',
    id: ''
    }

    handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
    }

    handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value })
    }

    handleSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state.name, this.state.number);
      this.setState({ name: '', number: ''})
  };
  
    render() {
        return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
      <label  className={styles.label}>
        Name
        <input className={styles.input}
            type="text"
            name="name"
            placeholder="Taras Bulba"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
             />
            </label>
            <label className={styles.label}>
        Number
        <input className={styles.input}
             type="tel"
            name="number"
            placeholder="777-77-777"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
             />
      </label>
      <button type="submit" className={styles.button}>Add contacts</button>
      </form>  
        )
    }
}

export default Form;
