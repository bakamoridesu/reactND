import React, {Component} from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI';
import {Route} from 'react-router-dom';

class App extends Component {
	state = {
		contacts: []
	}
	componentDidMount() {
		ContactsAPI.getAll()
		.then((contacts) => {
			this.setState(()=>({
				contacts: contacts
			}))
		})
	}
	deleteContact = (contact) => {
		this.setState((currentState)=>({
			contacts: currentState.contacts.filter((c) => {
				return c.id !== contact.id
			})
		}),
		(() => {ContactsAPI.remove(contact)}))
	}
	
	createContact = (contact) => {
		ContactsAPI.create(contact)
		.then((contact) => {
			this.setState((currentState) => ({
				contacts: currentState.contacts.concat(contact)
			}))
		})
	}
	render(){
		return (
		  <div>
			<Route exact path='/' render={()=>(
				<ListContacts 
				contacts={this.state.contacts} 
				onDeleteContact={this.deleteContact}/>
			)}/>
			<Route path='/create' render = {({history}) => (
				<CreateContact
					onCreateContact = {(contact) => {
						history.push('/');
						this.createContact(contact);
					}}
				/>
			)}/>
		  </div>
		)
	}
}

export default App;
