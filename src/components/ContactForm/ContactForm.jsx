import { Component } from "react";
import css from "./ContactForm.module.css"

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };
    
    handleFormSubmit = evt => {
        evt.preventDefault();
        const { name, number } = this.state;
        const form = evt.currentTarget;
        this.props.onSubmit({ name, number});
        form.reset();
    };

    render() {
    
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleFormSubmit} className={css.form}>
                <label className={css.label}>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // id={this.loginInputId}
                        placeholder="Enter name"
                        value={name}
                        onChange={this.handleChange}
                        className={css.input}
                        required
                />
                <label className={css.label}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder="Enter phone number"
                        value={number}
                        onChange={this.handleChange}
                        className={css.input}
                        required
                        />

                    <button type="submit" className={css.button}>Add contact</button>
            </form>
        )
    
    }
}