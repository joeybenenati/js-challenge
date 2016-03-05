var Contacts = React.createClass({
  getInitialState: function() {
    return {
      // contacts: this.props.contacts
    }
  },

  renderContacts: function() {
    var contacts = this.props.contacts.map((contact, index) => {
      return <Contact key={index} active={true} {...contact} />
    })
    while (contacts.length < 7) { //adds rows to maintain minumum of 7 
      contacts.push(<Contact key={contacts.length} active={false}/>)
    }
    return contacts
  },

  render: function() {
    return (
      <ReactBootstrap.Table bordered>
        <thead>
          <tr>
            <th><ReactBootstrap.Glyphicon glyph="remove" /></th>
            <th><ReactBootstrap.Glyphicon glyph="pencil" /></th>
            <th><a className='sorted' id='firstName' onClick={this.changeSort}>First Name</a></th>
            <th><a id='lastName' onClick={this.changeSort}>Last Name</a></th>
            <th><a id='dob' onClick={this.changeSort}>Date of Birth</a></th>
            <th>Phone</th>
            <th><a id='email' onClick={this.changeSort}>Email</a></th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.renderContacts()}
        </tbody>
      </ReactBootstrap.Table>
    )
  }
});
