var Contacts = React.createClass({
  getInitialState: function() {
    return {
      sort: 'firstname',
      a_z: true
    }
  },

  changeSort(event) { //changes sort parameter
    $('.sorted').removeClass('sorted');
    $('#' + event.target.id).addClass('sorted');
    if (this.state.sort === event.target.id) { //reverse sort if already on current sort state
      this.setState({a_z: !this.state.a_z})
    } else {
      this.setState({
        sort: event.target.id,
        a_z: true
      })
    }
  },

  renderContacts: function() {
    var contacts = this.props.contacts.filter(contact => { //filter by seach input
      if (this.props.search) {
        return searchFilter(contact, this.props.search)  
      } else {
        return contact
      }
    }).map((contact, index) => {
      return <Contact key={index} active={true} contact={contact} remove={this.props.remove} update={this.props.update}/>
    }).sort((a, b) => { // sorts by sort state
      return sortBy[this.state.sort](a.props.contact, b.props.contact, this.state.a_z)
    })

    while (contacts.length < 7) { //adds blank rows for minimum of 7 
      contacts.push(<Contact key={contacts.length} contact={{}} active={false} />)
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
            <th><a className='sorted' id='firstname' onClick={this.changeSort}>First Name</a></th>
            <th><a id='lastname' onClick={this.changeSort}>Last Name</a></th>
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
