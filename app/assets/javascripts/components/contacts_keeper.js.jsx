var ContactsKeeper = React.createClass({

  getInitialState: function() {
    return {
      contacts: this.props.data,
      search: '',
      showForm: false
    }
  },

  openForm: function() {
    this.setState({ showForm: true })
  },

  closeForm: function() {
    this.setState( { showForm: false })
  },

  searchInput: function(e) {
    this.setState({ search: e.target.value.toLowerCase() })
  },

  addContact: function(contact) { // adds contact to state
    var contacts = React.addons.update(this.state.contacts, { $push: [contact] })
    this.setState( { contacts: contacts })
  },

  removeContact: function(contact) { //removes contact from state
    var index = this.state.contacts.indexOf(contact)
    var contacts = React.addons.update(this.state.contacts, { $splice: [[index, 1]]})
    this.replaceState({ contacts: contacts })
  },

  updateContact: function(contact, data) { //updates state
    var index = this.state.contacts.indexOf(contact)
    contacts = React.addons.update(this.state.contacts, {$splice: [[index, 1, data]]})
    this.replaceState({ contacts: contacts})
  },

  render: function() {
    return (
      <div>
        <ReactBootstrap.PageHeader><small>Contacts Keeper</small></ReactBootstrap.PageHeader>
        <div className='header-spacer'></div>
        <div className='content'>
          <ReactBootstrap.Row className="show-grid controls">
            <ReactBootstrap.Col xs={5} sm={4} md={4}>
              <div className="input-group">
                <input type="text" className="form-control" onChange={this.searchInput} placeholder="Search"/>
                <div className="input-group-addon"><ReactBootstrap.Glyphicon glyph="search" /></div>
              </div>
            </ReactBootstrap.Col>
            {/*<ReactBootstrap.Col xs={4} sm={6} md={6}></ReactBootstrap.Col>*/}
            <ReactBootstrap.Col className='add-col' xs={7} sm={8} md={8} >
              <ReactBootstrap.Button bsSize="small" onClick={this.openForm} className='blue-white btn-add'>
                <ReactBootstrap.Glyphicon className='btn-glyph' glyph="plus-sign" />
                Contacts Keeper
              </ReactBootstrap.Button>
              <ContactForm show={this.state.showForm} handleNewContact={this.addContact} close={this.closeForm}/>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <Contacts search={this.state.search} contacts={this.state.contacts}
                    remove={this.removeContact} update={this.updateContact} 
                    />
        </div>
      </div>
    )
  }
});
