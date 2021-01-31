import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp';
import './index.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { contacts: [] }
  }

  componentDidMount() {
        fetch('https://randomuser.me/api/?results=50&seed=abc')
        .then(response => response.json())
        .then(parsedResponse => parsedResponse.results.map(user => (
            {
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                thumbnail: user.picture.thumbnail
            }
        )))
        .then(contacts =>  this.setState({contacts}));
  }

  render() {
    return (
      <div className="App">
        <ContactsApp contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
