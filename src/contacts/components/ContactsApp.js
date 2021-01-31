import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import LoadingHOC from './HOC/LoadingHOC'
import PropTypes from 'prop-types';

class ContactsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    };
  }

  handleUserInput = (searchTerm) => {
    this.setState({ filterText: searchTerm })
  }

  render() {
    return (
      <div className="contactApp">
        <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput} />
        <ContactList contacts={this.props.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string
    })
  ).isRequired
}


//export default ContactsApp;

export default LoadingHOC('contacts')(ContactsApp);
