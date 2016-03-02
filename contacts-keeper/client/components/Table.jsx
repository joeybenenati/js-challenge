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
    var rows = this.data.contacts.map((contact, index) => {
      return <Contact key={index} {...contact} />
    }).sort((a, b) => { // sorts by sort state
      if (this.state.a_z) {
        return b.props[this.state.sort] < a.props[this.state.sort] //a-z
      } else {
        return b.props[this.state.sort] > a.props[this.state.sort] //z-a
      }
    })

    while (rows.length < 7) { //adds rows to maintain minumum of 7 
      rows.push(<Contact key={rows.length}/>)
    }
    return rows
  },

  render() {
    return (
      <RBS.Table bordered>
        <thead>
          <tr>
            <th><a className='sorted' id='firstName' onClick={this.changeSort}>First Name</a></th>
            <th><a id='lastName' onClick={this.changeSort}>Last Name</a></th>
            <th id='dob'>Date of Birth</th>
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