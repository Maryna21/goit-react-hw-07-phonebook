import PropTypes from 'prop-types';
import shortid from 'shortid';
import React, { Component } from 'react';
import s from 'components/ContactForm/contactForm.module.css';
import { connect } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
import Error from 'components/Error/error';
import { getAllContacts } from 'redux/contacts-selectors';
// import { toast } from 'react-toastify';

class ContactForm extends Component{
    loginInputId = shortid.generate();
    state = {
        name: '',
      number: '',
      error: false,
      }
  handleNameChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // if (this.state.name === '') {
    //    return toast.warning('Please write something!');
    // }
            
     if (this.props.contacts.find(({ name }) => name)) {
      this.setState({
        error: true,
      })
      return setTimeout(() => this.setState({ error: false, }), 500);
     }
    this.props.onSubmit(this.state);
    this.reset();
  }
        reset = () => {
            this.setState({name: '', number:''})
        }
  render() {
    const { error } = this.state;
    return (
              <>
              <form className={s.contactForm}
                onSubmit={this.handleSubmit}>
                <label className={s.labelForm} htmlFor={this.loginInputId}>Name</label>
                <input className={s.inputForm} type="text" name="name" id={this.loginInputId} value={this.state.name} onChange={this.handleNameChange}/>
                <label className={s.labelForm} htmlFor={this.loginInputId}>Number</label>
                <input className={s.inputForm}  type="tel" name="number" id={this.loginInputId} value={this.state.number} onChange={this.handleNameChange}/>
                <button className={s.buttonContactForm} type="submit">Add contact</button>
              </form>
              { error && <Error message='Contact is already exists!' /> } 
    </>
            );
          }}

          ContactForm.propTypes = {
            handleSubmit: PropTypes.func,
            onAddContact: PropTypes.func,
            loginInputId: PropTypes.func,
            name: PropTypes.string,
            number: PropTypes.number,
          };

const mapStateToProps = (state) => ({
  // console.log(state);
  contacts: getAllContacts(state),
});
         
const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(contactsOperations.addContact(name, number)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);