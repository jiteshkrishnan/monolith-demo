import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ContactList extends Component {

  filterContacts = (contacts, filterText) => contacts.filter(contact => {
    console.log(contact.name,filterText,contact.name.indexOf(filterText) !== -1)
   return  contact.name.indexOf(filterText) !== -1
  })

  render() {
    let { contacts, filterText } = this.props
    return (
      <ul className="ul">
        {this.filterContacts(contacts,filterText).map(
          (contact) => <li className="li" key={contact.email}>
            <img className="img" src={contact.thumbnail} role="presentation" />
            <div className="contactData">
              <strong>{contact.name}</strong><br /><small>{contact.email}</small>
            </div>
          </li>
        )}
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}


/*

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1);

  return (
    <ul className="ul">
      {filteredContacts.map(
        (contact) => <li className="li" key={contact.email}>
          <img className="img" src={contact.thumbnail} role="presentation" />
          <div className="contactData">
            <strong>{contact.name}</strong><br /><small>{contact.email}</small>
          </div>
        </li>
      )}
    </ul>
  )
}
export default ContactList;

*/