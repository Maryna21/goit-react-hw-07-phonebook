import './App.css';
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import s from 'app.module.css';
import Container from 'components/Container/container';
import { CSSTransition } from 'react-transition-group';
import logoTransition from 'logoTransition.module.css';
import { connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsOperations from 'redux/contacts-operations';
import { getLoading } from 'redux/contacts-selectors';
import { getElementError } from '@testing-library/dom';
import Error from 'components/Error/error';
import { getAllContacts} from 'redux/contacts-selectors';

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isloadingContacts, error, contacts } = this.props;
    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={logoTransition}
        unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
          </CSSTransition>
        <ContactForm />
        {(contacts.length > 1) &&  <Filter /> }
       
        {isloadingContacts && <h1>loading...</h1>}
        <ContactList />
        {error && <Error message={'ERROR contact is not found!'}/>}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isloadingContacts: getLoading(state),
  error: getElementError(state),
  contacts: getAllContacts(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);