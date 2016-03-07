Table = React.createClass({

  mixins:[ReactMeteorData],

  getInitialState() {
    return {
      sort: 'firstName',
      a_z: true
    }
  },

  getMeteorData() {
    return {
      contacts: Contacts.find().fetch()
    }
  },

  changeSort(event) { //changes sort paremeter
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
  
  renderContacts() {
    var rows = this.data.contacts.filter(contact => { //filter by search input 
      var searchInput = this.props.search.toLowerCase()
      if (searchInput) {
        return contact.firstName.toLowerCase().includes(searchInput) || 
          contact.lastName.toLowerCase().includes(searchInput) ||
          contact.email.toLowerCase().includes(searchInput) ||
          contact.email.toLowerCase().includes(searchInput) ||
          contact.phone.toLowerCase().includes(searchInput) 
      } else {
        return contact
      }
    }).map((contact, index) => {
      return <Contact key={index} active={true} {...contact} />
    }).sort((a, b) => { // sorts by sort state
      return sortBy[this.state.sort](a.props.contact, b.props.contact, this.state.a_z) /*b.props[this.state.sort] < a.props[this.state.sort]*/ //a-z
    })

    while (rows.length < 7) { //adds rows to maintain minumum of 7 
      rows.push(<Contact key={rows.length} active={false}/>)
    }
    return rows
  },

  render() {
    return (
      <RBS.Table bordered>
        <thead>
          <tr>
            <th><RBS.Glyphicon glyph="remove" /></th>
            <th><RBS.Glyphicon glyph="pencil" /></th>
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
      </RBS.Table>
    )
  }
})